import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  verifyAdminSessionToken,
} from "@/lib/adminAuth"; // ← now import from adminAuth.js directly, no .edge needed

export const runtime = "nodejs"; // ← THIS is the only change needed

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("x-pathname", pathname);

  if (pathname.startsWith("/admin")) {
    if (pathname === "/admin/login") return response;
    if (pathname.startsWith("/api/admin/auth")) return response;

    const sessionToken = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
    const sessionSecret = process.env.ADMIN_SESSION_SECRET;

    if (!verifyAdminSessionToken(sessionToken, sessionSecret)) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};