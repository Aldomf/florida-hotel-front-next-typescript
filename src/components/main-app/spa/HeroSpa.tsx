import Image from "next/image";
import React from "react";

const HeroSpa: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[calc(100vh-200px)] z-10">
      <div className="h-full overflow-hidden relative">
        <Image
          src="/spa-3.jpg"
          className="object-cover w-full h-full"
          width={5000}
          height={5000}
          alt="Florida-hotel-logo"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl md:text-6xl lg:text-[80px] text-center mt-32 mb-6 font-AutumnFlowers">
            Rooms & Suites
          </h1>
          <p className="text-center text-[20px]">
            Enjoy the beautifully appointed rooms with views across <br /> the
            Caribbean Sea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSpa;
