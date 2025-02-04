import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = (await cookies(req)).get("__Secure-next-auth.session-token");
  const pathname = req.nextUrl.pathname;
  if (pathname.includes("api")) {
    return NextResponse.next();
  }
  if (!token) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, req.url)
    );
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/my-booking/:path*", "/services/:path*"],
};
