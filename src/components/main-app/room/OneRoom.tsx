"use client";
import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { FaWifi } from "react-icons/fa";
import { BiHandicap } from "react-icons/bi";
import { CgScreen } from "react-icons/cg";
import { RiSafeLine } from "react-icons/ri";
import { GiMeal } from "react-icons/gi";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BookingData, GetRoomDataByIdTwo } from "@/interfaces/roomsInterface";
import { useCreateBookingMutation } from "@/redux/services/bookingApi";
import { RxCross1 } from "react-icons/rx";

interface RoomCardProps {
  initialRoomData?: GetRoomDataByIdTwo;
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
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [bookingDetails, setBookingDetails] = useState<{
    name: string;
    email: string;
    startDate: Date;
    endDate: Date;
    price: number;
    nights: number;
    roomId: number;
  }>({
    name: "",
    email: "",
    startDate: new Date(),
    endDate: new Date(),
    price: 0,
    nights: 0,
    roomId: initialRoomData?.id ?? 0,
  });

  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges: any) => {
    const startDate = ranges.selection.startDate;
    const endDate = ranges.selection.endDate;
    setSelectionRange(ranges.selection);

    const days = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const pricePerNight = initialRoomData?.pricePerNight ?? 0;
    const totalPrice = days * pricePerNight;

    setTotalPrice(totalPrice);
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      startDate,
      endDate,
      price: totalPrice,
      nights: days,
      roomId: initialRoomData?.id ?? 0,
    }));
  };

  const [createBooking, { isLoading: isBookingLoading }] =
    useCreateBookingMutation();
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialRoomData?.imageUrls && initialRoomData.imageUrls.length > 0) {
      setMainImage(initialRoomData.imageUrls[0]);
    }
    console.log(initialRoomData?.id)
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

  const handleBookNowClick = () => {
    setIsBooking(true);
  };

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleBookingSubmit = async () => {
    try {
      const { name, email, startDate, endDate, price, nights, roomId } = bookingDetails;
      const bookingData: BookingData = {
        name,
        email,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        price,
        nights,
        roomId,
      };

      const response = await createBooking(bookingData).unwrap();
      console.log("Booking successful:", response);

      setBookingDetails({
        name: "",
        email: "",
        startDate: new Date(),
        endDate: new Date(),
        price: 0,
        nights: 0,
        roomId: initialRoomData?.id ?? 0,
      });

      setError("");
      setIsBooking(false);
      setTotalPrice(0)
    } catch (error: any) {
      console.error("Failed to book the room:", error);
      // Assuming error is the response object from the server
      const errorMessages = error.data?.message || [
        "An unexpected error occurred",
      ];
      setError(errorMessages);
    }
  };

  const handleCloseBookingModal = (e: React.MouseEvent) => {
    if ((e.target as Element).id === "booking-modal") {
      setIsBooking(false);
    }
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
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40"
          id="booking-modal"
          onClick={handleCloseBookingModal}
        >
          <div
            className="bg-white py-4 px-2 lg:p-6 rounded-lg shadow-lg max-h-screen overflow-auto"
            ref={formRef}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl">Book Room</h2>
              <div className="cursor-pointer text-red-600 border border-red-500 hover:text-white hover:bg-red-500" onClick={() => setIsBooking(false)}><RxCross1 /></div>
            </div>
            <div className="text-red-600">
              {Array.isArray(error) &&
                error.map((errMsg, index) => <p key={index}>{errMsg}</p>)}
            </div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={bookingDetails.name}
              onChange={handleBookingChange}
              className="mb-2 p-2 border border-gray-300 rounded-lg w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={bookingDetails.email}
              onChange={handleBookingChange}
              className="mb-2 p-2 border border-gray-300 rounded-lg w-full"
              required
            />
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              minDate={new Date()}
              className="mb-2 p-2 border border-gray-300 rounded-lg w-full"
            />
            {totalPrice > 0 && (
              <div className="mb-2 text-lg">
                <p className="text-xl font-medium">
                  Total Price for {bookingDetails.nights} nights: ${totalPrice}
                </p>
              </div>
            )}
            <div>
              <button
                onClick={handleBookingSubmit}
                type="submit"
                disabled={isBookingLoading}
                className="bg-[#C4B4A7] hover:bg-[#D8C8BB] text-white px-4 py-2"
              >
                {isBookingLoading ? "Booking..." : "Confirm Booking"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OneRoom;
