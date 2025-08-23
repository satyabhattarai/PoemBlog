"use client";

import React, { useState } from "react";

import axios from "axios";

const page = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [meaning, setMeaning] = useState("");
  // const [formData, setFormData] = useState(""); instead of creating formdata as state
  const [image, setImage] = useState(null);

  //Here im saving files intempFORMDATA to send it to server via http.
  const handleImage = async (e) => {
    setImage(e.target.files[0]); // just keep File object in state
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please select an image");
      return;
    }

    try {
      // 1️⃣ Upload image to Cloudinary (unsigned)
      const formData = new FormData();
      formData.append("file", image);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      );

      const cloudRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );

      const imageUrl = cloudRes.data.secure_url;
      console.log("Cloudinary URL:", imageUrl);

      // 2️⃣ Save post in backend (MongoDB)
      const saveRes = await axios.post("/api/protected/posts/upload", {
        title,
        subtitle,
        content,
        meaning,
        image: imageUrl,
      });

      console.log("Post saved in backend:", saveRes.data);
      alert("Poem uploaded successfully!");
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message);
    }
  };

  // I was only sending strings in text json format,
  // now as i want image too, as file i cant do this
  // and i need to pass it as formData
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-sm border p-6 space-y-6"
    >
      {/* Title & Subtitle */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm font-medium">
            Title
          </label>
          <input
            id="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="e.g., Whisper of the Hills"
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subtitle" className="text-sm font-medium">
            Subtitle
          </label>
          <input
            id="subtitle"
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Optional subtitle"
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none"
          />
        </div>
      </div>
      {/* Poem */}
      <div className="flex flex-col gap-2">
        <label htmlFor="poem" className="text-sm font-medium">
          Your Poem
        </label>
        <textarea
          id="poem"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder={`Write your poem here...\nUse blank lines to separate stanzas.`}
          rows={8}
          className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none"
        />
        <p className="text-xs text-gray-500">
          Tip: Use blank lines to separate stanzas.
        </p>
      </div>

      {/* Image Upload */}
      <div className="flex flex-col gap-2">
        <label htmlFor="image" className="text-sm font-medium">
          Image
        </label>
        <input
          id="image"
          type="file"
          onChange={handleImage}
          accept="image/*"
          className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm hover:file:bg-gray-200"
        />
      </div>

      {/* Meaning */}
      <div className="flex flex-col gap-2">
        <label htmlFor="meaning" className="text-sm font-medium">
          Meaning of poem stanza by stanza (optional)
        </label>
        <textarea
          id="meaning"
          onChange={(e) => setMeaning(e.target.value)}
          value={meaning}
          placeholder={`Write meanings per stanza here...\nExample:\n1) ...\n2) ...`}
          rows={6}
          className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Clear
        </button>

        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/90"
        >
          Save Poem
        </button>
      </div>
    </form>
  );
};

export default page;
// if (uploadResponse.status === 200) {
//   const response = await axios.post("/api/protected/posts", {
//     title,
//     subtitle,
//     content,
//     image: uploadResponse.data.fileUrl,
//     meaning,
//   });
// }
