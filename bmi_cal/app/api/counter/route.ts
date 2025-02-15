import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the input
    if (typeof body.counter !== 'number') {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    // Increment the counter
    const counter = body.counter + 1;

    // Return the updated counter
    return NextResponse.json({ counter }, { status: 200 });
  } catch (error) {
    // Handle errors
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}