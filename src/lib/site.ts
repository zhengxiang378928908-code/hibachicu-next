export const siteConfig = {
  name: "Hibachi CU",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hibachicu.com").replace(/\/$/, ""),
  title: "Mobile Hibachi Catering & Private Hibachi Chef at Home",
  description:
    "Mobile hibachi catering for backyard parties, birthdays, vacation rentals, and private events. Book a private hibachi chef at home with live cooking and transparent pricing.",
  bookingUrl:
    "https://app.acuityscheduling.com/schedule/f65e453b/appointment/88159880/calendar/13406740?appointmentTypeIds%5B%5D=88159880",
  phoneHref: "tel:646209347",
  phoneDisplay: "646209347",
  email: "www.hibachicu@gmail.com",
  ogImage: "/opengraph-image",
  serviceAreas: [
    "Pennsylvania",
    "New York",
    "Vermont",
    "New Hampshire",
    "Massachusetts",
    "Connecticut",
    "Rhode Island",
    "New Jersey",
    "Delaware",
    "Maryland",
    "Washington D.C.",
    "Florida",
  ],
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
