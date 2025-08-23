import { NextResponse } from "next/server";
import axios from "axios";
import cloudinary from "@/lib/cloudinary";
import connectionToDatabase from "@/lib/mongoose";

export async function POST(request) {
  try {
    await connectionToDatabase();
    const formData = await request.formData();
    formData.append("upload_preset", cloudinary.upload_preset);
    const cloudRes = await axios.post(
      `${cloudinary.url}/image/upload`,
      formData
    );
    const imageUrl = cloudRes.data.secure_url;
    return NextResponse.json({ success: true, imageUrl }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
