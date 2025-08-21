import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connectionToDatabase from "@/lib/mongoose";
//create post method to submit data

export async function POST(request) {
  try {
    await connectionToDatabase();
    const { title, subtitle, content, image, meaning } = await request.json();
    const newPost = new Post({ title, subtitle, content, image, meaning });
    await newPost.save();
    return NextResponse.json(newPost, { status: 201 });
  } catch (err) {
    console.log(err);
  }
}
