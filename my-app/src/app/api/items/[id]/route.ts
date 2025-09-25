import connectMongoDB from "../../../../../config/mongodb";
import mongoose from "mongoose";
import Item from "@/app/models/itemSchema";
import { NextRequest, NextResponse } from "next/server";

// GET, PUT, DELETE for /api/items/[id]

// Get's unique item
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // await the params promise
  await connectMongoDB();

  const item = await Item.findById(id);
  if (!item) return NextResponse.json({ message: "Item not found" }, { status: 404 });

  return NextResponse.json({ item }, { status: 200 });
}

// Update's unique item
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { name, price, location, lat, lon, imageUrl, category } = await request.json();

  await connectMongoDB();
  const updatedItem = await Item.findByIdAndUpdate(
    id,
    { name, price, location, lat, lon, imageUrl, category },
    { new: true }
  );

  if (!updatedItem) return NextResponse.json({ message: "Item not found" }, { status: 404 });

  return NextResponse.json({ message: "Item Updated", item: updatedItem }, { status: 200 });
}

// Delete's unique item
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
  }

  await connectMongoDB();
  const deletedItem = await Item.findByIdAndDelete(id);

  if (!deletedItem) return NextResponse.json({ message: "Item not found" }, { status: 404 });

  return NextResponse.json({ message: "Item deleted" }, { status: 200 });
}
