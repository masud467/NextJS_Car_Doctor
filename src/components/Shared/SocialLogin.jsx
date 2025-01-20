"use client";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaGithubAlt } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
const SocialLogin = () => {
  // const router = useRouter();
  // const session = useSession();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");
  const handleSocialLogin = (provider) => {
    const res = signIn(provider, {
      redirect: true,
      callbackUrl: path ? path : "/",
    });
    console.log(res);
  };
  // useEffect(() => {
  //   if (session.status === "authenticated") {
  //     router.push("/");
  //   }
  // }, [session.status, router]);

  return (
    <div>
      <div className="flex justify-center gap-5 my-5 ">
        <button>
          <FcGoogle
            onClick={() => handleSocialLogin("google")}
            className="bg-slate-300 w-8 p-2 h-8 rounded-full font-semibold "
          />
        </button>
        <button>
          <FaGithubAlt
            onClick={() => handleSocialLogin("github")}
            className="bg-slate-300 w-8 p-2 h-8 rounded-full font-semibold "
          />
        </button>

        <button>
          <FaFacebookF className="bg-slate-300 w-8 p-2 h-8 rounded-full" />
        </button>
        <button>
          <FaLinkedinIn className="bg-slate-300 w-8 p-2 h-8 rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
