// https://nextjs.org/docs/app/api-reference/functions/next-response

import { NextResponse } from "next/server";
import Friend from "../../../models/Friend";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";
import jwt from "jsonwebtoken";

// function that is called when a POST request is made to the /api/add route

export async function POST(request) {
  // first, connect to the database
  await dbConnect();

  // get the token from the request headers
  const auth = request.headers.get("Authorization");
  if (!auth) {
    return NextResponse.json({ message: "No token provided" }, { status: 401 });
  }
  let token;
  if (auth.startsWith("Bearer ")) {
    token = auth.split(" ")[1];
  }
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.SECRET);
  } catch (error) {
    console.error(error);
    return NextResponse.json("Invalid token", { status: 401 });
  }
  const userId = decoded.userId;

  // extract the name and about from the request body
  const { name, about } = await request.json();
  try {
    // create a new friend using the friend Model info with the name and about
    const friend = new Friend({ name, about });
    // save the friend to the database
    await friend.save();

    // link the friend to the user
    const user = await User.findById(userId);
    user.friends.push(friend._id);
    await user.save();

    // using the NextResponse API helper, return the friend that was saved with a status of 201
    return NextResponse.json(friend, { status: 201 });
  } catch (error) {
    // if there is an error, log the error and return an error message with a status of 500, which is a server error
    console.error(error);
    return NextResponse.json("Error with saving a friend", { status: 500 });
  }
}
