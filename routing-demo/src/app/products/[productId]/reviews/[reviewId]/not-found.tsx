"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const parts = pathname.split("/");

  const productId = parts[2] || "Unknown";
  const reviewId = parts[4] || "Unknown";

  return (
    <div>
      <h2>
        Review {reviewId} Not Found for Product {productId}
      </h2>
    </div>
  );
}
