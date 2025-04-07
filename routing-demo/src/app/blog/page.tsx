import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "blog",
  },
};

export default async function BlogPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h1>Welcome to the Blog!</h1>;
}
