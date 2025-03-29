import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Simulating a product title fetch
  const title = await new Promise((resolve) =>
    setTimeout(() => resolve(`${params.productId}`), 100)
  );

  return {
    title: `Product ${title}`,
  };
}

export default async function ProductDetails({ params }: Props) {
  return <h1>Details about product {params.productId}</h1>;
}
