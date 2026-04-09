import {
  readStoredBookingAttribution,
  readStoredLastBookingCta,
} from "@/lib/booking-attribution";
import { trackBookingEvent } from "@/lib/analytics";

const TRACKED_COMPLETIONS_STORAGE_KEY = "hibachicu.bookingCompletionIds.v1";
const DEFAULT_CURRENCY = "USD";

export type BookingCompletionPayload = {
  appointmentId: string;
  value?: number;
  currency?: string;
  appointmentType?: string;
  calendar?: string;
  clientDate?: string;
  clientTime?: string;
};

function normalizeText(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, 120);
}

function normalizeValue(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const normalized = Number.parseFloat(value);
    return Number.isFinite(normalized) ? normalized : undefined;
  }

  return undefined;
}

function readTrackedCompletionIds() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const rawValue = window.localStorage.getItem(TRACKED_COMPLETIONS_STORAGE_KEY);

    if (!rawValue) {
      return [];
    }

    const parsed = JSON.parse(rawValue);
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === "string" && item.length > 0)
      : [];
  } catch {
    return [];
  }
}

function markCompletionTracked(appointmentId: string) {
  if (typeof window === "undefined") {
    return;
  }

  const trackedIds = readTrackedCompletionIds();

  if (trackedIds.includes(appointmentId)) {
    return;
  }

  trackedIds.push(appointmentId);
  window.localStorage.setItem(
    TRACKED_COMPLETIONS_STORAGE_KEY,
    JSON.stringify(trackedIds.slice(-40)),
  );
}

export function normalizeBookingCompletionPayload(
  payload: Partial<BookingCompletionPayload> | Record<string, unknown>,
) {
  const appointmentId = normalizeText(payload.appointmentId);

  if (!appointmentId) {
    return null;
  }

  return {
    appointmentId,
    value: normalizeValue(payload.value),
    currency: normalizeText(payload.currency) || DEFAULT_CURRENCY,
    appointmentType: normalizeText(payload.appointmentType),
    calendar: normalizeText(payload.calendar),
    clientDate: normalizeText(payload.clientDate),
    clientTime: normalizeText(payload.clientTime),
  } satisfies BookingCompletionPayload;
}

export function trackBookingCompletion(
  rawPayload: Partial<BookingCompletionPayload> | Record<string, unknown>,
  options?: {
    method?: "postmessage" | "redirect";
  },
) {
  if (typeof window === "undefined") {
    return false;
  }

  const payload = normalizeBookingCompletionPayload(rawPayload);

  if (!payload) {
    return false;
  }

  const trackedIds = readTrackedCompletionIds();

  if (trackedIds.includes(payload.appointmentId)) {
    return false;
  }

  const attribution = readStoredBookingAttribution();
  const lastCta = readStoredLastBookingCta();

  trackBookingEvent("booking_complete", {
    booking_id: payload.appointmentId,
    completion_method: options?.method ?? "postmessage",
    value: payload.value,
    currency: payload.currency,
    appointment_type: payload.appointmentType,
    booking_calendar: payload.calendar,
    booking_date: payload.clientDate,
    booking_time: payload.clientTime,
    utm_source: attribution?.query.utm_source,
    utm_medium: attribution?.query.utm_medium,
    utm_campaign: attribution?.query.utm_campaign,
    landing_path: attribution?.firstLandingPath,
    landing_referrer: attribution?.firstReferrer,
    cta_path: lastCta?.path,
    cta_name: lastCta?.ctaName,
    cta_clicked_at: lastCta?.clickedAt,
  });

  trackBookingEvent("purchase", {
    transaction_id: payload.appointmentId,
    value: payload.value,
    currency: payload.currency,
    items: payload.appointmentType ? [{ item_name: payload.appointmentType, item_category: "Appointment" }] : undefined,
    appointment_type: payload.appointmentType,
    booking_calendar: payload.calendar,
    completion_method: options?.method ?? "postmessage",
    cta_path: lastCta?.path,
    cta_name: lastCta?.ctaName,
  });

  markCompletionTracked(payload.appointmentId);
  return true;
}
