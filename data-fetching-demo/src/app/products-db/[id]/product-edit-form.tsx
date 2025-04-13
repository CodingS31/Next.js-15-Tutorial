"use client";

import { editProduct, FormState } from "@/actions/products";
import { Submit } from "@/components/Submit";
import { Product } from "@prisma/client";
import { useActionState } from "react";

export default function ProductEditForm({ product }: { product: Product }) {
  const initialState: FormState = {
    errors: {},
  };

  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction] = useActionState(editProductWithId, initialState);

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-white border rounded"
            name="title"
            defaultValue={product.title}
          />
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Price
          <input
            type="number"
            className="block w-full p-2 text-white border rounded"
            name="price"
            defaultValue={product.price}
          />
        </label>
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>
      <div>
        <label className="text-white">
          Description
          <textarea
            className="block w-full p-2 text-white border rounded"
            name="description"
            defaultValue={product.description ?? ""}
          />
        </label>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>
      {/* <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={isPending}
      >
        Submit
      </button> */}
      <Submit />
    </form>
  );
}
