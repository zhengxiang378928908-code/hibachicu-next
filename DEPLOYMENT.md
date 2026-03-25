# Deployment Manual

This project is deployed to a Google Cloud VM and served by `systemd` + `nginx`.

## Production server

- Host: `136.114.146.128`
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
ssh 136.114.146.128 'cp -a /home/Apple/hibachicu-next /home/Apple/hibachicu-next-backup-$(date +%Y%m%d-%H%M%S)'
```

4. Sync the project to the VM.
   Exclude local-only files, build output, git metadata, and temporary artifacts:

```bash
rsync -avz --delete \
  --exclude '.git' \
  --exclude '.next' \
  --exclude 'node_modules' \
  --exclude '.tmp*' \
  --exclude 'CLAUDE.md' \
  --exclude 'Figma' \
  --exclude 'public/images/menu-*-card*.jpg' \
  --exclude 'public/images/menu-*-new*.jpg' \
  -e ssh \
  /Users/Apple/Desktop/hibachicu-next/ \
  136.114.146.128:/home/Apple/hibachicu-next/
```

5. Install dependencies and build on the server:

```bash
ssh 136.114.146.128 'su - Apple -c "cd /home/Apple/hibachicu-next && npm install && npm run build"'
```

6. Restart the service:

```bash
ssh 136.114.146.128 'systemctl restart hibachicu-next.service && systemctl status hibachicu-next.service --no-pager'
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
ssh 136.114.146.128 'journalctl -u hibachicu-next.service -n 200 --no-pager'
```

Check service file:

```bash
ssh 136.114.146.128 'systemctl cat hibachicu-next.service'
```

Reload `systemd` after editing the unit file:

```bash
ssh 136.114.146.128 'systemctl daemon-reload && systemctl restart hibachicu-next.service'
```

## Rollback

If a deploy fails and you need to restore a backup:

```bash
ssh 136.114.146.128 '
  systemctl stop hibachicu-next.service &&
  rm -rf /home/Apple/hibachicu-next &&
  cp -a /home/Apple/hibachicu-next-backup-YYYYMMDD-HHMMSS /home/Apple/hibachicu-next &&
  systemctl start hibachicu-next.service
'
```

Replace `YYYYMMDD-HHMMSS` with the backup timestamp you want to restore.
