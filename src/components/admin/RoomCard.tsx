"use client";
import { GetRoomData, RoomData } from "@/interfaces/roomsInterface";
import { AvailabilityStatus, RoomType } from "@/enums/roomEnums";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RoomCardProps {
  rooms: GetRoomData[];
  isLoading: boolean;
  error: any;
}

const RoomCard: React.FC<RoomCardProps> = ({ rooms, isLoading, error }) => {
  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    // Handle the error
    console.error("Error fetching rooms:", error);
    return <div>Error fetching rooms. Please try again later.</div>;
  }

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }

  return (
    <div className="flex flex-col justify-center items-center mm:flex-row mm:flex-wrap mm:space-x-6 mt-10">
      {rooms?.map((room, index) => (
        <div
          key={index}
          className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-lg rounded-xl w-[300px] lg:w-96 mb-6 transition-transform transform hover:scale-105"
        >
          <div className="relative h-44 lg:h-56 mx-4 -mt-6 overflow-hidden shadow-lg rounded-xl">
            {room.imageUrls && room.imageUrls.length > 0 ? (
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
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
          <div className="p-6 space-y-4">
            <h5 className="text-2xl font-semibold text-blue-gray-900">
              Room {room.roomNumber} - {RoomType[room.roomType]}
            </h5>
            <p className="text-base font-medium leading-relaxed text-gray-700">
              {truncateText(room.description ?? '', 82)}
            </p>
            <p className="text-base font-medium leading-relaxed text-gray-700">
              Price per Night: ${room.pricePerNight}
            </p>
            <p className="text-base font-medium leading-relaxed text-gray-700">
              Capacity: {room.capacity} persons
            </p>
            <p className="text-base font-medium leading-relaxed text-gray-700">
              Room Size: {room.roomSize} sq. ft.
            </p>
            <p className="text-base font-medium leading-relaxed text-gray-700">
              Availability: {AvailabilityStatus[room.availabilityStatus]}
            </p>
          </div>
          <div className="p-6 pt-0 flex justify-center">
            <button
              className="py-3 px-6 text-xs font-bold uppercase text-white bg-gray-900 rounded-lg shadow-md transition-all hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:bg-gray-800"
              type="button"
              onClick={() => router.push(`/admin/room/${room.id}`)}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );

};

export default RoomCard;
