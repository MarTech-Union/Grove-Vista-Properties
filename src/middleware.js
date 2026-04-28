import { NextResponse } from "next/server";

const SESSION_COOKIE = "admin_session";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow login page through unconditionally
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const sessionCookie = request.cookies.get(SESSION_COOKIE)?.value;
  const expectedToken = process.env.ADMIN_SESSION_SECRET;

  if (!sessionCookie || !expectedToken || sessionCookie !== expectedToken) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
