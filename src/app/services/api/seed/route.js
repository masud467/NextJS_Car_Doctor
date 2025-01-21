import { connectDB } from "@/lib/connectDB";
import { services } from "@/lib/services";
import { NextResponse } from "next/server";

export const POST = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    await servicesCollection.deleteMany();
    const res = await servicesCollection.insertMany(services);
    return NextResponse.json({ message: "Seeded Successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error in seeding" }, { status: 500 });
  }
};
