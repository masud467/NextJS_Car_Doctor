import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  const newUser = await req.json();
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const existUser = await userCollection.findOne({ email: newUser.email });
    if (existUser) {
      return NextResponse.json(
        { message: "user already exist" },
        { status: 400 }
      );
    }
    const hashedPassword = bcrypt.hashSync(newUser.password, 14);
    const result = await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
    });
    return NextResponse.json(
      { message: "user created successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong", error },
      { status: 500 }
    );
  }
};
