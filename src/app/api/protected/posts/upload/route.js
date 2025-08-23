import { NextResponse } from "next/server";
import Post from "@/models/Post";
import cloudinary from "@/lib/cloudinary";
import connectionToDatabase from "@/lib/mongoose";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }; only for formidable

export async function POST(request) {
  try {
    await connectionToDatabase();
    // const formData = await request.formData();
    // const file = formData.get("image");
    // const title = formData.get("title");
    // const subtitle = formData.get("subtitle");
    // const content = formData.get("content");
    // const meaning = formData.get("meaning");
    // Your backend is expecting formData and a file,
    //  but you’re now doing unsigned Cloudinary uploads
    //  directly from the frontend. That’s why the backend is
    // failing with 400/500 errors: file is undefined or the server
    //  cannot handle the raw FormData from the frontend.
    // Read body once

    // console.log("Received body:", body);

    const { title, subtitle, content, meaning, image } = await request.json();
    if (!image) {
      return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
    }

    // // Convert file -> Buffer // no need now im passing img as text
    // const arrayBuffer = await file.arrayBuffer();
    // const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary
    // const uploadRes = await new Promise((resolve, reject) => {
    //   cloudinary.uploader
    //     .upload_stream({ folder: "next_uploads" }, (err, result) => {
    //       if (err) reject(err);
    //       else resolve(result);
    //     })
    //     .end(buffer);
    // });

    // ✅ Save post to MongoDB
    const newPost = new Post({
      title,
      subtitle,
      content,
      meaning,
      // image: uploadRes.secure_url, // save Cloudinary URL
      image,
    });
    await newPost.save(); // actually saves in MongoDB

    return NextResponse.json({ success: true, post: newPost }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
//Step 1: Frontend sends the picture + text

//Step 2: Backend uploads picture to Cloudinary → gets a URL

//Step 3: Create a new post using the URL + text → save in MongoDB

//Step 4: Send back confirmation to the frontend
