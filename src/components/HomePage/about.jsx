import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="text-slate-900 mt-16 mb-40 ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <Image
              src="/assets/images/about_us/person.jpg"
              width={500}
              height={500}
              alt="about-us"
              className=" rounded-lg bg-cover bg-no-repeat bg-top"
            ></Image>
            <Image
              src="/assets/images/about_us/parts.jpg"
              width={400}
              height={400}
              alt="about-us"
              className="absolute -bottom-24 right-14 border-8 border-white rounded-lg bg-cover bg-no-repeat bg-top"
            ></Image>
          </div>
          <div className="space-y-5">
            <h1 className="text-primary font-semibold">About Us</h1>
            <h2 className="text-black text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn btn-primary text-white">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
