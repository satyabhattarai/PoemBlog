import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connectionToDatabase from "@/lib/mongoose";

export async function GET() {
  try {
    await connectionToDatabase();
    const allPosts = await Post.find({});
    return NextResponse.json(allPosts, { status: 200 });
  } catch (err) {
    console.log(err);
  }
}
