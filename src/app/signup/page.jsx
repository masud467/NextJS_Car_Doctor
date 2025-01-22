"use client";
import SocialLogin from "@/components/Shared/SocialLogin";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

const SignPage = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const newUser = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    };
    const res = await fetch(
      "https://next-js-car-doctor.vercel.app/signup/api",
      {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      form.reset();
    }
  };
  return (
    <div className="container mx-auto p-24">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center justify-center ">
        <div className="lg:ml-24">
          <Image
            src="/assets/images/login/login.svg"
            alt="login"
            width={300}
            height={300}
          />
        </div>
        <div className="border-2 lg:p-24 p-5">
          <h1 className="text-center text-3xl font-semibold">Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="your name"
              className="border-2 p-2 w-full"
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="your email"
              className="border-2 p-2 w-full"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              className="border-2 p-2 w-full"
            />
            <button
              type="submit"
              className="btn btn-primary w-full text-white my-5"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center">Or Sign Up with</p>
          <SocialLogin></SocialLogin>
          <p className="text-center">
            Already have an account?
            <Link href="/login">
              <span className="text-primary ml-2 font-semibold">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Suspense
      fallback={<div className="container mx-auto p-24">Loading...</div>}
    >
      <SignPage></SignPage>
    </Suspense>
  );
}
