// app/posts-sequential/page.tsx

import React from "react";
import Author from "./author";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const POSTS_API = "https://jsonplaceholder.typicode.com/posts";

export default async function PostsSequential() {
  const res = await fetch(POSTS_API);
  const allPosts: Post[] = await res.json();
  const posts = allPosts.filter((post) => post.id % 10 === 0); // Limit to 10 unique authors

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">📄 Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
          <React.Suspense
            fallback={<div className="text-gray-500">Loading author...</div>}
          >
            <Author userId={post.userId} />
          </React.Suspense>
        </div>
      ))}
    </div>
  );
}
