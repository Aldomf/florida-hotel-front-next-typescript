import React from 'react';

const videoSrc = '/video-2.mp4';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[600px]">
      <div className="h-[600px] overflow-hidden relative">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <h1 className="text-white text-4xl md:text-6xl font-semibold italic">Welcome to Paradise</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;

