import Image from "next/image";
import React from "react";

const HeroGym: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[calc(100vh-200px)] z-10">
      <div className="h-full overflow-hidden relative">
        <Image
          src="/gym.jpg"
          className="object-cover object-center w-full h-full"
          width={5000}
          height={5000}
          alt="Florida-hotel-logo"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl md:text-6xl lg:text-[80px] text-center mt-32 mb-6 font-AutumnFlowers">
            The Gym
          </h1>
          <p className="text-center text-[20px]">
            Stay on track with your fitness goals in our avant-gardé gym that
            features cardiovascular and weight-training machines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroGym;
