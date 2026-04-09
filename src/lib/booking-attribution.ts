const BOOKING_ATTRIBUTION_STORAGE_KEY = "hibachicu.bookingAttribution.v1";
const LAST_BOOKING_CTA_STORAGE_KEY = "hibachicu.lastBookingCta.v1";
const ACUITY_ATTRIBUTION_FIELD_ID =
  process.env.NEXT_PUBLIC_ACUITY_ATTRIBUTION_FIELD_ID?.trim() ?? "";
const MAX_ACUITY_FIELD_LENGTH = 255;

export const TRACKED_ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "ttclid",
  "msclkid",
] as const;

type AttributionKey = (typeof TRACKED_ATTRIBUTION_KEYS)[number];
type AttributionQuery = Partial<Record<AttributionKey, string>>;

export type BookingAttribution = {
  capturedAt: string;
  firstLandingPath: string;
  firstReferrer: string;
  query: AttributionQuery;
};

export type BookingCtaSnapshot = {
  path: string;
  ctaName: string;
  clickedAt: string;
};

type SearchInput = string | URLSearchParams | null | undefined;

function asSearchParams(search?: SearchInput) {
  if (!search) {
    return new URLSearchParams();
  }

  if (search instanceof URLSearchParams) {
    return search;
  }

  const normalized = search.startsWith("?") ? search.slice(1) : search;
  return new URLSearchParams(normalized);
}

function sanitizeValue(value: string) {
  return value.trim().slice(0, 120);
}

function pickTrackedQuery(search?: SearchInput): AttributionQuery {
  const params = asSearchParams(search);
  const query: AttributionQuery = {};

  for (const key of TRACKED_ATTRIBUTION_KEYS) {
    const value = params.get(key);

    if (!value) {
      continue;
    }

    query[key] = sanitizeValue(value);
  }

  return query;
}

function normalizeReferrer(referrer?: string | null) {
  if (!referrer) {
    return "";
  }

  try {
    return new URL(referrer).hostname;
  } catch {
    return sanitizeValue(referrer);
  }
}

function buildPathWithSearch(pathname?: string, search?: SearchInput) {
  const safePathname = pathname?.trim() || "/";
  const params = asSearchParams(search);
  const queryString = params.toString();

  return queryString ? `${safePathname}?${queryString}` : safePathname;
}

function isAttributionKey(key: string): key is AttributionKey {
  return TRACKED_ATTRIBUTION_KEYS.includes(key as AttributionKey);
}

function parseStoredAttribution(rawValue: string | null): BookingAttribution | null {
  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue) as Partial<BookingAttribution> & {
      query?: Record<string, unknown>;
    };

    const queryEntries = Object.entries(parsed.query ?? {}).filter(
      ([key, value]) => isAttributionKey(key) && typeof value === "string" && value.trim().length > 0,
    );

    return {
      capturedAt:
        typeof parsed.capturedAt === "string" && parsed.capturedAt
          ? parsed.capturedAt
          : new Date().toISOString(),
      firstLandingPath:
        typeof parsed.firstLandingPath === "string" && parsed.firstLandingPath
          ? parsed.firstLandingPath
          : "/",
      firstReferrer:
        typeof parsed.firstReferrer === "string" ? parsed.firstReferrer : "",
      query: Object.fromEntries(queryEntries) as AttributionQuery,
    };
  } catch {
    return null;
  }
}

function saveAttribution(attribution: BookingAttribution) {
  window.localStorage.setItem(
    BOOKING_ATTRIBUTION_STORAGE_KEY,
    JSON.stringify(attribution),
  );
}

function parseStoredBookingCta(rawValue: string | null): BookingCtaSnapshot | null {
  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue) as Partial<BookingCtaSnapshot>;

    if (
      typeof parsed.path !== "string" ||
      parsed.path.trim().length === 0 ||
      typeof parsed.clickedAt !== "string" ||
      parsed.clickedAt.trim().length === 0
    ) {
      return null;
    }

    return {
      path: parsed.path.trim(),
      ctaName:
        typeof parsed.ctaName === "string" && parsed.ctaName.trim().length > 0
          ? parsed.ctaName.trim()
          : "book_now",
      clickedAt: parsed.clickedAt.trim(),
    };
  } catch {
    return null;
  }
}

export function readStoredBookingAttribution() {
  if (typeof window === "undefined") {
    return null;
  }

  return parseStoredAttribution(
    window.localStorage.getItem(BOOKING_ATTRIBUTION_STORAGE_KEY),
  );
}

export function persistLastBookingCta(path: string, ctaName?: string) {
  if (typeof window === "undefined") {
    return null;
  }

  const snapshot: BookingCtaSnapshot = {
    path: path.trim() || "/",
    ctaName: ctaName?.trim() || "book_now",
    clickedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(
    LAST_BOOKING_CTA_STORAGE_KEY,
    JSON.stringify(snapshot),
  );

  return snapshot;
}

export function readStoredLastBookingCta() {
  if (typeof window === "undefined") {
    return null;
  }

  return parseStoredBookingCta(
    window.localStorage.getItem(LAST_BOOKING_CTA_STORAGE_KEY),
  );
}

export function persistBookingAttribution(options?: {
  pathname?: string;
  search?: SearchInput;
  referrer?: string | null;
}) {
  if (typeof window === "undefined") {
    return null;
  }

  const pathname = options?.pathname ?? window.location.pathname;
  const search = options?.search ?? window.location.search;
  const referrer = options?.referrer ?? document.referrer;

  const existing = readStoredBookingAttribution();
  const nextQuery = pickTrackedQuery(search);
  const nextPath = buildPathWithSearch(pathname, search);

  const nextAttribution: BookingAttribution = {
    capturedAt: existing?.capturedAt ?? new Date().toISOString(),
    firstLandingPath: existing?.firstLandingPath || nextPath,
    firstReferrer: existing?.firstReferrer || normalizeReferrer(referrer),
    query: {
      ...(existing?.query ?? {}),
      ...nextQuery,
    },
  };

  saveAttribution(nextAttribution);
  return nextAttribution;
}

function buildAcuityAttributionValue(
  attribution: BookingAttribution | null,
  currentPath: string,
) {
  const parts: string[] = [];

  if (attribution?.query.utm_source) {
    parts.push(`src=${attribution.query.utm_source}`);
  }
  if (attribution?.query.utm_medium) {
    parts.push(`med=${attribution.query.utm_medium}`);
  }
  if (attribution?.query.utm_campaign) {
    parts.push(`cam=${attribution.query.utm_campaign}`);
  }
  if (attribution?.query.utm_term) {
    parts.push(`term=${attribution.query.utm_term}`);
  }
  if (attribution?.query.utm_content) {
    parts.push(`content=${attribution.query.utm_content}`);
  }
  if (attribution?.query.gclid) {
    parts.push(`gclid=${attribution.query.gclid}`);
  }
  if (attribution?.query.fbclid) {
    parts.push(`fbclid=${attribution.query.fbclid}`);
  }
  if (attribution?.query.msclkid) {
    parts.push(`msclkid=${attribution.query.msclkid}`);
  }
  if (attribution?.query.ttclid) {
    parts.push(`ttclid=${attribution.query.ttclid}`);
  }
  if (attribution?.firstLandingPath) {
    parts.push(`landing=${attribution.firstLandingPath}`);
  }
  if (attribution?.firstReferrer) {
    parts.push(`ref=${attribution.firstReferrer}`);
  }

  const lastCta = readStoredLastBookingCta();

  if (lastCta?.path) {
    parts.push(`cta=${lastCta.path}`);
  } else if (currentPath && currentPath !== attribution?.firstLandingPath) {
    parts.push(`cta=${currentPath}`);
  }

  if (lastCta?.ctaName) {
    parts.push(`cta_name=${lastCta.ctaName}`);
  }

  return parts.join(" | ").slice(0, MAX_ACUITY_FIELD_LENGTH);
}

export function buildAcuityBookingUrl(
  baseUrl: string,
  options?: {
    pathname?: string;
    search?: SearchInput;
    referrer?: string | null;
  },
) {
  const url = new URL(baseUrl);
  const currentPath = buildPathWithSearch(options?.pathname, options?.search);
  const liveQuery = pickTrackedQuery(options?.search);

  const storedAttribution =
    typeof window === "undefined"
      ? null
      : readStoredBookingAttribution() ??
        persistBookingAttribution({
          pathname: options?.pathname,
          search: options?.search,
          referrer: options?.referrer,
        });

  const mergedQuery = {
    ...(storedAttribution?.query ?? {}),
    ...liveQuery,
  };

  for (const [key, value] of Object.entries(mergedQuery)) {
    if (!value) {
      continue;
    }

    url.searchParams.set(key, value);
  }

  if (ACUITY_ATTRIBUTION_FIELD_ID) {
    const fieldValue = buildAcuityAttributionValue(
      storedAttribution,
      currentPath,
    );

    if (fieldValue) {
      url.searchParams.set(`field:${ACUITY_ATTRIBUTION_FIELD_ID}`, fieldValue);
    }
  }

  return url.toString();
}
