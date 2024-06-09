import React from "react";
import MainNavbar from "@/components/main-app/MainNavBar";
import Footer from "@/components/main-app/Footer";
import HeroGoldenFork from "@/components/main-app/restos/golden-fork/HeroGoldenFork";
import GoldenForkComponet from "@/components/main-app/restos/golden-fork/GoldenForkComponent";

function GoldenFork() {
  return (
    <div>
      <MainNavbar />
      <HeroGoldenFork />
      <GoldenForkComponet/>
      <Footer />
    </div>
  );
}

export default GoldenFork;
