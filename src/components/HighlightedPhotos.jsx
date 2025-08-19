"use client";
const HighlightedPhotos = () => {
  const galleryItems = [
    {
      src: "https://imgur.com/E3daKOn.jpg",
      title: "Abstract painting",
      likes: 250,
      shares: 50,
    },
    {
      src: "https://imgur.com/9Rp4jxp.jpg",
      title: "Abstract painting",
      likes: 300,
      shares: 70,
    },
    {
      src: "https://imgur.com/Og2dLCM.jpg",
      title: "Abstract painting",
      likes: 180,
      shares: 40,
    },
    {
      src: "https://imgur.com/DMC9OT7.jpg",
      title: "Abstract painting",
      likes: 220,
      shares: 55,
    },
    {
      src: "https://imgur.com/hVHjNzE.jpg",
      title: "Abstract painting",
      likes: 275,
      shares: 65,
    },
  ];
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
        {galleryItems.map((item, index) => (
          <figure key={index} className=" relative group overflow-hidden">
            <img
              src={item.src}
              alt={item.title}
              className="w-full group-hover:scale-105 transition-all duration-200"
            />
            <figcaption className="flex w-full p-3 absolute -bottom-20 left-0 bg-primary-light text-white justify-between items-center invisible group-hover:bottom-0 group-hover:visible transition-all duration-500">
              <div className="flex flex-col gap-y-2">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="flex justify-between text-sm gap-2">
                  <span className="text-secondary">
                    Dummy text Dummy text Dummy
                  </span>
                </p>
              </div>
              <button className="btn-primary">Open</button>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default HighlightedPhotos;
