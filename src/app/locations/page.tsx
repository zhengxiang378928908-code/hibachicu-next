import { redirect } from "next/navigation";

import { getReviewDestination } from "@/lib/site";

export default function LegacyLocationsPage() {
  redirect(getReviewDestination());
}
