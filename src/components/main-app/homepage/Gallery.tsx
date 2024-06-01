import Image from "next/image";
import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const images = [
  "/gal-4.jpg",
  "/gal-1.jpg",
  "/gal-6.jpg",
  "/gal-2.jpg",
  "/gal-5.jpg",
  "/gal-3.jpg",
  "/gal-7.jpg",
  "/gal-8.jpg",
  "/gal-9.jpg",
  "/gal-10.jpg",
  "/gal-11.jpg",
];

interface ArrowProps {
  onClick?: () => void;
}

const CustomLeftArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white rounded-full p-2 z-10"
  >
    <SlArrowLeft className="w-10 h-10 md:w-16 md:h-16"/>
  </button>
);

const CustomRightArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white rounded-full p-2 z-10"
  >
    <SlArrowRight className="w-10 h-10 md:w-16 md:h-16"/>
  </button>
);

const Gallery: React.FC = () => {
  return (
    <div className="my-24">
      <h1 className="text-5xl md:text-6xl lg:text-[50px] mb-10 text-center font-AutumnFlowers">
        Gallery
      </h1>
      <Carousel
        responsive={responsive}
        swipeable={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {images.map((src, index) => (
          <div key={index} className="w-[500px] h-[300px]">
            <Image
              src={src}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full"
              width={500}
              height={300}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
