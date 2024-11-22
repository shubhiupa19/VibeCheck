import dbConnect from "../../../../lib/dbConnect";
import { NextResponse } from "next/server";
import Friend from "../../../../models/Friend";
export async function GET(_, { params }) {
  await dbConnect();
  console.log("reached the friend fetch");
  const { id } = await params;
  try {
    const friend = await Friend.findById(id);
    console.log("reached past the friend fetch");
    return NextResponse.json(friend);
  } catch (error) {
    return NextResponse.json({
      status: 404,
      message: "Friend not found",
    });
  }
}
