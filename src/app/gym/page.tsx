import React from "react";
import MainNavbar from "@/components/main-app/MainNavBar";
import Footer from "@/components/main-app/Footer";
import HeroGym from "@/components/main-app/spa/gym/HeroGym";
import GymComponent from "@/components/main-app/spa/gym/GymComponent";

function Bistro() {
  return (
    <div>
      <MainNavbar />
      <HeroGym />
      <GymComponent/>
      <Footer />
    </div>
  );
}

export default Bistro;
