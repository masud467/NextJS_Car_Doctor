import Image from "next/image";
import React from "react";
import ServicesCard from "../Cards/ServicesCard";
import { getServices } from "@/services/getServices";

const Services = async () => {
  const { services } = await getServices();
  return (
    <div className="container mx-auto mb-16">
      <div className="text-center space-y-5">
        <h3 className="text-primary font-semibold">Services</h3>
        <h1 className="text-2xl font-bold">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 ">
        {services?.length>0 && services?.map((service) => (
          <ServicesCard key={service?._id} service={service} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn btn-primary btn-outline">More Services</button>
      </div>
    </div>
  );
};

export default Services;
