import dbConnect from "../../../../lib/dbConnect";
import { NextResponse } from "next/server";
import Friend from "../../../../models/Friend";
export async function GET(request, { params }) {
  await dbConnect();

  const { id } = await params;
  try {
    console.log(id);
    const friend = await Friend.findById(id);
    // console.log(friend.name);
    return NextResponse.json(friend);
  } catch (error) {
    return NextResponse.error({
      status: 404,
      message: "Friend not found",
    });
  }
}
