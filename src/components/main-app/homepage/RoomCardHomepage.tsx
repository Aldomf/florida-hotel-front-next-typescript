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
    return (
      <div className="flex justify-center items-center my-10">
        <div className="text-2xl flex justify-center items-center mr-2">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 mr-2"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          Loading rooms
        </div>
        <div
          className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">
            Please note that the backend may take up to a minute to respond due
            to the use of a free domain. We appreciate your patience during this
            time. Thank you!
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    // Handle the error
    console.error("Error fetching rooms:", error);
    return <div>Error fetching rooms. Please try again later.</div>;
  }

  return (
    <div className="flex flex-col items-center space-y-10 mb-28">
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
                <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 text-center">
                  Room {room.roomNumber} - {RoomType[room.roomType]}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
                &quot;{room.roomSize}m² of comfort. Up to {room.capacity}{" "}
                persons&quot;
              </p>
              <Link
                href={`/room/${room.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#D8C8BB] hover:bg-[#C4B4A7]"
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
      <Link
        href="/rooms"
        className="mt-8 font-semibold text-[#D8C8BB] border border-[#C4B4A7] hover:bg-[#C4B4A7] hover:text-white px-4 py-2"
      >
        SEE ALL ROOMS
      </Link>
    </div>
  );
};

export default RoomCard;
