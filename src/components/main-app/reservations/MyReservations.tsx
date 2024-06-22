"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";

const MyReservations: React.FC = () => {
  const bookingData = useSelector((state: RootState) => state.bookingReducer.bookingData);

  if (!bookingData) return <div>No booking data available.</div>;

  const { bookingNumber, name, email, startDate, endDate, price, nights, room } = bookingData;

  return (
    <div className="mt-[380px] ss:mt-[480px] lg:mt-[450px]">
      <div className="flex flex-col mx-4 md:mx-32 lg:mx-12 xl:mx-52 mb-20 lg:flex-row lg:space-x-2">
        <div className="relative w-full h-64 overflow-hidden lg:w-1/2 lg:h-96">
          <div className="relative w-full h-full">
            <Image
              src={room.imageUrls[0]}
              alt=""
              layout="fill"
              objectFit="cover"
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out`}
            />
          </div>
        </div>
        <div className="mt-4 text-center lg:w-1/2 lg:text-left lg:pl-8">
          <h1 className="text-3xl md:text-4xl mb-4">
            Booking Number: {bookingNumber}
          </h1>
          <div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Name</p>
              <p>{name}</p>
              <p>{room.roomNumber}</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Email</p>
              <p>{email}</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Start Date</p>
              <p>{startDate}</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>End Date</p>
              <p>{endDate}</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Price</p>
              <p>{price}</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Nights</p>
              <p>{nights}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReservations;
