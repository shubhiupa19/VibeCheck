// using bcrypt to hash the password, learned from this tutorial: https://clerk.com/blog/password-based-authentication-nextjs
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(request) { 
    await dbConnect();
    const { username, email, password } = await request.json();
    try {
        const hash = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hash, friends: [] });
        await user.save();
        const token = jwt.sign({ username: user.username, userId: user._id }, process.env.SECRET, { expiresIn: '1d' });
        return NextResponse.json( { message: "User created successfully!", token}, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json("Error with saving a user", { status: 500 });
    }
}