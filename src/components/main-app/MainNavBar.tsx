import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUmbrellaBeach } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 z-20">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center px-4 md:px-20 lg:px-40 xl:px-60">
          <div className="hidden ss:flex ss:items-center">
            <FaUmbrellaBeach className="mr-2 text-[#9D8000]" />
            <span className="text-sm md:text-base">FLORIDA, CUB</span>
          </div>
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/florida-hotel-logo-transparent.png"
              className="object-cover w-full h-full"
              width={100}
              height={100}
              alt="Florida-hotel-logo"
            />
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              href="#"
              className="dark:text-blue-500 bg-[#9D8000] hover:bg-[#C2B266] text-white p-2 md:px-6 rounded-lg"
            >
              Reserve
            </Link>
          </div>
        </div>
      </nav>
      <nav className="bg-[#C2B266] dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-center">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm md:text-xl">
              <li className="">
                <Link
                  href="#"
                  className="text-white hover:text-black transition-all duration-500 ease-in-out"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-black transition-all duration-500 ease-in-out"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-black transition-all duration-500 ease-in-out"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-black transition-all duration-500 ease-in-out"
                >
                  Features
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
