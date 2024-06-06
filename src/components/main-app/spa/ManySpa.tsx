"use client";
import Image from "next/image";
import React from "react";

const ManySpa: React.FC = () => {
  function capitalizeOnlyFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <div className="mt-[380px] ss:mt-[480px] lg:mt-[450px]">
      <div className="flex flex-col mx-4 md:mx-32 lg:mx-12 xl:mx-52 mb-20 lg:flex-row lg:space-x-2">
        <div className="relative w-full h-64 overflow-hidden lg:w-1/2 lg:h-96">
          <div className="relative w-full h-full">
            <Image
              src="/spa-2.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out`}
            />
          </div>
        </div>
        <div className="mt-4 text-center lg:w-1/2 lg:text-left lg:pl-8">
          <h1 className="text-3xl md:text-4xl mb-4 font-AutumnFlowers">
            Tranquil Bliss Spa
          </h1>
          <div className="text mb-4 font-light">
            Escape to Tranquil Bliss Spa, where serenity and relaxation await
            you. Our luxurious treatments are designed to rejuvenate your mind,
            body, and spirit. Indulge in soothing massages, revitalizing
            facials, and therapeutic body treatments in a peaceful and calming
            environment. Let our skilled therapists pamper you with personalized
            care, ensuring an unforgettable spa experience that leaves you
            feeling refreshed and renewed.
          </div>
          <button className="mt-2 font-medium text-lg border border-[#C4B4A7] px-6 py-2 hover:bg-[#C4B4A7] hover:text-white">
            MORE DETAILS
          </button>
        </div>
      </div>
      <div className="flex flex-col mx-4 md:mx-32 lg:mx-12 xl:mx-52 mb-20 lg:flex-row lg:space-x-2">
        <div className="relative w-full h-64 overflow-hidden lg:w-1/2 lg:h-96">
          <div className="relative w-full h-full">
            <Image
              src="/spa-4.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out`}
            />
          </div>
        </div>
        <div className="mt-4 text-center lg:w-1/2 lg:text-left lg:pl-8">
          <h1 className="text-3xl md:text-4xl mb-4 font-AutumnFlowers">
            Serenity Springs Spa
          </h1>
          <div className="text mb-4 font-light">
            Discover the ultimate sanctuary at Serenity Springs Spa, your haven
            for holistic wellness and tranquility. Immerse yourself in our wide
            range of services, including aromatherapy sessions, detoxifying body
            wraps, and revitalizing skin treatments. Our expert practitioners
            use only the finest natural products to enhance your well-being.
            Experience the perfect blend of luxury and comfort as you unwind and
            rejuvenate in our serene, nature-inspired setting.
          </div>
          <button className="mt-2 font-medium text-lg border border-[#C4B4A7] px-6 py-2 hover:bg-[#C4B4A7] hover:text-white">
            MORE DETAILS
          </button>
        </div>
      </div>
      <div className="flex flex-col mx-4 md:mx-32 lg:mx-12 xl:mx-52 mb-20 lg:flex-row lg:space-x-2">
        <div className="relative w-full h-64 overflow-hidden lg:w-1/2 lg:h-96">
          <div className="relative w-full h-full">
            <Image
              src="/gym.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out`}
            />
          </div>
        </div>
        <div className="mt-4 text-center lg:w-1/2 lg:text-left lg:pl-8">
          <h1 className="text-3xl md:text-4xl mb-4 font-AutumnFlowers">
            The Gym
          </h1>
          <div className="text mb-4 font-light">
            Our state-of-the-art gym is conveniently equipped with everything
            you need for your wellness journey during your vacation in Florida
            Hotel.
          </div>
          <button className="mt-2 font-medium text-lg border border-[#C4B4A7] px-6 py-2 hover:bg-[#C4B4A7] hover:text-white">
            MORE DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManySpa;
