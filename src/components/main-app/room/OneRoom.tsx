"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useGetRoomByIdQuery } from "@/redux/services/roomApi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { FaWifi } from "react-icons/fa";
import { BiHandicap } from "react-icons/bi";
import { CgScreen } from "react-icons/cg";
import { RiSafeLine } from "react-icons/ri";
import { GiMeal } from "react-icons/gi";

function OneRoom() {
  const params = useParams<{ id: string }>();
  const roomId = params.id;

  const {
    data: initialRoomData,
    error: fetchError,
    isLoading: isFetching,
    refetch,
  } = useGetRoomByIdQuery(roomId);

  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (initialRoomData?.imageUrls && initialRoomData.imageUrls.length > 0) {
      setMainImage(initialRoomData.imageUrls[0]);
    }
  }, [initialRoomData]);

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

  return (
    <div>
      <div>
        <h1 className="mb-6 mt-6 text-4xl border-b border-[#9D8000] text-[#9D8000] text-center pb-6">
          {initialRoomData?.roomNumber} {initialRoomData?.roomType}
        </h1>
      </div>
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
          {initialRoomData?.imageUrls && initialRoomData.imageUrls.length > 1 && (
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
          <div className="mx-8 md:mx-16 mt-16 text-center md:text-left text-[#9D8000]">
            <p className="mb-4 text-2xl border-b border-[#9D8000] pb-2">
              {initialRoomData?.roomNumber} {initialRoomData?.roomType}
            </p>
            <p className="mb-2">{initialRoomData?.description}</p>
          </div>
          <div className="flex flex-col mx-8 md:mx-16 mt-8 text-[#9D8000] text-lg">
            <p className="mb-2">
              <span className="text-xl font-bold">Price Per Night:</span> $
              {initialRoomData?.pricePerNight}
            </p>
            <p className="mb-2">
              <span className="text-xl font-bold">Capacity:</span>{" "}
              {initialRoomData?.capacity} persons
            </p>
            <p className="mb-2">
              <span className="text-xl font-bold">Room Size:</span>{" "}
              {initialRoomData?.roomSize} sqm
            </p>
            <p className="mb-2">
              {" "}
              <span className="text-xl font-bold">Availability:</span>{" "}
              <span className="bg-[#9D8000] text-white px-2 rounded-xl">
                {initialRoomData?.availabilityStatus}
              </span>
            </p>
          </div>
          <div className="flex flex-col mx-8 md:mx-16 mt-8 text-[#9D8000]">
            <div className="flex items-center mb-2 border-b border-[#9D8000] pb-2">
              <FaWifi className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mr-6" />{" "}
              WiFi
            </div>
            <div className="flex items-center mb-2 border-b border-[#9D8000] pb-2">
              <BiHandicap className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mr-6" />{" "}
              Inclusive
            </div>
            <div className="flex items-center mb-2 border-b border-[#9D8000] pb-2">
              <CgScreen className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mr-6" />
              TV
            </div>
            <div className="flex items-center mb-2 border-b border-[#9D8000] pb-2">
              <RiSafeLine className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mr-6" />{" "}
              Safe Box
            </div>
            <div className="flex items-center mb-2 border-b border-[#9D8000] pb-2">
              <GiMeal className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mr-6" />{" "}
              Room Service
            </div>
          </div>
          <div className="flex justify-center mx-8 md:mx-16 mt-2 text-[#9D8000]">
            <button className="bg-[#9D8000] hover:bg-[#C2B266] text-white px-2 py-2 mb-4">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneRoom;
