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

    const firstName = (body?.firstName || "").trim();
    const lastName = (body?.lastName || "").trim();
    const email = (body?.email || "").trim().toLowerCase();
    const phone = (body?.phone || "").trim();
    const message = (body?.message || "").trim();

    if (!firstName || !lastName) {
      return NextResponse.json({ message: "Please enter your first and last name." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json({ message: "Please provide a valid phone number." }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json({ message: "Please provide a short message with at least 10 characters." }, { status: 400 });
    }

    return NextResponse.json(
      {
        message: "Your details were submitted successfully.",
        data: {
          inquiryId: `CNT-${Date.now()}`,
          firstName,
          lastName,
          email,
          phone,
          submittedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }
}
