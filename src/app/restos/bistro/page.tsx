import React from "react";
import MainNavbar from "@/components/main-app/MainNavBar";
import Footer from "@/components/main-app/Footer";
import HeroBistro from "@/components/main-app/restos/bistro/HeroBistro";
import BistroComponet from "@/components/main-app/restos/bistro/BistroComponent";

function Bistro() {
  return (
    <div>
      <MainNavbar />
      <HeroBistro />
      <BistroComponet/>
      <Footer />
    </div>
  );
}

export default Bistro;
