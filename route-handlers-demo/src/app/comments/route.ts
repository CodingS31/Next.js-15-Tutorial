// app/comments/route.ts
import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filteredComments = query
    ? comments.filter((comment) =>
        comment.text.toLowerCase().includes(query.toLowerCase())
      )
    : comments;

  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newComment = {
    id: comments.length + 1,
    text: body.text,
  };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
