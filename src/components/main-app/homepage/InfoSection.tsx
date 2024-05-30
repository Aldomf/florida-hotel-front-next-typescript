import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FiSmartphone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Image from "next/image";

function InfoSection() {
  return (
    <div className="my-10 mx-4 mt-[580px] ss:mt-[650px] mb-14 lg:mb-28 md:mx-28 lg:flex lg:space-x-20">
      <div className="text-center space-y-6 pb-8 lg:text-left lg:pr-36 lg:w-[60%]">
        <h2 className="text-4xl md:text-5xl font-medium font-AutumnFlowers">Florida Hotel</h2>
        <p className="lg:text-xl">
          Located on the powdery white shores of the azure waters of the
          Caribbean, Florida Hotel is the epitome of five-star luxury and
          hospitality, catering to distinguished guests.
        </p>
        <button
          //   onClick={() => router.push(`/room/${room.id}`)}
          className="mt-2 font-semibold text-[#D8C8BB] border border-[#D8C8BB] px-4 py-2"
        >
          HOTEL DETAILS
        </button>
      </div>
      <div className="flex flex-col items-center space-y-3 border-t border-gray-300 py-6 lg:border-l lg:border-t-0 lg:pl-6 lg:w-[40%]">
        <div>
          <Image
            src="/logo-black.png"
            className="object-cover w-full h-full"
            width={100}
            height={100}
            alt="Florida-hotel-logo"
          />
        </div>
        <div className="flex items-center">
          <TfiEmail className="text-2xl mr-3" /> info.floridahotel@gmail.com
        </div>
        <div className="flex items-center">
          <FiSmartphone className="text-2xl mr-3" /> +5354873988
        </div>
        <div className="flex items-center">
          <SlLocationPin className="text-2xl mr-3" /> Florida, Cuba
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
