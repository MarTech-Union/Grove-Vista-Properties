import { NextResponse } from "next/server";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const email = (body?.email || "").trim().toLowerCase();
    const name = (body?.name || "").trim();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
    }

    if (email.endsWith("@example.com")) {
      return NextResponse.json({ message: "This email is already subscribed." }, { status: 409 });
    }

    return NextResponse.json(
      {
        message: "Subscribed successfully.",
        data: {
          email,
          name,
          subscribedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }
}
