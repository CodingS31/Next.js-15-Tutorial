"use client";

import { removeProduct } from "@/actions/products";
import { getProducts } from "@/prisma-db";
import { useOptimistic } from "react";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export const ProductDetail = ({ products }: { products: Product[] }) => {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products, // initial state
    (currentProducts, productId) =>
      currentProducts.filter((p) => p.id !== productId)
  );

  const removeProductById = async (productId: number) => {
    setOptimisticProducts(productId); // instantly update UI
    await removeProduct(productId); // trigger server action
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛍️ Products from DB</h1>
      <ul className="grid grid-cols-1 gap-4">
        {optimisticProducts.map((product) => (
          <li key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">
              <Link href={`/products-db/${product.id}`}>{product.title}</Link>
            </h2>
            {product.description && (
              <p className="text-gray-600">{product.description}</p>
            )}
            <p className="text-green-600 font-bold">
              ${product.price.toFixed(2)}
            </p>
            {/* <form action={removeProduct.bind(null, product.id)}>
              <button
                type="submit"
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </form> */}
            <form action={removeProductById.bind(null, product.id)}>
              <button
                type="submit"
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};
