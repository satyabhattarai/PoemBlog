"use client";

import { useEffect, useState } from "react";

import fetchDataFromSheet from "@/app/api/fetchDataFromSheet";

const HighlightedPhotos = () => {
  const [data, setData] = useState();
  const fetch_data = async () => {
    const sheetName = "Photos";
    const limit = 4;
    const response = await fetchDataFromSheet(sheetName, limit);
    setData(response);
  };

  useEffect(() => {
    fetch_data();
  }, []);

  return (
    <section className="container mx-auto py-16 w-full flex flex-col gap-12 px-4 sm:px-10">
      <h1 className="text-primary-light text-3xl font-light flex gap-2 relative group cursor-pointer">
        Highlighted
        <span className="relative inline-block">
          Photos
          <span className="absolute right-0 bottom-0 w-full h-[2px] bg-primary transform translate-y-1  transition-transform duration-300 group-hover:translate-y-2 "></span>
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data &&
          data.map((item, index) => (
            <figure key={index} className=" relative group overflow-hidden">
              <iframe
                src={item.image}
                alt={item.title}
                className="min-h-80 sm:min-h-96 md:min-h-124 lg:min-h-136 w-full group-hover:scale-105 transition-all duration-200"
              />
              <figcaption className="flex w-full p-3 absolute -bottom-20 left-0 bg-primary-light text-white justify-between items-center invisible group-hover:bottom-0 group-hover:visible transition-all duration-500">
                <div className="flex flex-col gap-y-2">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="flex justify-between text-sm gap-2">
                    <span className="text-secondary">{item.sub_title}</span>
                  </p>
                </div>
                <button className="btn-primary">{item.date}</button>
              </figcaption>
            </figure>
          ))}
      </div>
    </section>
  );
};

export default HighlightedPhotos;
