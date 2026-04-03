import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { legacyMenuPathMap } from "@/lib/menu-states";
import { siteConfig } from "@/lib/site";

const canonicalUrl = new URL(siteConfig.siteUrl);
const canonicalHostname = canonicalUrl.hostname.toLowerCase();
const alternateHostname = canonicalHostname.startsWith("www.")
  ? canonicalHostname.replace(/^www\./, "")
  : `www.${canonicalHostname}`;

function normalizePathname(pathname: string) {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.replace(/\/+$/, "");
}

function getRequestHostname(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const hostHeader = request.headers.get("host");
  const rawHost = forwardedHost ?? hostHeader ?? request.nextUrl.host;

  return rawHost
    .split(",")[0]
    .trim()
    .replace(/:\d+$/, "")
    .toLowerCase();
}

export function proxy(request: NextRequest) {
  const pathname = normalizePathname(request.nextUrl.pathname);
  const requestHostname = getRequestHostname(request);

  if (/\.[^/]+$/i.test(pathname) || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  let shouldRedirect = false;

  const legacyDestination = legacyMenuPathMap.get(pathname);
  if (legacyDestination) {
    redirectUrl.pathname = legacyDestination;
    shouldRedirect = true;
  }

  if (requestHostname === alternateHostname && canonicalHostname !== alternateHostname) {
    redirectUrl.protocol = canonicalUrl.protocol;
    redirectUrl.hostname = canonicalUrl.hostname;
    redirectUrl.port = canonicalUrl.port;
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
