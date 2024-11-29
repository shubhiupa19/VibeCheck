import dbConnect from "../../../../lib/dbConnect";
import { NextApirequest, NextResponse } from "next/server";
import Friend from "../../../../models/Friend";
export async function GET(req, { params }) {
  await dbConnect();
  // learned about how to use the params object from this link: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments
  const id = (await params).id;
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
