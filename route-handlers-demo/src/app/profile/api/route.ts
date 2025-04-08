//app/api/profile/route.ts

import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const authToken = requestHeaders.get("authorization");

  console.log("Authorization:", authToken);

  const headerList = await headers();
  console.log(headerList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log("cookies list ", theme);

  const cookieStore = await cookies();

  // Set a cookie
  cookieStore.set("resultsPerPage", "20");

  // Get a cookie
  const result = cookieStore.get("resultsPerPage");
  console.log("resultsPerPage", result); // { name: 'resultsPerPage', value: '20', path: "/" }

  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
