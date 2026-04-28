import { NextResponse } from "next/server";
import { readJSON, writeJSON } from "@/lib/dataStore";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(100, parseInt(searchParams.get("limit") || "20", 10));

    const all = await readJSON("contacts.json");
    const sorted = [...all].sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));
    const total = sorted.length;
    const items = sorted.slice((page - 1) * limit, page * limit);

    return NextResponse.json({ items, total, page, limit }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Failed to fetch contacts." }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { ids } = await request.json();
    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ message: "No IDs provided." }, { status: 400 });
    }

    const all = await readJSON("contacts.json");
    const filtered = all.filter((c) => !ids.includes(c.id));
    await writeJSON("contacts.json", filtered);

    return NextResponse.json({ message: `Deleted ${all.length - filtered.length} contact(s).` }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Failed to delete contacts." }, { status: 500 });
  }
}
