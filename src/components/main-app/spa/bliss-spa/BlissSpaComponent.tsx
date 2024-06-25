import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const BlissSpaComponent: React.FC = () => {
  return (
    <div className="mt-20 mb-32">
      <div className="lg:mx-40 xl:flex xl:mx-32">
        <div className="my-6 mx-3 xl:w-[60%]">
          <div className="main-image mb-5">
            <Image
              src="/spa-2.jpg"
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
              Experience ultimate relaxation and rejuvenation at Tranquil Bliss
              Spa, where serene surroundings and expert treatments come together
              to create a haven of peace. Nestled in a tranquil setting, our spa
              offers a range of personalized services designed to melt away
              stress and restore balance to your mind and body. From soothing
              massages and revitalizing facials to luxurious body treatments,
              every experience at Tranquil Bliss Spa is tailored to your
              individual needs. Let our skilled therapists guide you on a
              journey to complete serenity, where tranquility and bliss are at
              the heart of everything we do.
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

export default BlissSpaComponent;
