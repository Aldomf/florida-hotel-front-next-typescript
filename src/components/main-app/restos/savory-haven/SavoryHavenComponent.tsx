import Image from "next/image";
import React from "react";

const SavoryHavenComponet: React.FC = () => {
  function capitalizeOnlyFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <div className="mt-[380px] ss:mt-[480px] lg:mt-[450px]">
      <div className="flex flex-col lg:flex-row mx-2 mb-10 md:mx-32 lg:mx-20 lg:space-x-16 xl:mx-40">
        <div className="text-center text-3xl mb-6 lg:w-1/2">
          5-Diamond Culinary Experience in Florida Hotel
        </div>
        <div className="text-center mb-6 lg:w-1/2">
          <strong>Florida Hotel</strong> is a{" "}
          <strong>5-Diamond elegant dining venue</strong> that is often the talk
          of the town, with its talented chefs who have created a specialty menu
          that features classic dishes in exceptional presentations. <br />{" "}
          <br /> From the moment you step into the restaurant, you are greeted
          with a classic ambiance that is both sophisticated and welcoming. The
          warm lighting and soft music set the stage for a memorable dining
          experience. <br /> <br /> The menu at Fantino is carefully crafted to
          showcase the flavors of the Mediterranean, with each dish expertly
          prepared using only the finest ingredients. For guests who want to
          indulge in a more private and exclusive experience, the restaurant
          features the Petit Fantino diner. <br /> <br />
          From the friendly and knowledgeable wait staff to the skilled chefs
          who prepare each dish with precision and care, every aspect of your
          dining experience is expertly crafted to ensure your complete
          satisfaction. <br /> <br /> Pamper your tastebuds with the flavors of
          the Mediterranean at Fantino Cancún, which offers a mouthwatering menu
          featuring a variety of dishes to satisfy all tastes. Our menu includes
          succulent filet mignon, the freshest catch of the day, and refreshing
          salads that will transport you straight to the sunny shores of the
          Mediterranean. <br /> <br /> Fantino truly lives up to its reputation
          as one of the best restaurants in Cancún and welcomes both local
          people and hotel guests.
        </div>
      </div>
      <div className="flex flex-col mx-4 md:mx-32 mb-20 lg:flex-row lg:mx-20 lg:space-x-16 xl:mx-40">
        <div className="relative w-full h-64 overflow-hidden lg:w-1/2 lg:h-96">
          <div className="relative w-full h-full">
            <Image
              src="/rest-4.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className={`absolute inset-0 transition-opacity duration-300 ease-in-out`}
            />
          </div>
        </div>
        <div className="mt-4 text-center lg:w-1/2 lg:text-left lg:pl-8">
          <div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Style</p>
              <p>Fine dining</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Cuisine</p>
              <p>Local</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Dress code</p>
              <p>Smart Casual</p>
            </div>
            <div className="border-b border-gray-200 flex justify-between py-4">
              <p>Dinner</p>
              <p>Mon - Sat 18:30 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavoryHavenComponet;
