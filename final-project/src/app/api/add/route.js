// https://nextjs.org/docs/app/api-reference/functions/next-response

import { NextResponse } from 'next/server';
import Friend from '../../../models/Friend';
import dbConnect from '../../../lib/dbConnect';

// function that is called when a POST request is made to the /api/add route

export async function POST(request) {
    // first, connect to the database
    await dbConnect();

    // extract the name and about from the request body
    const { name, about } = await request.json();
    try {
        // create a new friend using the friend Model info with the name and about
        const friend = new Friend ({ name, about });
        // save the friend to the database
        await friend.save();

        // using the NextResponse API helper, return the friend that was saved with a status of 201
        return NextResponse.json(friend, { status: 201 });

    } catch (error) {
        // if there is an error, log the error and return an error message with a status of 500, which is a server error
        console.error(error);
        return NextResponse.error("Error with saving a friend", { status: 500 });
    }
}