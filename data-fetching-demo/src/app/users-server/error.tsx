"use client";
import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error("Error loading users:", error);
    // Optionally log error to a service
  }, [error]);

  return (
    <div className="p-4 bg-red-100 text-red-800 rounded shadow">
      <h2 className="text-lg font-bold">🚨 Error fetching users data</h2>
      <p>
        Something went wrong while loading user data. Please try again later.
      </p>
    </div>
  );
}
