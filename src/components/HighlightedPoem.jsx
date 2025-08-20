"use client";

import { useEffect, useState } from "react";

import fetchDataFromSheet from "@/api/fetchDataFromSheet";

const HighlightedPoem = () => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);

  const fetch_data = async () => {
    const sheetName = "Poems";
    const limit = 4;
    const response = await fetchDataFromSheet(sheetName, limit);
    setData(response);
  };

  useEffect(() => {
    fetch_data();
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [data]);

  const prevSlide = () => {
    if (data.length === 0) return;
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (data.length === 0) return;
    setCurrent((prev) => (prev + 1) % data.length);
  };

  return (
    <section className="container mx-auto py-16 w-full flex flex-col gap-12 px-4 sm:px-6 md:px-0">
      <h1 className="text-primary-light text-2xl sm:text-3xl font-light flex gap-2 relative group cursor-pointer">
        Highlighted
        <span className="relative inline-block">
          Poems
          <span className="absolute right-0 bottom-0 w-full h-[2px] bg-primary transform translate-y-1  transition-transform duration-300 group-hover:translate-y-2 "></span>
        </span>
      </h1>

      <div className="w-full max-w-3xl mx-auto relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {data.map((item, index) => (
            <div key={index} className="min-w-full px-16 flex flex-col gap-8 ">
              <iframe
                src={item.image}
                className="w-full min-h-80 sm:min-h-96 md:min-h-124 lg:min-h-136"
                allow="autoplay"
              ></iframe>

              <div className="flex flex-col justify-start w-full gap-1">
                <span className="bg-[#FFCB81] text-[#954600] w-fit px-5">
                  {item.title}
                </span>
                <p className="text-secondary-dark text-justify text-sm sm:text-base">
                  {item.sub_title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          &#10094;
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default HighlightedPoem;
