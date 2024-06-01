import Image from "next/image";
import React from "react";
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

function Gallery() {
  return (
    <div className="my-24">
      <h1 className="text-5xl md:text-6xl lg:text-[50px] mb-10 text-center font-AutumnFlowers">
        Gallery
      </h1>
      <Carousel responsive={responsive} swipeable={true}>
        {images.map((src, index) => (
          <div key={index} className="w-[500px] h-[300px]">
            <Image
              src={src}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full"
              width={5000}
              height={5000}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Gallery;
