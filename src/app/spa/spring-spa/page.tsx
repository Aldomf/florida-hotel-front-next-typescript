import React from "react";
import MainNavbar from "@/components/main-app/MainNavBar";
import Footer from "@/components/main-app/Footer";
import HeroSpringSpa from "@/components/main-app/spa/spring-spa/HeroSpringSpa";
import SpringSpaComponent from "@/components/main-app/spa/spring-spa/SpringSpaComponent";

function Bistro() {
  return (
    <div>
      <MainNavbar />
      <HeroSpringSpa />
      <SpringSpaComponent />
      <Footer />
    </div>
  );
}

export default Bistro;
