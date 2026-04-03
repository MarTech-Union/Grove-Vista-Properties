import { NextResponse } from "next/server";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  const normalized = phone.replace(/[^\d+]/g, "");
  return /^\+?\d{10,15}$/.test(normalized);
}

export async function POST(request) {
  try {
    const body = await request.json();

    const fullName = (body?.fullName || "").trim();
    const email = (body?.email || "").trim().toLowerCase();
    const mobile = (body?.mobile || "").trim();

    if (!fullName) {
      return NextResponse.json({ message: "Please provide your full name." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
    }

    if (!isValidPhone(mobile)) {
      return NextResponse.json({ message: "Please provide a valid mobile number." }, { status: 400 });
    }

    return NextResponse.json(
      {
        message: "Call request submitted successfully.",
        data: {
          requestId: `CALL-${Date.now()}`,
          fullName,
          email,
          mobile,
          createdAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }
}
