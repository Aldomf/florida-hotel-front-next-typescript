import Image from "next/image";
import React from "react";

const HeroGoldenFork: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[calc(100vh-200px)] z-10">
      <div className="h-full overflow-hidden relative">
        <Image
          src="/rest-5.jpg"
          className="object-cover object-center w-full h-full"
          width={5000}
          height={5000}
          alt="Florida-hotel-logo"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl md:text-6xl lg:text-[80px] text-center mt-32 mb-6 font-AutumnFlowers">
            Golden Fork
          </h1>
          <p className="text-center text-[20px]">
            An award-winning epicurean Mediterranean fine dining restaurant with
            a private dining room.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroGoldenFork;
