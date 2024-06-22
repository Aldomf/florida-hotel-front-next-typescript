"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaUmbrellaBeach } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-20 transition-colors duration-100 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <nav className="bg-transparent">
        <div className="flex flex-wrap justify-between items-center px-4 md:px-20 lg:px-40 xl:px-60">
          <div className="hidden ss:flex ss:items-center">
            <FaUmbrellaBeach
              className={`mr-2 ${isScrolled ? "text-[#C4B4A7]" : "text-white"}`}
            />
            <span
              className={`text-sm md:text-base ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              FLORIDA, CUB
            </span>
          </div>
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={isScrolled ? "/logo-pink.png" : "/logo-main.png"}
              className="object-cover w-full h-full"
              width={100}
              height={100}
              alt="Florida-hotel-logo"
              priority
            />
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              href="/form-reservation"
              className={`text-sm mm:text-base text-white font-medium p-2 md:px-6 border border-[#C4B4A7] ${
                isScrolled
                  ? "bg-[#C4B4A7] hover:bg-[#D8C8BB]"
                  : "bg-transparent hover:bg-[#C4B4A7]"
              }`}
            >
              BOOKINGS
            </Link>
          </div>
        </div>
      </nav>
      <nav className={`${isScrolled ? "bg-[#C4B4A7]" : "bg-transparent"}`}>
        <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-center">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm md:text-xl lg:space-x-12">
              <li className="">
                <Link
                  href="/rooms"
                  className={`${
                    isScrolled ? "text-white" : "text-white"
                  } hover:text-black transition-all duration-500 ease-in-out`}
                  aria-current="page"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/restos"
                  className={`${
                    isScrolled ? "text-white" : "text-white"
                  } hover:text-black transition-all duration-500 ease-in-out`}
                >
                  Restaurants
                </Link>
              </li>
              <li>
                <Link
                  href="/spa"
                  className={`${
                    isScrolled ? "text-white" : "text-white"
                  } hover:text-black transition-all duration-500 ease-in-out`}
                >
                  Spa
                </Link>
              </li>
              <li>
                <Link
                  href="/#gallery-section"
                  className={`${
                    isScrolled ? "text-white" : "text-white"
                  } hover:text-black transition-all duration-500 ease-in-out`}
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
