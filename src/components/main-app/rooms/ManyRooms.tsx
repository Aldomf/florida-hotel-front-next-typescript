"use client";
import { GetRoomData } from "@/interfaces/roomsInterface";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface RoomCardProps {
  rooms: GetRoomData[];
  isLoading: boolean;
  error: any;
}

const ManyRooms: React.FC<RoomCardProps> = ({ rooms, isLoading, error }) => {
  const router = useRouter();

  const [hoveredRoomIndex, setHoveredRoomIndex] = useState<number | null>(null);

  const handleMouseEnter = (roomIndex: number) => {
    setHoveredRoomIndex(roomIndex);
  };

  const handleMouseLeave = () => {
    setHoveredRoomIndex(null);
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
    <div className="mt-[400px] ss:mt-[480px] lg:mt-[450px]">
      {rooms?.map((room, roomIndex) => (
        <div
          key={room.id}
          className="flex flex-col mx-4 md:mx-32 lg:mx-12 xl:mx-52 mb-20 lg:flex-row lg:space-x-2"
        >
          <div
            className="relative w-full h-64 overflow-hidden lg:w-1/2 lg:h-96"
            onMouseEnter={() => handleMouseEnter(roomIndex)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full h-full">
              {room.imageUrls.length > 0 ? (
                <>
                  <Image
                    src={room.imageUrls[0]}
                    alt={room.roomNumber}
                    layout="fill"
                    objectFit="cover"
                    className={`transition-opacity duration-300 ease-in-out ${
                      hoveredRoomIndex === roomIndex
                        ? "opacity-0"
                        : "opacity-100"
                    }`}
                  />
                  {room.imageUrls.length > 1 && (
                    <Image
                      src={room.imageUrls[1]}
                      alt={room.roomNumber}
                      layout="fill"
                      objectFit="cover"
                      className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                        hoveredRoomIndex === roomIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-200">
                  No Image Available
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 text-center lg:w-1/2 lg:text-left lg:pl-8">
            <h1 className="text-2xl mb-4">{room.roomNumber}</h1>
            <div className="mb-4">
              {room.roomSize} m²{" "}
              <span className="font-extralight ss:mx-2">|</span> Up to{" "}
              {room.capacity} Guests{" "}
              <span className="font-extralight ss:mx-2">|</span> Seaside view
            </div>
            <div className="text mb-4 font-light">{room.description}</div>
            <button
              onClick={() => router.push(`/room/${room.id}`)}
              className="mt-2 font-semibold text-[#9D8000] border border-[#9D8000] px-4 py-2"
            >
              MORE DETAILS
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManyRooms;
