import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { legacyMenuCityPathMap } from "@/lib/menu-cities";
import { legacyMenuPathMap, menuStates } from "@/lib/menu-states";
import { siteConfig } from "@/lib/site";

const canonicalUrl = new URL(siteConfig.siteUrl);
const canonicalHostname = canonicalUrl.hostname.toLowerCase();
const alternateHostname = canonicalHostname.startsWith("www.")
  ? canonicalHostname.replace(/^www\./, "")
  : `www.${canonicalHostname}`;
const currentMenuStatePaths = new Set(menuStates.map((state) => `/menu/${state.slug}`));

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

function isDeprecatedMenuPath(pathname: string) {
  if (legacyMenuPathMap.has(pathname) || legacyMenuCityPathMap.has(pathname)) {
    return false;
  }

  if (/^\/menu\/[^/]+$/.test(pathname)) {
    if (currentMenuStatePaths.has(pathname)) {
      return false;
    }

    const legacySlug = pathname.slice("/menu/".length);
    return legacySlug.includes("-");
  }

  return /^\/[^/]+-hibachi-menu$/.test(pathname);
}

export function proxy(request: NextRequest) {
  const pathname = normalizePathname(request.nextUrl.pathname);
  const requestHostname = getRequestHostname(request);

  if (/\.[^/]+$/i.test(pathname) || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  let shouldRedirect = false;

  const legacyDestination =
    legacyMenuPathMap.get(pathname) ?? legacyMenuCityPathMap.get(pathname);
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

  if (isDeprecatedMenuPath(pathname)) {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
