"use client";

import { useEffect } from "react";

import { trackBookingCompletion } from "@/lib/booking-completion";

type BookingCompletionTrackerProps = {
  payload: Record<string, unknown>;
};

export default function BookingCompletionTracker({
  payload,
}: BookingCompletionTrackerProps) {
  useEffect(() => {
    trackBookingCompletion(payload, {
      method: "redirect",
    });
  }, [payload]);

  return null;
}
