import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const theme = request.cookies.get("theme");

  if (!theme) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("X-Custom-Header", "custom-value");

  return response;

  //   return NextResponse.redirect(new URL("/", request.url));
  //   if (request.nextUrl.pathname === "/profile") {
  //     return NextResponse.redirect(new URL("/hello", request.url));
  //   }
  //   if (request.nextUrl.pathname === "/profile") {
  //     return NextResponse.rewrite(new URL("/hello", request.url));
  //   }
}

// export const config = {
//   matcher: "/profile",
// };
