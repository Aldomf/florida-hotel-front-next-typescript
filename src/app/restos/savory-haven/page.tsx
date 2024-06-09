import React from "react";
import MainNavbar from "@/components/main-app/MainNavBar";
import Footer from "@/components/main-app/Footer";
import HeroSavoryHaven from "@/components/main-app/restos/savory-haven/HeroSavoryHaven";
import SavoryHavenComponet from "@/components/main-app/restos/savory-haven/SavoryHavenComponent";

function SavoryHaven() {
  return (
    <div>
      <MainNavbar />
      <HeroSavoryHaven />
      <SavoryHavenComponet />
      <Footer />
    </div>
  );
}

export default SavoryHaven;
