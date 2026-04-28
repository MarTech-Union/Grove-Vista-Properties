import { NextResponse } from "next/server";
import { readJSON, writeJSON } from "@/lib/dataStore";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const all = await readJSON("properties.json");
    const property = all.find((p) => p.id === id);

    if (!property) {
      return NextResponse.json({ message: "Property not found." }, { status: 404 });
    }

    return NextResponse.json({ data: property }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Failed to fetch property." }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { title, price, priceCr, location, type, status, sqft, beds, baths, image, description, tag } = body;

    if (!title || !price || !location || !type || !status) {
      return NextResponse.json({ message: "title, price, location, type, status are required." }, { status: 400 });
    }

    const all = await readJSON("properties.json");
    const idx = all.findIndex((p) => p.id === id);

    if (idx === -1) {
      return NextResponse.json({ message: "Property not found." }, { status: 404 });
    }

    all[idx] = {
      ...all[idx],
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
      updatedAt: new Date().toISOString(),
    };

    await writeJSON("properties.json", all);
    return NextResponse.json({ message: "Property updated.", data: all[idx] }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Failed to update property." }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    const all = await readJSON("properties.json");
    const filtered = all.filter((p) => p.id !== id);

    if (filtered.length === all.length) {
      return NextResponse.json({ message: "Property not found." }, { status: 404 });
    }

    await writeJSON("properties.json", filtered);
    return NextResponse.json({ message: "Property deleted." }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Failed to delete property." }, { status: 500 });
  }
}
