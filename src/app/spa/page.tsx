import React from "react";
import MainNavbar from "@/components/main-app/MainNavBar";
import Footer from "@/components/main-app/Footer";
import HeroSpa from "@/components/main-app/spa/HeroSpa";
import ManySpa from "@/components/main-app/spa/ManySpa";

function Restos() {
  return (
    <div>
      <MainNavbar />
      <HeroSpa />
      <ManySpa />
      <Footer />
    </div>
  );
}

export default Restos;
