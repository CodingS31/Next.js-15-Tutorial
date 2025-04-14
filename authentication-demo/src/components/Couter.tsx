"use client";

import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const { isLoaded } = useAuth();
  const { user } = useUser();

  if (!isLoaded || !user) return null;

  return (
    <div>
      <p>Welcome, {user?.firstName || "User"}!</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
