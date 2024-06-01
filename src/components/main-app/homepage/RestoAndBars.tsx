import Image from "next/image";
import Link from "next/link";
import React from "react";

const RestoAndBars: React.FC = () => {
  return (
    <div className="w-full h-[calc(100vh-172px)] mb-28">
      <div className="h-full overflow-hidden relative">
        <Image
          src="/rest-1.jpg"
          className="object-cover w-full h-full"
          width={5000}
          height={5000}
          alt="Florida-hotel-logo"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl md:text-6xl lg:text-[80px] text-center mb-6 font-AutumnFlowers">
            Restaurants & Bars
          </h1>
          <p className="text-center text-[20px]">
            Savour an eclectic variety of gastronomic delicacies prepared by our{" "}
            <br />
            talented culinary team.
          </p>
          <Link
            href="/rooms"
            className="mt-8 font-semibold text-white border border-[#C4B4A7] hover:bg-[#C4B4A7] hover:text-white px-6 py-2"
          >
            BROWSE ALL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestoAndBars;
