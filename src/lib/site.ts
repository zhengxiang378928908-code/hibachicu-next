const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hibachicu.com").replace(/\/$/, "");
const configuredReviewUrl = process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL?.trim() ?? "";
const directReviewUrl = configuredReviewUrl || "https://g.page/r/Cd0Rn872OgrqEAE/review";
const reviewSearchUrl = `https://www.google.com/search?q=${encodeURIComponent("Hibachi CU reviews")}`;

export const siteConfig = {
  name: "Hibachi CU",
  siteUrl,
  title: "Mobile Hibachi Catering & Private Hibachi Chef at Home",
  description:
    "Mobile hibachi catering for backyard parties, birthdays, vacation rentals, and private events. Book a private hibachi chef at home with live cooking and transparent pricing.",
  bookingUrl:
    "https://app.acuityscheduling.com/schedule/f65e453b/appointment/88159880/calendar/13406740?appointmentTypeIds%5B%5D=88159880",
  phoneHref: "tel:6462093047",
  phoneDisplay: "6462093047",
  email: "hibachicu@gmail.com",
  ogImage: "/opengraph-image",
  directReviewUrl,
  reviewSearchUrl,
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
  ],
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function getReviewDestination() {
  return siteConfig.directReviewUrl || siteConfig.reviewSearchUrl;
}

export function hasDirectReviewUrl() {
  return siteConfig.directReviewUrl.length > 0;
}
