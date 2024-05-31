import { GetRoomDataById } from "@/interfaces/roomsInterface";
import Image from "next/image";
import React from "react";
import { RxDimensions } from "react-icons/rx";
import { SlPeople } from "react-icons/sl";
import { IoBedOutline } from "react-icons/io5";
import { LiaUmbrellaBeachSolid } from "react-icons/lia";

interface RoomCardProps {
  initialRoomData?: GetRoomDataById;
  isFetching: boolean;
  fetchError: any;
}

const HeroOneRoom: React.FC<RoomCardProps> = ({
  initialRoomData,
  isFetching,
  fetchError,
}) => {
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
    <div className="absolute top-0 left-0 w-full h-[calc(100vh-200px)] z-10">
      <div className="h-full overflow-hidden relative">
        {initialRoomData?.imageUrls && (
          <Image
            src={initialRoomData?.imageUrls[0]}
            className="object-cover w-full h-full"
            width={5000}
            height={5000}
            alt="Florida-hotel-logo"
          />
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl md:text-6xl lg:text-[80px] text-center mt-32 mb-6 font-AutumnFlowers">
            {roomNumber} - {roomType}
          </h1>
          <div className="grid grid-cols-4 text-4xl">
            <div className="flex flex-col items-center">
              <RxDimensions />{" "}
              <span className="text-sm md:text-base text-center mt-2">{initialRoomData?.roomSize} m²</span>
            </div>
            <div className="flex flex-col items-center">
              <SlPeople />{" "}
              <span className="text-sm md:text-base text-center mt-2">
                Up to {initialRoomData?.capacity} Guests
              </span>
            </div>
            <div className="flex flex-col items-center">
              <IoBedOutline />{" "}
              <span className="text-sm md:text-base text-center mt-2">One King Bed or 2 Double Beds</span>
            </div>
            <div className="flex flex-col items-center">
              <LiaUmbrellaBeachSolid />{" "}
              <span className="text-sm md:text-base text-center mt-2">Seafront <br className="md:hidden"/> view</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOneRoom;
