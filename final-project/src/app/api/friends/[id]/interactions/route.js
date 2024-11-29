import dbConnect from "../../../../../lib/dbConnect";
import Friend from "../../../../../models/Friend";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  await dbConnect();
  const { id } = await params;
  const interaction = await req.json();
  try {
    const friend = await Friend.findById(id);
    friend.interactions.push(interaction);
    await friend.save();
    console.log("successfully saved interaction");
    return NextResponse.json(friend, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.error("Error with saving an interaction", {
      status: 500,
    });
  }
}
