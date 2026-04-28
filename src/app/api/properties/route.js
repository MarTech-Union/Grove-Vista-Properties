import { NextResponse } from "next/server";
import { readJSON } from "@/lib/dataStore";

export async function GET() {
  try {
    const properties = await readJSON("properties.json");
    return NextResponse.json({ properties }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Failed to fetch properties." }, { status: 500 });
  }
}
