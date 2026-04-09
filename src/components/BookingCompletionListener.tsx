"use client";

import { useEffect } from "react";

import { trackBookingCompletion } from "@/lib/booking-completion";

type BookingCompleteMessage = {
  type: "hibachicu:booking_complete";
  payload?: Record<string, unknown>;
};

function isBookingCompleteMessage(data: unknown): data is BookingCompleteMessage {
  return (
    typeof data === "object" &&
    data !== null &&
    "type" in data &&
    (data as { type?: unknown }).type === "hibachicu:booking_complete"
  );
}

export default function BookingCompletionListener() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent<unknown>) => {
      if (!isBookingCompleteMessage(event.data)) {
        return;
      }

      trackBookingCompletion(event.data.payload ?? {}, {
        method: "postmessage",
      });
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}
