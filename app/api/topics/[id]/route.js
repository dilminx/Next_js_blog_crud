import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  if (!id) {
    return NextResponse.json({ message: "not found ID" }, { status: 404 });
  }

  const data = await request.json();
  const { title, descriptions } = data;
  try {
    await connectMongoDb();
    const updateData = await Topic.findByIdAndUpdate(
      id,
      { title, descriptions },
      { new: true }
    );
    if (!updateData) {
      return NextResponse.json({ message: "topic not found" });
    }
    return NextResponse.json(
      { message: "topic updated successfully", data: updateData },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Error something went wrong" },
      { status: 501 }
    );
  }
}
export async function GET(request, { params }) {
  const { id } = params;

  try {
    await connectMongoDb();
    const getData = await Topic.findById(id);
    return NextResponse.json(
      { message: "Topic gets success", data: getData },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ message: "Error getting data" });
  }
}
