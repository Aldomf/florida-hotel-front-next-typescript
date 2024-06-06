import Image from "next/image";
import Link from "next/link";
import React from "react";

function Spa() {
  return (
    <div className="bg-[#F2EFEB] py-6 space-y-6 lg:space-y-0 md:px-20 lg:py-0 lg:h-screen w-full flex flex-col lg:flex-row">
      <div className="h-1/2 w-full lg:w-1/2 lg:h-full flex flex-col justify-center items-center px-4 xl:px-32">
        <h1 className="text-5xl md:text-6xl lg:text-[50px] text-center mb-6 font-AutumnFlowers">
          Spa & Wellness
        </h1>
        <p className="text-center text-[20px]">
          Indulge in rejuvenating treatments and serene relaxation at our
          tranquil spa, designed to revitalize your body and mind.
        </p>
        <Link
          href="/spa"
          className="mt-8 font-semibold border border-[#C4B4A7] hover:bg-[#C4B4A7] hover:text-white px-6 py-2"
        >
          BROWSE ALL
        </Link>
      </div>
      <div className="md:h-[700px] lg:h-full w-full lg:w-1/2 flex justify-center items-center">
        <div className="w-full lg:h-[calc(100vh-172px)] lg:w-[80%] overflow-hidden relative">
          <Image
            src="/spa-1.jpg"
            className="object-cover w-full h-full md:h-[700px]"
            width={5000}
            height={5000}
            alt="Florida-hotel-logo"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
      </div>
    </div>
  );
}

export default Spa;
