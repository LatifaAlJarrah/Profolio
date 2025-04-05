import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  if (!req.auth) {
    const url = req.url.replace(req.nextUrl.pathname, "/auth/signin");
    return NextResponse.redirect(url);
  }
});

export const config = {
  matcher: ["/((?!api|auth|_next/static|_next/image|favicon.ico).*)"],
};
