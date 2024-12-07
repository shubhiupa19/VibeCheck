import dbConnect from "../../../../../lib/dbConnect";
import Friend from "../../../../../models/Friend";
import User from "../../../../../models/User";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  await dbConnect();
  const auth = req.headers.get("Authorization");
  if (!auth) {
    return NextResponse.json({ message: "No token provided" }, { status: 401 });
  }
  let token;
  if (auth.startsWith("Bearer ")) {
    token = auth.split(" ")[1];
  }
  const decoded = jwt.verify(token, process.env.SECRET);
  const userId = decoded.userId;
  const user = await User.findById(userId);

  const { id } = await params;
  const interaction = await req.json();
  try {
    const friend = await Friend.findById(id);
    friend.interactions.push(interaction);
    if (interaction.newDetail !== "") {
      friend.about.push(interaction.newDetail);
    }
    await friend.save();
    console.log(friend.name);
    const userInteraction = {
      friendId: id,
      friendName: friend.name,
      ...interaction,
    };

    // the unshift keyword adds elements t othe beginning of an array, rather than the end
    user.recentInteractions.unshift(userInteraction);

    // if the user has more than 5 interactions, pop the last one off the array
    if (user.recentInteractions.length > 5) {
      user.recentInteractions.pop();
    }
    await user.save();
    console.log("successfully saved interaction");
    return NextResponse.json(friend, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Error with saving an interaction" },
      {
        status: 500,
      }
    );
  }
}
