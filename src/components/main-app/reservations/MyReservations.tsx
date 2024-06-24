"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { RxDimensions } from "react-icons/rx";
import { SlPeople } from "react-icons/sl";
import { setBookingData } from "@/redux/features/booking/bookingSlice";
import { useSearchParams } from "next/navigation";

const MyReservations: React.FC = () => {
  const searchParams = useSearchParams();

  const bookingId = searchParams.get("bookingId");

  // const router = useRouter();
  // const { id: bookingId } = router.query; // Destructure to get bookingId from query

  console.log("bookingId:", bookingId); // Log bookingId to ensure it's being set correctly

  const dispatch = useDispatch();
  const bookingData = useSelector(
    (state: RootState) => state.bookingReducer.bookingData
  );

  useEffect(() => {
    console.log("useEffect triggered, bookingId:", bookingId);
    if (bookingId) {
      fetchBookingDetails(bookingId as string);
    }
  }, [bookingId]);

  const fetchBookingDetails = async (bookingId: string) => {
    console.log("Fetching booking details for ID:", bookingId); // Log the bookingId
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/booking/${bookingId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch booking details");
      }
      const data = await response.json();
      console.log("Fetched data:", data); // Log the fetched data
      dispatch(setBookingData(data));
      localStorage.setItem("bookingData", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching booking details:", error);
    }
  };

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
                <SlPeople className="text-3xl" />{" "}
                <span className="text-sm md:text-base text-center mt-2">
                  Up to {room.capacity} Guests
                </span>
              </div>
              <div className="flex flex-col items-center">
                <RxDimensions className="text-3xl" />{" "}
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
