"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const session = useSession();
  const [bookings, setBookings] = useState([]);
  const loadData = async () => {
    const res = await fetch(
      `http://localhost:3000/my-booking/api/${session?.data?.user?.email}`
    );
    const data = await res.json();
    setBookings(data?.myBookings);
  };

  const handleDelete = async (id) => {
    const res = await fetch(
      `http://localhost:3000/my-booking/api/booking/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    console.log(data);
    if (data.response.deletedCount > 0) {
      loadData();
      toast.success("Booking deleted successfully");
    }
  };

  useEffect(() => {
    loadData();
  }, [session]);
  return (
    <div className="container mx-auto mt-16">
      <div>
        <div className="h-72 relative">
          <Image
            className="relative h-72 w-full top-0 left-0 object-cover rounded-lg"
            src={"/assets/images/checkout/checkout.png"}
            alt={`my booking banner`}
            width={1000}
            height={1000}
            style={{ width: "90vw" }}
          />
        </div>
        <div className="absolute top-0 left-28  h-full flex items-center justify-center ">
          <h1 className="font-bold text-4xl text-white">My Bookings</h1>
        </div>
      </div>
      <div className="my-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookings.map((booking, index) => (
                <tr key={booking._id}>
                  <th>{index + 1}</th>
                  <td>{booking.serviceTitle}</td>
                  <td>{booking.price}</td>
                  <td>{booking.date}</td>
                  <td>
                    <div className="flex gap-5">
                      <Link href={`/my-booking/update/${booking._id}`}>
                        {" "}
                        <button className="btn btn-accent">Edit</button>
                      </Link>
                      <button
                        onClick={() => handleDelete(booking._id)}
                        className="btn btn-primary text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
