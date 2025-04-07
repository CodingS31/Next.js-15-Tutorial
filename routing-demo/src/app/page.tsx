import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?language=en">
        Read in English
      </Link>
      <Link href="/articles/breaking-news-123?language=fr">Read in French</Link>
    </>
  );
}
