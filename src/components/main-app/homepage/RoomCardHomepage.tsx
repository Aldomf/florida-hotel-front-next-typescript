import React, { useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GetRoomData } from "@/interfaces/roomsInterface";
import { AvailabilityStatus, RoomType } from "@/enums/roomEnums";
import { FaWifi } from "react-icons/fa6";
import { BiHandicap } from "react-icons/bi";
import { CgScreen } from "react-icons/cg";
import { RiSafeLine } from "react-icons/ri";
import { GiMeal } from "react-icons/gi";
import Link from "next/link";

interface RoomCardProps {
  rooms: GetRoomData[];
  isLoading: boolean;
  error: any;
}

const RoomCard: React.FC<RoomCardProps> = ({ rooms, isLoading, error }) => {
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(
    null
  );
  const [hoveredRoomIndex, setHoveredRoomIndex] = useState<number | null>(null);

  const handleMouseEnter = (roomIndex: number, imageIndex: number) => {
    setHoveredRoomIndex(roomIndex);
    setHoveredImageIndex(imageIndex);
  };

  const handleMouseLeave = () => {
    setHoveredRoomIndex(null);
    setHoveredImageIndex(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    // Handle the error
    console.error("Error fetching rooms:", error);
    return <div>Error fetching rooms. Please try again later.</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center mm:flex-row mm:flex-wrap mm:space-x-6 mt-10">
      {rooms?.map((room, roomIndex) => (
        <div
          key={roomIndex}
          className="max-w-[300px] md:max-w-[450px] bg-white border border-gray-200 rounded-lg shadow mb-4 xl:mb-0"
        >
          <div className="relative h-44 md:h-72 overflow-hidden rounded-t-lg">
            {room.imageUrls && room.imageUrls.length > 0 ? (
              <div
                className="carousel-container"
                onMouseEnter={() => handleMouseEnter(roomIndex, 0)}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={
                    room.imageUrls[
                      hoveredRoomIndex === roomIndex &&
                      hoveredImageIndex !== null
                        ? (hoveredImageIndex + 1) % room.imageUrls.length
                        : 0
                    ]
                  }
                  width={500}
                  height={500}
                  alt={`room-image-${
                    hoveredRoomIndex === roomIndex ? hoveredImageIndex : 0
                  }`}
                  className="object-cover w-full h-full transition duration-500 ease-in-out transform hover:scale-110"
                />
              </div>
            ) : (
              <Image
                src="https://via.placeholder.com/800x400?text=No+Image"
                alt="no-image"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            )}
          </div>
          <div className="p-5 flex flex-col items-center">
            <div className="flex justify-around w-[95%] mb-2">
              <FaWifi className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              <BiHandicap className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              <CgScreen className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              <RiSafeLine className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              <GiMeal className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            </div>
            <Link href={`/room/${room.id}`}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
                Room {room.roomNumber} - {RoomType[room.roomType]}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
            &quot;{room.roomSize}m² of comfort. Up to {room.capacity} persons&quot;
            </p>
            <Link
              href={`/room/${room.id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#9D8000] rounded-lg hover:bg-[#C2B266]"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomCard;
