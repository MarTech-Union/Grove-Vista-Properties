import { NextResponse } from "next/server";

const SESSION_COOKIE = "admin_session";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function POST(request) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json({ message: "Password required." }, { status: 400 });
    }

    const adminPassword = process.env.ADMIN_PASSWORD;
    const sessionSecret = process.env.ADMIN_SESSION_SECRET;

    if (!adminPassword || !sessionSecret) {
      return NextResponse.json({ message: "Server misconfiguration." }, { status: 500 });
    }

    if (password !== adminPassword) {
      return NextResponse.json({ message: "Invalid password." }, { status: 401 });
    }

    const response = NextResponse.json({ message: "Authenticated." }, { status: 200 });
    response.cookies.set(SESSION_COOKIE, sessionSecret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
}
