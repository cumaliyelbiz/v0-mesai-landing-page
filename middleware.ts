import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { defaultLocale, type Locale } from "./i18n/config"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for static files and API routes
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next()
  }

  // Get locale from cookie or use default
  const locale = (request.cookies.get("NEXT_LOCALE")?.value as Locale) || defaultLocale

  // Create response
  const response = NextResponse.next()

  // Set locale cookie if not present
  if (!request.cookies.get("NEXT_LOCALE")) {
    response.cookies.set("NEXT_LOCALE", locale)
  }

  return response
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
