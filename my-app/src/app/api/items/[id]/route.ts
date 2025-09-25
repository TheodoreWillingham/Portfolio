import connectMongoDB from "../../../../../config/mongodb";
import mongoose from "mongoose";
import Item from "@/app/models/itemSchema";
import { NextRequest, NextResponse } from "next/server";

// GET
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(request: NextRequest, { params }: any) {
  const { id } = await params; // params is async in Next.js 15
  await connectMongoDB();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
  }

  const item = await Item.findById(id);
  if (!item) return NextResponse.json({ message: "Item not found" }, { status: 404 });

  return NextResponse.json({ item }, { status: 200 });
}

// PUT
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function PUT(request: NextRequest, { params }: any) {
  const { id } = await params;
  const body = await request.json();
  const { name, price, location, lat, lon, imageUrl, category } = body;

  await connectMongoDB();
  const updatedItem = await Item.findByIdAndUpdate(
    id,
    { name, price, location, lat, lon, imageUrl, category },
    { new: true }
  );

  if (!updatedItem) return NextResponse.json({ message: "Item not found" }, { status: 404 });

  return NextResponse.json({ message: "Item updated", item: updatedItem }, { status: 200 });
}

// DELETE
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function DELETE(request: NextRequest, { params }: any) {
  const { id } = await params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
  }

  await connectMongoDB();
  const deletedItem = await Item.findByIdAndDelete(id);

  if (!deletedItem) return NextResponse.json({ message: "Item not found" }, { status: 404 });

  return NextResponse.json({ message: "Item deleted" }, { status: 200 });
}
