import { notFound } from "next/navigation";

export default async function ProductReview({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const reviewId = parseInt(params.reviewId, 10);

  if (reviewId > 1000) {
    notFound(); // Triggers 404 page
  }
  return (
    <>
      <h1>
        Review {params.reviewId} for Product {params.productId}
      </h1>
      <h1>Review {reviewId}</h1>
    </>
  );
}
