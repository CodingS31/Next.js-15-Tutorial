"use client"; // 👈 Key directive

import { useState } from "react";

export default function DashboardPage() {
  console.log("Dashboard - Client Component");

  const [name, setName] = useState("Parth");

  return (
    <div>
      <h1>Dashboard</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello {name}</p>
    </div>
  );
}
