// https://nextjs.org/docs/app/api-reference/functions/next-response

import { NextResponse } from 'next/server';
import Friend from '../../../models/Friend';
import dbConnect from '../../../lib/dbConnect';


export async function POST(request) {
    await dbConnect();

    const { name, about } = await request.json();
    try {
        const friend = new Friend ({ name, about });
        await friend.save();

        return NextResponse.json(friend, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.error("Error with saving a friend", { status: 500 });
    }
}