import React from "react";

const videoSrc = "/video-2.mp4";

const Hero: React.FC = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      // Define the media query for mobile
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
  
      // Set different offsets for desktop and mobile
      const offset = isMobile ? window.innerHeight * 0.27 : window.innerHeight * 0.38;
  
      // Get the position of the next section
      const nextSectionPosition = nextSection.getBoundingClientRect().top + window.scrollY;
  
      // Scroll to the adjusted position
      window.scrollTo({
        top: nextSectionPosition - offset,
        behavior: "smooth",
      });
    }
  };  

  return (
    <div className="absolute top-0 left-0 w-full h-screen z-10">
      <div className="h-full overflow-hidden relative">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl text-center font-AutumnFlowers">
            Welcome to Paradise
          </h1>
        </div>
        <div className="absolute bottom-10 left-0 w-full flex justify-center items-center">
          <svg
            onClick={handleScroll}
            className="bounce w-12 h-12 text-white cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <style jsx>{`
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
