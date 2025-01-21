"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import SocialLogin from "@/components/Shared/SocialLogin";

const Page = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/",
    });
    // if (res.status === 200) {
    //   router.push("/");
    // }
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
          <h1 className="text-center text-3xl font-semibold">Login</h1>
          <form onSubmit={handleLogin}>
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
              Login
            </button>
          </form>
          <p className="text-center">Or Sign Up with</p>
          <SocialLogin></SocialLogin>
          <p className="text-center">
            Have an account?
            <Link href={"/signup"}>
              <span className="text-primary ml-2 font-semibold">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
