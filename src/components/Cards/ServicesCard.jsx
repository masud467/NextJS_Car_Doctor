import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { IoArrowForwardOutline } from "react-icons/io5";

const ServicesCard = ({ service }) => {
  const { img, title, price, _id } = service || {};
  return (
    <div className="border-2 p-5 rounded-lg space-y-5">
      <div className="relative h-[250px]">
        <Image src={img} fill alt={title} className="rounded-lg object-cover" />
      </div>
      <div className="space-y-2 font-bold">
        <h1>{title}</h1>
        <div className="flex justify-between  items-center">
          <p className="text-primary">Price : ${price} </p>
          <Link href={`/services/${_id}`}><button className="btn btn-primary btn-outline">
            View Details
            {/* <IoArrowForwardOutline className="text-xl"></IoArrowForwardOutline> */}
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
