// app/posts-sequential/author.tsx
export type AuthorProps = {
  userId: number;
};

export default async function Author({ userId }: AuthorProps) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user: { id: number; name: string } = await res.json();

  return <p className="mt-2 text-sm text-blue-600">✍️ Author: {user.name}</p>;
}
