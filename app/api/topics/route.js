import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, descriptions } = await request.json();
    if (!title || !descriptions) {
      return NextResponse.json(
        { message: "Not found Topics" },
        { status: 404 }
      );
    }
    await connectMongoDb();
    const newdata = await Topic.create({ title, descriptions });
    return NextResponse.json(
      { message: "create successfully", data: newdata },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ message: "error" + e });
  }
}

export async function GET() {
  try {
    await connectMongoDb();
    const data = await Topic.find();
    return NextResponse.json(
      { message: "created successfully", data: data },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Error getting data" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({message:"delete sucessfully"},{status:200})
}
