import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingCollection = db.collection("bookings");
  try {
    const res = await bookingCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return Response.json(
      { message: "Booking Deleted Successfully", response: res },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Booking Deleted Failed" },
      { status: 500 }
    );
  }
};

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingCollection = db.collection("bookings");
  try {
    const res = await bookingCollection.findOne({
      _id: new ObjectId(params.id),
    });
    return Response.json(
      { message: "Booking Find Successfully", response: res },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "Booking Find Failed" }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const bookingCollection = db.collection("bookings");
  const updateDoc = await request.json();
  try {
    const res = await bookingCollection.updateOne(
      {
        _id: new ObjectId(params.id),
      },
      {
        $set: { ...updateDoc },
      },
      {
        upsert: true,
      }
    );
    return Response.json(
      { message: "Booking Updated Successfully", response: res },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Booking Updated Failed" },
      { status: 500 }
    );
  }
};
