import { getProduct } from "@/prisma-db";
import { Product } from "@prisma/client";
import { notFound } from "next/navigation";
import ProductEditForm from "./product-edit-form";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product: Product | null = await getProduct(parseInt(id));

  if (!product) {
    notFound();
  }

  return <ProductEditForm product={product} />;
}
