"use client";

import React from "react";
import { useState } from "react";
const Page = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post();
    } catch (err) {
      console.log(err);
    }
  };
  //ya kina banako createpost file? -> because auth le ya protect garcha
  // auth cha vane matra post garna milcha vanera
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
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Optional subtitle"
            className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/90"
      >
        Save Poem
      </button>
    </form>
  );
};

export default Page;
