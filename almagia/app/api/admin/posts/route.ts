import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, content, published, imageUrl } = body;

    if (!title?.trim() || !content?.trim()) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const post = await prisma.post.create({
      data: {
        title: title.trim(),
        content: content.trim(),
        published: Boolean(published),
        imageUrl: imageUrl?.trim() || null,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
