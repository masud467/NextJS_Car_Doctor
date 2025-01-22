"use client";
import { getServicesDetails } from "@/services/getServices";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const checkout = ({ params }) => {
  const session = useSession();
  const unwrappedParams = React.use(params);
  const [service, setService] = useState({});
  const loadService = async () => {
    const details = await getServicesDetails(unwrappedParams.id);
    setService(details.service);
  };

  const { title, description, img, facility, price, _id } = service || {};

  const handleBooking = async (e) => {
    e.preventDefault();
    const newBooking = {
      email: session.data.user.email,
      name: session.data.user.name,
      date: e.target.date.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      serviceID: _id,
      serviceTitle: title,
      price: price,
    };
    const res = await fetch(
      "https://next-js-car-doctor.vercel.app/checkout/api/new-booking",
      {
        method: "POST",
        body: JSON.stringify(newBooking),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      toast.success("Booking successful");
      e.target.reset();
    }
  };

  useEffect(() => {
    loadService();
  }, [unwrappedParams]);
  return (
    <div className="w-11/12 mx-auto my-10">
      <div>
        <div className="h-72 relative">
          <Image
            className="relative h-72 w-full top-0 left-0 object-cover rounded-lg"
            src={"/assets/images/checkout/checkout.png"}
            alt={`Car service checkout banner with ${title}`}
            width={1000}
            height={1000}
            style={{ width: "90vw" }}
          />
        </div>
        <div className="absolute top-0 left-28  h-full flex items-center justify-center ">
          <h1 className="font-bold text-4xl text-white">Checkout of {title}</h1>
        </div>
      </div>
      <div className="bg-base-200 p-10 mt-10  rounded-lg">
        <form onSubmit={handleBooking}>
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
                defaultValue={new Date().toISOString().split("T")[0]}
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
                defaultValue={price}
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
                name="phone"
                placeholder="Your Phone Number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label htmlFor="address">Present Address</label>
              <input
                type="text"
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
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default checkout;
