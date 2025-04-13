"use client";
import { createProduct, FormState } from "@/actions/products";
import { Submit } from "@/components/Submit";
import { useActionState } from "react";

export default function AddProductPage() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, fromAction, isPending] = useActionState(
    createProduct,
    initialState
  );

  return (
    <form action={fromAction} className="p-6 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold">➕ Add Product</h2>
      <div>
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="border px-2 py-1 w-full"
        />
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <div>
        <input
          name="price"
          type="number"
          placeholder="Price"
          className="border px-2 py-1 w-full"
        />
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>
      <div>
        <textarea
          name="description"
          placeholder="Description"
          className="border px-2 py-1 w-full"
        />
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>
      {/* <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Product
      </button> */}
      {/* <Submit /> */}
      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
