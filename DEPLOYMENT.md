# Deployment Manual

This project is deployed to a Google Cloud VM and served by `systemd` + `nginx`.

## Production server

- Instance: `instance-20260317-20260423-010138`
- Host: `34.94.159.175`
- SSH transport: Google Cloud IAP tunnel
- App directory: `/home/Apple/hibachicu-next`
- App service: `hibachicu-next.service`
- Public site: `https://www.hibachicu.com`

## Runtime layout

- `nginx` proxies public traffic
- Next.js app runs on port `3000`
- `systemd` starts the app with:

```ini
ExecStart=/usr/bin/env bash -lc 'npm start -- -p 3000 -H 0.0.0.0'
```

## Attribution setup

- The site now stores first-touch attribution locally and appends tracked params such as `utm_*`, `gclid`, `fbclid`, `ttclid`, and `msclkid` to every Acuity booking link.
- The site also stores the last page and CTA button used before the booking click, so completed bookings can be tied back to the exact page that triggered the reservation.
- If you want the source summary to appear inside each Acuity booking, create one internal intake-form field in Acuity and expose its numeric field ID as:

```bash
NEXT_PUBLIC_ACUITY_ATTRIBUTION_FIELD_ID=12345678
```

- Recommended Acuity field label: `Attribution Source`
- Recommended field type: internal / hidden text field
- With this field configured, Acuity records can show a compact summary like landing page, referrer, final CTA page, and CTA name.
- Without this env var, the site still preserves attribution in booking URLs and sends GA booking-intent and completion events, but Acuity itself will not show the summary inside the appointment record.

## Booking completion tracking

- The site now has a confirmation page at `https://www.hibachicu.com/booking/confirmed` and a global listener for `booking_complete`.
- To close the loop for embedded bookings on the homepage, add this snippet in Acuity at `Integrations` -> `Analytics & Conversion Tracking` -> `Custom Conversion Tracking`:

```html
<script>
(function () {
  var payload = {
    appointmentId: "%id%",
    value: "%price%",
    currency: "USD",
    appointmentType: "%appointmentType%",
    calendar: "%calendar%",
    clientDate: "%clientDate%",
    clientTime: "%clientTime%"
  };

  try {
    window.top.postMessage({
      type: "hibachicu:booking_complete",
      payload: payload
    }, "*");
  } catch (error) {}
})();
</script>
```

- To cover direct Acuity bookings opened outside the embed, also enable Acuity's built-in Google Analytics integration with the same GA4 Measurement ID used on the site. That lets Acuity send the final conversion from its own confirmation page.
- If you want Acuity to redirect users back to your site after booking, point the redirect or confirmation CTA to:

```text
https://www.hibachicu.com/booking/confirmed?appointmentId=%id%&value=%price%&currency=USD&appointmentType=%appointmentType%&calendar=%calendar%&clientDate=%clientDate%&clientTime=%clientTime%
```

- The redirect step depends on your Acuity confirmation settings and custom code behavior. The `postMessage` snippet above is the safer option for the embedded scheduler because it does not interrupt the confirmation page.

## Deploy checklist

1. Run checks locally:

```bash
npm run lint
npm run build
```

2. Commit and push:

```bash
git add .
git commit -m "Your deploy message"
git push origin main
```

3. Create a remote backup before replacing files:

```bash
gcloud compute ssh instance-20260317-20260423-010138 \
  --zone=us-west2-c \
  --tunnel-through-iap \
  --command 'cp -a /home/Apple/hibachicu-next /home/Apple/hibachicu-next-backup-$(date +%Y%m%d-%H%M%S)'
```

4. Sync the project to the VM.
   Exclude local-only files, build output, git metadata, and temporary artifacts.
   Direct SSH to the VM may be blocked, so the stable path is: package locally -> upload to GCS -> fetch on the VM:

```bash
COPYFILE_DISABLE=1 \
tar -czf /tmp/hibachicu-next-deploy.tar.gz \
  --exclude='.git' \
  --exclude='.next' \
  --exclude='node_modules' \
  --exclude='.tmp*' \
  --exclude='CLAUDE.md' \
  --exclude='Figma' \
  --exclude='public/images/menu-*-card*.jpg' \
  --exclude='public/images/menu-*-new*.jpg' \
  -C /Users/Apple/Desktop hibachicu-next

gcloud storage cp /tmp/hibachicu-next-deploy.tar.gz \
  gs://hibachicu-deploy-project-d9b2fe87-2d16-44b5-bb4/releases/hibachicu-next-manual-deploy.tar.gz

gcloud compute ssh instance-20260317-20260423-010138 \
  --zone=us-west2-c \
  --tunnel-through-iap \
  --command '
    rm -rf /tmp/hibachicu-next-deploy &&
    mkdir -p /tmp/hibachicu-next-deploy &&
    gcloud storage cp gs://hibachicu-deploy-project-d9b2fe87-2d16-44b5-bb4/releases/hibachicu-next-manual-deploy.tar.gz /tmp/hibachicu-next-deploy/release.tar.gz &&
    tar -xzf /tmp/hibachicu-next-deploy/release.tar.gz -C /tmp/hibachicu-next-deploy &&
    rsync -av --delete /tmp/hibachicu-next-deploy/hibachicu-next/ /home/Apple/hibachicu-next/
  '
```

5. Install dependencies and build on the server:

```bash
gcloud compute ssh instance-20260317-20260423-010138 \
  --zone=us-west2-c \
  --tunnel-through-iap \
  --command 'su - Apple -c "cd /home/Apple/hibachicu-next && npm install && npm run build"'
```

6. Restart the service:

```bash
gcloud compute ssh instance-20260317-20260423-010138 \
  --zone=us-west2-c \
  --tunnel-through-iap \
  --command 'systemctl restart hibachicu-next.service && systemctl status hibachicu-next.service --no-pager'
```

7. Verify production:

```bash
curl -I https://www.hibachicu.com/
curl -I https://www.hibachicu.com/menu/connecticut
curl -I https://www.hibachicu.com/menu/connecticut/stamford
```

## Useful ops commands

Check service logs:

```bash
gcloud compute ssh instance-20260317-20260423-010138 \
  --zone=us-west2-c \
  --tunnel-through-iap \
  --command 'journalctl -u hibachicu-next.service -n 200 --no-pager'
```

Check service file:

```bash
gcloud compute ssh instance-20260317-20260423-010138 \
  --zone=us-west2-c \
  --tunnel-through-iap \
  --command 'systemctl cat hibachicu-next.service'
```

Reload `systemd` after editing the unit file:

```bash
gcloud compute ssh instance-20260317-20260423-010138 \
  --zone=us-west2-c \
  --tunnel-through-iap \
  --command 'systemctl daemon-reload && systemctl restart hibachicu-next.service'
```

## Rollback

If a deploy fails and you need to restore a backup:

```bash
gcloud compute ssh instance-20260317-20260423-010138 \
  --zone=us-west2-c \
  --tunnel-through-iap \
  --command '
    systemctl stop hibachicu-next.service &&
    rm -rf /home/Apple/hibachicu-next &&
    cp -a /home/Apple/hibachicu-next-backup-YYYYMMDD-HHMMSS /home/Apple/hibachicu-next &&
    systemctl start hibachicu-next.service
  '
```

Replace `YYYYMMDD-HHMMSS` with the backup timestamp you want to restore.
