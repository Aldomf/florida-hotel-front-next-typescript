"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ManyRestos: React.FC = () => {
  function capitalizeOnlyFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <div className="mt-[380px] ss:mt-[480px] lg:mt-[450px]">
      <div className="flex flex-col mx-4 md:mx-32 lg:mx-12 xl:mx-52 mb-20 lg:flex-row lg:space-x-2">
        <div className="relative w-full h-64 overflow-hidden lg:w-1/2 lg:h-96">
          <div className="relative w-full h-full">
            <Image
              src="/rest-5.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out`}
            />
          </div>
        </div>
        <div className="mt-4 text-center lg:w-1/2 lg:text-left lg:pl-8">
          <h1 className="text-3xl md:text-4xl mb-4 font-AutumnFlowers">
            The Golden Fork
          </h1>
          <div className="text mb-4 font-light">
            This 5-Diamond restaurant will take you into a sumptuous culinary
            experience with Mediterranean delights featuring the signature
            Timeless Elegance of Florida Hotel.
          </div>
          <div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Style</p>
              <p>Fine dining</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Cuisine</p>
              <p>International</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Dress code</p>
              <p>Smart Casual</p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/restos/golden-fork"
              className="mt-2 font-medium text-lg border border-[#C4B4A7] px-6 py-2 hover:bg-[#C4B4A7] hover:text-white"
            >
              MORE DETAILS
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-4 md:mx-32 lg:mx-12 xl:mx-52 mb-20 lg:flex-row lg:space-x-2">
        <div className="relative w-full h-64 overflow-hidden lg:w-1/2 lg:h-96">
          <div className="relative w-full h-full">
            <Image
              src="/rest-4.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out`}
            />
          </div>
        </div>
        <div className="mt-4 text-center lg:w-1/2 lg:text-left lg:pl-8">
          <h1 className="text-3xl md:text-4xl mb-4 font-AutumnFlowers">
            Savory Haven
          </h1>
          <div className="text mb-4 font-light">
            Indulge in this 5-Diamond award-winning restaurant featuring the
            sophisticated ambiance of a live piano jazz bar while savoring
            delectable menu offerings
          </div>
          <div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Style</p>
              <p>Fine dining</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Cuisine</p>
              <p>Local</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Dress code</p>
              <p>Smart Casual</p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/restos/savory-haven"
              className="mt-2 font-medium text-lg border border-[#C4B4A7] px-6 py-2 hover:bg-[#C4B4A7] hover:text-white"
            >
              MORE DETAILS
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-4 md:mx-32 lg:mx-12 xl:mx-52 mb-20 lg:flex-row lg:space-x-2">
        <div className="relative w-full h-64 overflow-hidden lg:w-1/2 lg:h-96">
          <div className="relative w-full h-full">
            <Image
              src="/bar-1.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out`}
            />
          </div>
        </div>
        <div className="mt-4 text-center lg:w-1/2 lg:text-left lg:pl-8">
          <h1 className="text-3xl md:text-4xl mb-4 font-AutumnFlowers">
            Bistro Bella
          </h1>
          <div className="text mb-4 font-light">
            Sip on expertly crafted artisanal cocktails and mocktails as you
            watch the sunset and savor the freshest sushi and sashimi while
            enjoying the lively atmosphere of the night.
          </div>
          <div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Style</p>
              <p>Casual dining</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Cuisine</p>
              <p>International</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Dress code</p>
              <p>Casual</p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/restos/bistro"
              className="mt-2 font-medium text-lg border border-[#C4B4A7] px-6 py-2 hover:bg-[#C4B4A7] hover:text-white"
            >
              MORE DETAILS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManyRestos;
