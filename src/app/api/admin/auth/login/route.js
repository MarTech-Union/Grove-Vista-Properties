import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  COOKIE_MAX_AGE,
  generateAdminSessionToken,
  timingSafeCompare,
} from "@/lib/adminAuth";

export async function POST(request) {
  try {
    const body = await request.json();
    const password = body?.password;

    // Validate input
    if (!password || typeof password !== "string") {
      return NextResponse.json(
        { message: "Password required." },
        { status: 400 }
      );
    }

    const adminPassword = process.env.ADMIN_PASSWORD;
    const sessionSecret = process.env.ADMIN_SESSION_SECRET;

    if (!adminPassword || !sessionSecret) {
      console.error("Missing ADMIN_PASSWORD or ADMIN_SESSION_SECRET in .env");
      return NextResponse.json(
        { message: "Server misconfiguration." },
        { status: 500 }
      );
    }

    // Timing-safe password check
    if (!timingSafeCompare(password, adminPassword)) {
      return NextResponse.json(
        { message: "Invalid password." },
        { status: 401 }
      );
    }

    // Generate session token
    const sessionToken = generateAdminSessionToken(sessionSecret);

    const response = NextResponse.json(
      { message: "Authenticated." },
      { status: 200 }
    );

    response.cookies.set(ADMIN_SESSION_COOKIE, sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json(
      { message: "Invalid request." },
      { status: 400 }
    );
  }
}