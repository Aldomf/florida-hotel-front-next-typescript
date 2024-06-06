"use client";
import React, { useEffect } from "react";
import MainNavbar from "@/components/main-app/MainNavBar";
import HeroRestos from "@/components/main-app/restos/HeroRestos";
import ManyRestos from "@/components/main-app/restos/ManyRestos";
import Footer from "@/components/main-app/Footer";

function Restos() {
  return (
    <div>
      <MainNavbar />
      <HeroRestos />
      <ManyRestos />
      <Footer />
    </div>
  );
}

export default Restos;
