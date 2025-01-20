import { getServices, getServicesDetails } from "@/services/getServices";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

const Page = async ({ params }) => {
  const details = await getServicesDetails(params.id);
  const { title, description, img, facility, price, _id } = details.service;

  const { services } = await getServices();

  return (
    <div className="w-11/12 mx-auto mt-16">
      <div className="">
        <div className="h-72 relative">
          <Image
            className="relative h-72 w-full top-0 left-0 object-cover rounded-lg"
            src={"/assets/images/checkout/checkout.png"}
            alt={title}
            width={1000}
            height={1000}
            style={{ width: "90vw" }}
          />
        </div>
        <div className="absolute top-0 left-28  h-full flex items-center justify-center ">
          <h1 className="font-bold text-4xl text-white">Service Details of {title}</h1>
        </div>
      </div>
      <div className="flex  gap-10 justify-center items-start  my-10">
        <div className=" w-2/3">
          <Image
            className=" object-cover h-80 rounded-lg mb-10"
            src={img}
            width={1000}
            height={500}
            alt="checkout"
          />
          <h1>{title}</h1>
          <p className="my-10 text-justify">{description}</p>
          <div className="grid grid-cols-2 col-span-2 gap-8 ">
            {facility.map((item, index) => (
              <div
                key={index}
                className="bg-base-200 p-10 rounded-lg border-t-4 border-red-600"
              >
                <h1 className="text-2xl font-semibold mb-5">{item.name}</h1>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-1/3   ">
          <div className="bg-blue-200 rounded-lg px-5 py-10">
            <h1 className="text-4xl font-bold mb-5">Services</h1>
            <div className="flex flex-col gap-2">
              {services.map((service) => (
                <div className="  " key={service.service_id}>
                  <h1 className="bg-slate-100 p-2 rounded-md flex justify-between hover:bg-primary hover:text-white items-center">
                    {service.title}
                    <IoArrowForwardOutline></IoArrowForwardOutline>
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 ">
            <h1 className="text-center font-semibold text-xl">Price: ${price}</h1>
            <Link href={`/checkout/${_id}`}><button className="btn btn-primary w-full mt-5 text-white">Proceed Checkout</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
