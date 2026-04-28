import { NextResponse } from "next/server";
import { readJSON, writeJSON } from "@/lib/dataStore";

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    const all = await readJSON("contacts.json");
    const filtered = all.filter((c) => c.id !== id);

    if (filtered.length === all.length) {
      return NextResponse.json({ message: "Contact not found." }, { status: 404 });
    }

    await writeJSON("contacts.json", filtered);
    return NextResponse.json({ message: "Contact deleted." }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Failed to delete contact." }, { status: 500 });
  }
}
