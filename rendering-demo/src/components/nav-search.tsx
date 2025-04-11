"use client";
import { useState } from "react";

export default function NavbarSearch() {
  const [search, setSearch] = useState("");
  console.log("NavSearch render");
  return <div>Nav search input</div>;
}
