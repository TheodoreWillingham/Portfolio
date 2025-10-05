import connectMongoDB from "../../../../../config/mongodb";
import mongoose from "mongoose";
import Item from "@/app/models/itemSchema";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{ id: string }>;

// GET /api/items/[id]
export async function GET(_request: NextRequest, context: { params: Params }) {
  const { id } = await context.params; // ✅ Await the params
  await connectMongoDB();

  const item = await Item.findById(id);
  if (!item) {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }

  return NextResponse.json({ item }, { status: 200 });
}

// PUT /api/items/[id]
export async function PUT(request: NextRequest, context: { params: Params }) {
  const { id } = await context.params;
  const { name, price, location, lat, lon, imageUrl, category } = await request.json();

  await connectMongoDB();
  const updatedItem = await Item.findByIdAndUpdate(id, {
    name,
    price,
    location,
    lat,
    lon,
    imageUrl,
    category,
  });

  if (!updatedItem) {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Item updated" }, { status: 200 });
}

// DELETE /api/items/[id]
export async function DELETE(_request: NextRequest, context: { params: Params }) {
  const { id } = await context.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
  }

  await connectMongoDB();
  const deletedItem = await Item.findByIdAndDelete(id);

  if (!deletedItem) {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Item deleted" }, { status: 200 });
}
