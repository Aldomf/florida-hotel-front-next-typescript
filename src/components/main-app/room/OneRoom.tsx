"use client";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { FaWifi } from "react-icons/fa";
import { BiHandicap } from "react-icons/bi";
import { CgScreen } from "react-icons/cg";
import { RiSafeLine } from "react-icons/ri";
import { GiMeal } from "react-icons/gi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GetRoomData, GetRoomDataById } from "@/interfaces/roomsInterface";

interface RoomCardProps {
  initialRoomData?: GetRoomDataById;
  isFetching: boolean;
  fetchError: any;
}

const OneRoom: React.FC<RoomCardProps> = ({
  initialRoomData,
  isFetching,
  fetchError,
}) => {
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [isBooking, setIsBooking] = useState<boolean>(false);
  const [bookingDetails, setBookingDetails] = useState<{
    name: string;
    email: string;
    startDate: Date | null;
    endDate: Date | null;
  }>({
    name: "",
    email: "",
    startDate: null,
    endDate: null,
  });

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialRoomData?.imageUrls && initialRoomData.imageUrls.length > 0) {
      setMainImage(initialRoomData.imageUrls[0]);
    }
  }, [initialRoomData]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsBooking(false);
      }
    };

    if (isBooking) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBooking]);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (fetchError) {
    const errorMessage =
      "status" in fetchError
        ? `Error: ${fetchError.status} - ${JSON.stringify(fetchError.data)}`
        : fetchError.message;

    return <div>Error fetching room data: {errorMessage}</div>;
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  function capitalizeOnlyFirstLetter(str: string): string {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  const roomNumber = capitalizeOnlyFirstLetter(
    initialRoomData?.roomNumber ?? ""
  );
  const roomType = capitalizeOnlyFirstLetter(initialRoomData?.roomType ?? "");

  const handleBookNowClick = () => {
    setIsBooking(true);
  };

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleBookingSubmit = () => {
    // Basic validation
    if (
      !bookingDetails.name ||
      !bookingDetails.email ||
      !bookingDetails.startDate ||
      !bookingDetails.endDate
    ) {
      alert("Please fill out all fields and select dates.");
      return;
    }

    // Implement the booking submission logic here, e.g., sending the details to the server.
    console.log("Booking Details:", bookingDetails);

    // Dummy implementation of the booking submission
    submitBooking(bookingDetails);
    setIsBooking(false);
  };

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      startDate: start,
      endDate: end,
    }));
  };

  const submitBooking = async (bookingDetails: any) => {
    try {
      const response = await fetch("/api/book-room", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // Handle the response data (e.g., show success message, update UI, etc.)
      alert("Booking successful!");
      console.log("Booking Response:", data);
    } catch (error) {
      // Handle errors
      console.error("Booking failed:", error);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div className="mt-[380px] ss:mt-[480px] lg:mt-[450px] mb-32">
      <div className="lg:mx-40 xl:flex xl:mx-32">
        <div className="my-6 mx-3 xl:w-[60%]">
          <div className="main-image mb-5">
            {mainImage && (
              <Image
                src={mainImage}
                alt="Main Room Image"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            )}
          </div>
          {initialRoomData?.imageUrls &&
            initialRoomData.imageUrls.length > 1 && (
              <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                arrows={false}
                showDots={true}
                itemClass="pr-1"
              >
                {initialRoomData.imageUrls.map((url, index) => (
                  <div
                    key={index}
                    className="carousel-image"
                    onClick={() => setMainImage(url)}
                  >
                    <Image
                      src={url}
                      alt={`Room Image ${index + 1}`}
                      width={500}
                      height={500}
                      className="w-36 ss:w-auto h-auto mx-auto cursor-pointer"
                    />
                  </div>
                ))}
              </Carousel>
            )}
        </div>
        <div className="xl:w-[40%]">
          <div className="mx-8 md:mx-16 mt-16 text-center md:text-left">
            <p className="mb-4 text-4xl md:text-5xl border-b border-[#C4B4A7] pb-2 font-AutumnFlowers">
              {roomNumber} - {roomType}
            </p>
            <p className="mb-2">{initialRoomData?.description}</p>
          </div>
          <div className="flex flex-col mx-8 md:mx-16 mt-8 text-lg">
            <p className="mb-2">
              <span className="text-xl font-medium">Price Per Night:</span> $
              {initialRoomData?.pricePerNight}
            </p>
            <p className="mb-2">
              <span className="text-xl font-medium">Capacity:</span>{" "}
              {initialRoomData?.capacity} persons
            </p>
            <p className="mb-2">
              <span className="text-xl font-medium">Room Size:</span>{" "}
              {initialRoomData?.roomSize} sqm
            </p>
            <p className="mb-2">
              {" "}
              <span className="text-xl font-medium">Availability:</span>{" "}
              <span className="bg-[#C4B4A7] text-white px-2 rounded-xl">
                {initialRoomData?.availabilityStatus}
              </span>
            </p>
          </div>
          <div className="flex flex-col mx-8 md:mx-16 mt-8 text-black lg:text-lg">
            <div className="flex items-center mb-2 border-b border-[#C4B4A7] pb-2">
              <FaWifi className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mr-6 text-[#C4B4A7]" />{" "}
              WiFi
            </div>
            <div className="flex items-center mb-2 border-b border-[#C4B4A7] pb-2">
              <BiHandicap className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mr-6 text-[#C4B4A7]" />{" "}
              Inclusive
            </div>
            <div className="flex items-center mb-2 border-b border-[#C4B4A7] pb-2">
              <CgScreen className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mr-6 text-[#C4B4A7]" />
              TV
            </div>
            <div className="flex items-center mb-2 border-b border-[#C4B4A7] pb-2">
              <RiSafeLine className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mr-6 text-[#C4B4A7]" />{" "}
              Safe Box
            </div>
            <div className="flex items-center mb-2 border-b border-[#C4B4A7] pb-2">
              <GiMeal className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mr-6 text-[#C4B4A7]" />{" "}
              Room Service
            </div>
          </div>
          <div className="flex justify-center mx-8 md:mx-16 mt-2 text-[#C4B4A7]">
            <button
              className="bg-[#C4B4A7] hover:bg-[#D8C8BB] text-white px-2 py-2 mb-4"
              onClick={handleBookNowClick}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      {isBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <div className="bg-white p-8 rounded-lg shadow-lg" ref={formRef}>
            <h2 className="text-2xl mb-4">Book Room</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={bookingDetails.name}
              onChange={handleBookingChange}
              className="mb-2 p-2 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={bookingDetails.email}
              onChange={handleBookingChange}
              className="mb-2 p-2 border border-gray-300 rounded-lg w-full"
            />
            <DatePicker
              selected={bookingDetails.startDate}
              onChange={handleDateChange}
              startDate={bookingDetails.startDate}
              endDate={bookingDetails.endDate}
              selectsRange
              inline
              className="mb-2 p-2 border border-gray-300 rounded-lg w-full"
            />
            <div>
              <button
                onClick={handleBookingSubmit}
                className="bg-[#C4B4A7] hover:bg-[#D8C8BB] text-white px-4 py-2 rounded-lg"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OneRoom;
