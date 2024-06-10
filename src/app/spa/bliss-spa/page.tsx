import React from "react";
import MainNavbar from "@/components/main-app/MainNavBar";
import Footer from "@/components/main-app/Footer";
import HeroBlissSpa from "@/components/main-app/spa/bliss-spa/HeroBlissSpa";
import BlissSpaComponent from "@/components/main-app/spa/bliss-spa/BlissSpaComponent";

function Bistro() {
  return (
    <div>
      <MainNavbar />
      <HeroBlissSpa />
      <BlissSpaComponent/>
      <Footer />
    </div>
  );
}

export default Bistro;
