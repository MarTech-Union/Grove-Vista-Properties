import { NextResponse } from "next/server";
import { readJSON, writeJSON } from "@/lib/jsonDb";
import { randomUUID } from "crypto";

export async function GET() {
  try {
    const all = await readJSON("properties.json");
    return NextResponse.json({ items: all, total: all.length }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Failed to fetch properties." }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, price, priceCr, location, type, status, sqft, beds, baths, image, description, tag } = body;

    if (!title || !price || !location || !type || !status) {
      return NextResponse.json({ message: "title, price, location, type, status are required." }, { status: 400 });
    }

    const newProperty = {
      id: `prop-${randomUUID().slice(0, 8)}`,
      title,
      price,
      priceCr: parseFloat(priceCr) || 0,
      location,
      type,
      status,
      sqft: sqft || "",
      beds: parseInt(beds) || 0,
      baths: parseInt(baths) || 0,
      image: image || "",
      description: description || "",
      tag: tag || "",
      createdAt: new Date().toISOString(),
    };

    const all = await readJSON("properties.json");
    all.push(newProperty);
    await writeJSON("properties.json", all);

    return NextResponse.json({ message: "Property created.", data: newProperty }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Failed to create property." }, { status: 500 });
  }
}
