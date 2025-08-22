import React from "react";

const RecentPoem = () => {
  return (
    <div className="max-w-[1000px] mx-auto">
      <h1 className=" text-primary-light text-3xl sm:text-4xl tracking-wider  flex gap-2 relative group cursor-pointer">
        Recent
        <span className="relative inline-block">
          Poems
          <span className="absolute right-0 bottom-0 w-full h-[2px] bg-primary transform translate-y-1  transition-transform duration-300 group-hover:translate-y-2 "></span>
        </span>
      </h1>
    </div>
  );
};

export default RecentPoem;
