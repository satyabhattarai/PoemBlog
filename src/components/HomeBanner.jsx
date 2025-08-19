"use client";

const HomeBanner = () => {
  return (
    <section className="bg-secondary pt-26">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 h-full justify-between items-center gap-10 md:gap-16">
        <div className="flex flex-col gap-8 md:gap-12 items-start text-center md:text-left">
          <div className="w-full flex flex-col text-primary-light text-3xl sm:text-4xl">
            <span>I love writing poems</span>
            <span>in my freetime.</span>
          </div>
          <button className="btn-primary mx-auto md:mx-0">Read More</button>
        </div>

        <div className="w-full h-full relative">
          <img
            src="/leaf.png"
            alt=""
            className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full md:translate-x-16"
          />
          <img
            className="translate-x-0 md:translate-x-16 w-full h-full object-cover"
            src="/profile.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
