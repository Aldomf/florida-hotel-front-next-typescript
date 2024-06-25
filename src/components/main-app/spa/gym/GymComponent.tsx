import Image from "next/image";

const GymComponent: React.FC = () => {
  return (
    <div className="mt-20 mb-32">
      <div className="lg:mx-40 xl:flex xl:mx-32">
        <div className="my-6 mx-3 xl:w-[60%]">
          <div className="main-image mb-5">
            <Image
              src="/gym.jpg"
              alt="Main Room Image"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="xl:w-[40%]">
          <div className="mx-8 md:mx-16 mt-16 text-center md:text-left">
            <p className="mb-4 text-4xl md:text-5xl border-b border-[#C4B4A7] pb-2 font-AutumnFlowers">
              Tranquil Bliss Spa
            </p>
            <p className="mb-2">
              Welcome to Energize Fitness Center, the premier gym at our hotel
              designed to meet all your fitness needs. Whether you&apos;re a
              dedicated athlete or just looking to stay active during your stay,
              our state-of-the-art facility offers a comprehensive range of
              equipment and amenities to help you achieve your health and
              wellness goals. Our gym features the latest cardio machines,
              including treadmills, ellipticals, and stationary bikes, all
              equipped with individual screens to keep you entertained while you
              work out. For those looking to build strength, we provide a
              variety of free weights, resistance machines, and functional
              training equipment to accommodate all levels of fitness. Energize
              Fitness Center also offers a dedicated area for stretching and
              core exercises, ensuring a well-rounded workout experience.
            </p>

            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Opening hours:</p>
              <p>Mon - Sun 06:00 - 23:59</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymComponent;
