import { NextResponse } from "next/server";
import { readJSON, writeJSON } from "@/lib/dataStore";
import { randomUUID } from "crypto";

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

    const id = `CNT-${randomUUID().slice(0, 8).toUpperCase()}`;
    const submittedAt = new Date().toISOString();

    const submission = { id, firstName, lastName, email, phone, message, submittedAt };
    const existing = await readJSON("contacts.json");
    existing.push(submission);
    await writeJSON("contacts.json", existing);

    return NextResponse.json(
      {
        message: "Your details were submitted successfully.",
        data: { inquiryId: id, firstName, lastName, email, phone, submittedAt },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }
}
