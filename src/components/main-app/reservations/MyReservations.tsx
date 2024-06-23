"use client"
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import { RootState } from "@/redux/store";
import Image from "next/image";
import { RxDimensions } from "react-icons/rx";
import { SlPeople } from "react-icons/sl";
import { setBookingData } from "@/redux/features/booking/bookingSlice"; // Import your action creator

const MyReservations: React.FC = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const bookingData = useSelector((state: RootState) => state.bookingReducer.bookingData);

  useEffect(() => {
    // Save bookingData to localStorage when it changes
    if (bookingData) {
      localStorage.setItem("bookingData", JSON.stringify(bookingData));
    }
  }, [bookingData]);

  // Load bookingData from localStorage on component mount
  useEffect(() => {
    const storedBookingData = localStorage.getItem("bookingData");
    if (storedBookingData) {
      dispatch(setBookingData(JSON.parse(storedBookingData))); // Dispatch action to set bookingData
    }
  }, []);

  if (!bookingData) return <div>No booking data available.</div>;

  const {
    bookingNumber,
    name,
    email,
    startDate,
    endDate,
    price,
    nights,
    room,
  } = bookingData;

  // Function to format date string to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  function capitalizeOnlyFirstLetter(str: string): string {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  const roomNumber = capitalizeOnlyFirstLetter(room.roomNumber ?? "");
  const roomType = capitalizeOnlyFirstLetter(room.roomType ?? "");

  return (
    <div className="mt-[380px] ss:mt-[480px] lg:mt-[450px]">
      <h1 className="text-3xl md:text-4xl mb-10 text-center">
        Booking Number: {bookingNumber}
      </h1>
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
          <h1 className="text-3xl md:text-4xl mb-4 font-AutumnFlowers">
            {`${roomNumber}-${roomType}`}
          </h1>
          <div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p className="font-semibold">Name</p>
              <p>{name}</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p className="font-semibold">Email</p>
              <p>{email}</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p className="font-semibold">Start Date</p>
              <p>{formatDate(startDate)}</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p className="font-semibold">End Date</p>
              <p>{formatDate(endDate)}</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p className="font-semibold">Night(s)</p>
              <p>{nights}</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p className="font-semibold">Price</p>
              <p>${price}</p>
            </div>
            <div className="flex justify-center py-4 space-x-20">
              <div className="flex flex-col items-center">
                <SlPeople className="text-3xl"/>{" "}
                <span className="text-sm md:text-base text-center mt-2">
                  Up to {room.capacity} Guests
                </span>
              </div>
              <div className="flex flex-col items-center">
                <RxDimensions className="text-3xl"/>{" "}
                <span className="text-sm md:text-base text-center mt-2">
                  {room.roomSize} m²
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReservations;
