"use client";

import { useSyncExternalStore } from "react";

import BookingCompletionTracker from "@/components/BookingCompletionTracker";

type BookingConfirmedPayload = {
  appointmentId: string;
  value: string;
  currency: string;
  appointmentType: string;
  calendar: string;
  clientDate: string;
  clientTime: string;
};

const defaultPayload: BookingConfirmedPayload = {
  appointmentId: "",
  value: "",
  currency: "USD",
  appointmentType: "",
  calendar: "",
  clientDate: "",
  clientTime: "",
};

function readPayloadFromLocation() {
  if (typeof window === "undefined") {
    return defaultPayload;
  }

  const params = new URLSearchParams(window.location.search);

  return {
    appointmentId: params.get("appointmentId") ?? "",
    value: params.get("value") ?? "",
    currency: params.get("currency") || "USD",
    appointmentType: params.get("appointmentType") ?? "",
    calendar: params.get("calendar") ?? "",
    clientDate: params.get("clientDate") ?? "",
    clientTime: params.get("clientTime") ?? "",
  };
}

function subscribeToLocation() {
  return () => {};
}

export default function BookingConfirmedDetails() {
  const payload = useSyncExternalStore(
    subscribeToLocation,
    readPayloadFromLocation,
    () => defaultPayload,
  );

  return (
    <>
      <BookingCompletionTracker payload={payload} />

      <div className="mt-10 grid gap-4 text-left md:grid-cols-2">
        <div
          className="rounded-2xl px-5 py-4"
          style={{ background: "var(--color-surface-container)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ffb786]">
            Appointment
          </p>
          <p className="mt-3 text-lg font-semibold">
            {payload.appointmentType || "Private Hibachi Experience"}
          </p>
        </div>

        <div
          className="rounded-2xl px-5 py-4"
          style={{ background: "var(--color-surface-container)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ffb786]">
            Scheduled For
          </p>
          <p className="mt-3 text-lg font-semibold">
            {[payload.clientDate, payload.clientTime].filter(Boolean).join(" · ") ||
              "Check your confirmation email"}
          </p>
        </div>
      </div>
    </>
  );
}
