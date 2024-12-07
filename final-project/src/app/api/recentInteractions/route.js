import dbConnect from "../../../lib/dbConnect";
import {NextResponse } from "next/server";
import User from "../../../models/User";
import jwt from "jsonwebtoken";

export async function GET(req) {
  await dbConnect();
  const auth = req.headers.get("Authorization");
  if (!auth) {
    return NextResponse.json({ message: "No token provided" }, { status: 401 });
  } else {
    try {
      let token;
      if (auth.startsWith("Bearer ")) {
        token = auth.split(" ")[1];
      }
      const decoded = jwt.verify(token, process.env.SECRET);
      const userId = decoded.userId;
      const user = await User.findById(userId);
      const recentInteractions = user?.recentInteractions || [];
      return NextResponse.json(recentInteractions);
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        { message: "Error with fetching recent interactions" },
        { status: 500 }
      );
    }
  }
}
