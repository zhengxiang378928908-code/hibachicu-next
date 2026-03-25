import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { legacyMenuPathMap } from "@/lib/menu-states";
import { siteConfig } from "@/lib/site";

const canonicalHostname = new URL(siteConfig.siteUrl).hostname;
const alternateHostname = canonicalHostname.startsWith("www.")
  ? canonicalHostname.replace(/^www\./, "")
  : `www.${canonicalHostname}`;

function normalizePathname(pathname: string) {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.replace(/\/+$/, "");
}

export function proxy(request: NextRequest) {
  const pathname = normalizePathname(request.nextUrl.pathname);

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

  if (request.nextUrl.hostname === alternateHostname && canonicalHostname !== alternateHostname) {
    redirectUrl.hostname = canonicalHostname;
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
