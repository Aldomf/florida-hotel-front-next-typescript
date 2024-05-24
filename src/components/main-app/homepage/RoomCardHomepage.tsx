import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GetRoomData } from "@/interfaces/roomsInterface";
import { AvailabilityStatus, RoomType } from "@/enums/roomEnums";

interface RoomCardProps {
  rooms: GetRoomData[];
  isLoading: boolean;
  error: any;
}

const RoomCard: React.FC<RoomCardProps> = ({ rooms, isLoading, error }) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const CustomButtonGroup: React.FC<any> = ({ next, previous }) => (
    <div className="custom-button-group">
      <button className="prev" onClick={previous}>
        Prev
      </button>
      <button className="next" onClick={next}>
        Next
      </button>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center mm:flex-row mm:flex-wrap mm:space-x-6 mt-10">
      {rooms?.map((room, index) => (
        <div
          key={index}
          className="max-w-[300px] md:max-w-[450px] bg-white border border-gray-200 rounded-lg shadow mb-4 xl:mb-0"
        >
          <div className="relative h-44 md:h-72 overflow-hidden rounded-t-lg">
            {room.imageUrls && room.imageUrls.length > 0 ? (
              <Carousel
                additionalTransfrom={0}
                customButtonGroup={<CustomButtonGroup />}
                arrows={false}
                centerMode={false}
                containerClass="carousel-container"
                draggable
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                responsive={{
                  desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 1,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                }}
                showDots={false}
                slidesToSlide={1}
                swipeable
              >
                {room.imageUrls.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    width={500}
                    height={500}
                    alt={`room-image-${index}`}
                    className="object-cover w-full h-full"
                  />
                ))}
              </Carousel>
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
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Room {room.roomNumber} - {RoomType[room.roomType]}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {truncateText(room.description ?? "", 82)}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Price per Night: ${room.pricePerNight}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Capacity: {room.capacity} persons
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Room Size: {room.roomSize} sq. ft.
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Availability: {AvailabilityStatus[room.availabilityStatus]}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomCard;
