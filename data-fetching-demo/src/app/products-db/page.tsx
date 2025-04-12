import { getProducts } from "@/prisma-db";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDbPage() {
  const products: Product[] = await getProducts();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛍️ Products from DB</h1>
      <ul className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            {product.description && (
              <p className="text-gray-600">{product.description}</p>
            )}
            <p className="text-green-600 font-bold">
              ${product.price.toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
