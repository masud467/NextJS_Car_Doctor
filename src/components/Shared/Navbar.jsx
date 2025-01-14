import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoSearch } from "react-icons/io5";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="bg-slate-200">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow gap-2"
            >
              {navItems.map((item) => (
                <Link
                  className="font-semibold hover:text-primary duration-300 hover:underline"
                  href={item.path}
                  key={item.path}
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
          <Link href={"/"}>
            <Image src="/assets/logo.svg" width={50} height={100} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex gap-5 items-center justify-center">
          {navItems.map((item) => (
            <Link
              className="font-semibold hover:text-primary duration-300 hover:underline"
              href={item.path}
              key={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-5">
            <IoCartOutline className="text-2xl"/>
            <IoSearch className="text-2xl"/>
            <a className="btn btn-outline btn-primary text-white">
              appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
