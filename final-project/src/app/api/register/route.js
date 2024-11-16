import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';
import { NextResponse } from 'next/server';

export async function POST(request) { 
    await dbConnect();
    const { username, email, password } = await request.json();
    try {
        const user = new User({ username, email, password, friends: [] });
        await user.save();
        return NextResponse.json(user, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.error("Error with saving a user", { status: 500 });
    }
}