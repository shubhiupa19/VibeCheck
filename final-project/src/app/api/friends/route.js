import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export async function GET(request) {
  await dbConnect();
  const auth = request.headers.get("Authorization");
  if (!auth) {
    return NextResponse.json({ message: "No token provided" }, { status: 401 });
  } else {
    try {
      let token;
      if (auth.startsWith("Bearer ")) {
        token = auth.split(" ")[1];
      }
      console.log(token);
      const decoded = jwt.verify(token, process.env.SECRET);
      const userId = decoded.userId;
      const user = await User.findById(userId).populate("friends");
      console.log(user.username);

      if (!user) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 }
        );
      } else {
        return NextResponse.json(user.friends, { status: 200 });
      }
    } catch (error) {
      console.error(error);
      return NextResponse.json("Error with getting friends", { status: 500 });
    }
  }
}
