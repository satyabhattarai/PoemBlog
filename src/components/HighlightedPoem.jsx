"use client";

import { useEffect, useState } from "react";

import fetchDataFromSheet from "@/api/fetchDataFromSheet";

const HighlightedPoem = () => {
  const [data, setData] = useState([]);
  const fetch_data = async () => {
    const sheetName = "Photos";
    const limit = 2;
    const response = await fetchDataFromSheet(sheetName, limit);
    setData(response);
  };
  useEffect(() => {
    fetch_data();
  }, []);

  return (
    <section className="container mx-auto py-16 w-full flex flex-col gap-12 px-4 sm:px-6 md:px-0">
      <h1 className="text-primary-light text-2xl sm:text-3xl font-light flex gap-2 relative group cursor-pointer">
        Highlighted
        <span className="relative inline-block">
          Poems
          {/* custom underline */}
          <span className="absolute right-0 bottom-0 w-full h-[2px] bg-primary transform translate-y-1  transition-transform duration-300 group-hover:translate-y-2 "></span>
        </span>
      </h1>

      <div className="flex flex-col px-4 sm:px-10 md:px-44 justify-center items-center gap-6 w-full">
        <img
          src="./higlightedPoem.png"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl object-cover"
          alt=""
        />
        <div className="flex flex-col justify-start w-full gap-1">
          <span className="bg-[#FFCB81] text-[#954600] w-fit px-5">
            Title nepali ma
          </span>
          <p className="text-secondary-dark text-justify text-sm sm:text-base">
            A reflection on life’s struggles and hopes, reminding us that even A
            reflection on life’s struggles and hopes, reminding us that even A
            reflection on life’s struggles and hopes, reminding us that even A
            reflection on life’s struggles and hopes, reminding us that even in
          </p>
        </div>
      </div>
    </section>
  );
};

export default HighlightedPoem;
