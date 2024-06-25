import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const SpringSpaComponent: React.FC = () => {
  return (
    <div className="mt-20 mb-32">
      <div className="lg:mx-40 xl:flex xl:mx-32">
        <div className="my-6 mx-3 xl:w-[60%]">
          <div className="main-image mb-5">
            <Image
              src="/spa-4.jpg"
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
              Discover a sanctuary of calm at Serenity Springs Spa, a place
              where natural beauty and holistic wellness merge to offer a truly
              transformative experience. Our spa is dedicated to providing a
              peaceful escape from the everyday hustle, featuring a wide array
              of treatments that promote relaxation, healing, and inner peace.
              Indulge in our signature massages, therapeutic body wraps, and
              invigorating skin care rituals, all delivered by our highly
              trained professionals. At Serenity Springs Spa, we are committed
              to nurturing your well-being, ensuring you leave feeling
              refreshed, revitalized, and serene.
            </p>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Opening hours:</p>
              <p>Mon - Sat 18:30 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpringSpaComponent;
