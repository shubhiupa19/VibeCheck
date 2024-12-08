// using bcrypt to hash the password, learned from this tutorial: https://clerk.com/blog/password-based-authentication-nextjs
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(request) {
    await dbConnect();
    const { username, password } = await request.json();
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return NextResponse.json("User not found", { status: 404 });
        }
        else {
            const match = await bcrypt.compare(password, user.password);
            if (match) { 
                const token = jwt.sign({ username: user.username, userId: user._id }, process.env.SECRET, { expiresIn: '1d' });
                return NextResponse.json({ message: "Login successful!", token }, { status: 200 })

            }
            else {
                return NextResponse.json("Invalid password", { status: 401 });
            }
        }



    } catch(error)
    {
        console.log(error);
        return NextResponse.error("Error with saving a user", { status: 500 });
    }

}