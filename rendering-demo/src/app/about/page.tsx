// import { useState } from "react";

import { cookies } from "next/headers";

export default async function AboutPage() {
  //   const [name, setName] = useState("Parth");
  //   console.log("About - Server Component");

  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log("Theme value:", theme);

  return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
}
