"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = ({ params }) => {
  const session = useSession();
  const unwrappedParams = React.use(params);
  const [serviceUpdated, setServiceUpdated] = useState({});
  const loadBooking = async () => {
    const bookingDetails = await fetch(
      `http://localhost:3000/my-booking/api/booking/${unwrappedParams.id}`
    );
    const data = await bookingDetails.json();
    setServiceUpdated(data.response);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedBooking = {
      date: e.target.date.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
    };
    const res = await fetch(
      `http://localhost:3000/my-booking/api/booking/${unwrappedParams.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(updatedBooking),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      toast.success("Booking updated successfully");
    }
  };

  useEffect(() => {
    loadBooking();
  }, [unwrappedParams]);

  return (
    <div className="w-11/12 mx-auto my-10">
      <div>
        <div className="h-72 relative">
          <Image
            className="relative h-72 w-full top-0 left-0 object-cover rounded-lg"
            src={"/assets/images/checkout/checkout.png"}
            alt={`Car service checkout banner with ${serviceUpdated.serviceTitle}`}
            width={1000}
            height={1000}
            style={{ width: "90vw" }}
          />
        </div>
        <div className="absolute top-0 left-28  h-full flex items-center justify-center ">
          <h1 className="font-bold text-4xl text-white">
            {" "}
            {serviceUpdated.serviceTitle}
          </h1>
        </div>
      </div>
      <div className="bg-base-200 p-10 mt-10  rounded-lg">
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-2 gap-10 ">
            <div className="form-control ">
              <label htmlFor="name">Name</label>
              <input
                defaultValue={session?.data?.user?.name}
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label htmlFor="date">Date</label>
              <input
                defaultValue={serviceUpdated.date}
                type="date"
                name="date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label htmlFor="email">Email</label>
              <input
                defaultValue={session?.data?.user?.email}
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label htmlFor="amount">Due Amount</label>
              <input
                defaultValue={serviceUpdated.price}
                readOnly
                type="number"
                name="amount"
                placeholder="Amount"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                defaultValue={serviceUpdated.phone}
                name="phone"
                placeholder="Your Phone Number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label htmlFor="address">Present Address</label>
              <input
                type="text"
                defaultValue={serviceUpdated.address}
                name="address"
                placeholder="Your Present Address"
                className="input input-bordered"
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary text-white w-full mt-10"
          >
            Update Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
