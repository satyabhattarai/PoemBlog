"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Me", path: "/" },
    { name: "My Poems", path: "/my_poems" },
    { name: "My Gallery", path: "/my_gallery" },
    { name: "About Me", path: "/about" },
    { name: "Contact Me", path: "/contact" },
  ];

  return (
    <div>
      <nav className="bg-secondary w-full shadow-2xl z-50 fixed">
        <div className="mx-auto container bg-transparent flex justify-between items-center py-5 px-4">
          <Link
            href={"/"}
            className="cursor-pointer text-3xl sm:text-4xl px-4 py-2 mr-auto text-primary-light font-bold font-sans uppercase tracking-widest border-2 shadow-lg active:translate-y-0.5 transition-all duration-450 hover:shadow-2xl hover:-translate-y-2"
          >
            Anupama
          </Link>

          <button
            className="text-primary-light md:hidden focus:outline-none text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>

          <ul
            className={`flex-col md:flex-row md:flex gap-5 absolute md:static bg-secondary w-full md:w-auto left-0 md:left-auto top-full md:top-auto py-5 md:py-0 transition-all duration-900 ease-in ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li
                  key={item.name}
                  className="font-light text-center md:text-left"
                >
                  <Link
                    href={item.path}
                    className={`pt-2 transition-all ease-in duration-300 ${
                      isActive
                        ? "border-t-2 border-[#5e7e50] text-primary-light"
                        : "hover:border-t-2 hover:border-[#5c6e55] hover:text-[#283f1d]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <div className="w-full py-6">dummy</div>
    </div>
  );
};

export default Navbar;
