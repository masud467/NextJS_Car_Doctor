import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto mt-16">
      <div className="carousel w-full ">
        {banners.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/homeCarousel/${
                index + 1
              }.jpg)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full bg-cover bg-top bg-no-repeat h-[90vh] rounded-lg"
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white space-y-5">
                <h1 className="text-4xl font-extrabold">{banner.title}</h1>
                <p>{banner.description}</p>
                <button className="btn btn-primary mr-5 text-white">
                  Discover More
                </button>
                <button className="btn  btn-outline text-white">
                  Latest Projects
                </button>
              </div>
            </div>

            <div className="absolute bottom-12 right-12 flex gap-5 ">
              <a
                href={banner.prev}
                className="btn btn-circle hover:bg-primary hover:text-white"
              >
                ❮
              </a>
              <a
                href={banner.next}
                className="btn btn-circle hover:bg-primary hover:text-white"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    prev: "#slide4",
    next: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    prev: "#slide1",
    next: "#slide3",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    prev: "#slide2",
    next: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    prev: "#slide3",
    next: "#slide1",
  },
];

export default Banner;
