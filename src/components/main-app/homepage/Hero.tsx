import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const images = [
  '/hero-1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] border border-red-700">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={100000}
        keyBoardControl={true}
        customTransition="all 1s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item"
        dotListClass="custom-dot-list-style"
        showDots={true}
      >
        {images.map((image, index) => (
          <div key={index} className="h-[600px] overflow-hidden">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              width={5000}
              height={5000}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
