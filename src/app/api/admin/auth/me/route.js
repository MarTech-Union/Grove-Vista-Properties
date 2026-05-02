import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  ADMIN_SESSION_COOKIE,
  verifyAdminSessionToken,
} from "@/lib/adminAuth";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
    const sessionSecret = process.env.ADMIN_SESSION_SECRET;

    if (!verifyAdminSessionToken(session, sessionSecret)) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        authenticated: true,
        user: { name: "Admin", role: "admin" },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { authenticated: false },
      { status: 500 }
    );
  }
}