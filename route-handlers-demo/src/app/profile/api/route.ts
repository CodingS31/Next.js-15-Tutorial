//app/api/profile/route.ts

import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const authToken = requestHeaders.get("authorization");

  console.log("Authorization:", authToken);

  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
