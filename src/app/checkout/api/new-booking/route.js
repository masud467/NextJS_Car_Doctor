import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newBooking = await request.json();
  const db = await connectDB();
  const bookingCollection = db.collection("bookings");
  try {
    const res = await bookingCollection.insertOne(newBooking);
    return NextResponse.json(
      { message: "Service Booking Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Service Booking Failed" },
      { status: 500 }
    );
  }
};
