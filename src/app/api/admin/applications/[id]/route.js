import { NextResponse } from "next/server";
import { readJSON, writeJSON } from "@/lib/jsonDb";

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    const all = await readJSON("applications.json");
    const filtered = all.filter((a) => a.id !== id);

    if (filtered.length === all.length) {
      return NextResponse.json({ message: "Application not found." }, { status: 404 });
    }

    await writeJSON("applications.json", filtered);
    return NextResponse.json({ message: "Application deleted." }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Failed to delete application." }, { status: 500 });
  }
}
