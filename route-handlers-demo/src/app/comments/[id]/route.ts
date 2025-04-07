// app/comments/[id]/route.ts
import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params?.id);
  const comment = comments?.find((c) => c.id === id);
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex((c) => c.id === id);
  if (index === -1) return new Response("Not Found", { status: 404 });

  comments[index].text = text;

  return Response.json(comments[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const index = comments.findIndex((c) => c.id === id);
  if (index === -1) return new Response("Not Found", { status: 404 });

  const deleted = comments.splice(index, 1);

  return Response.json(deleted[0]);
}
