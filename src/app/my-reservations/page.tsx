import React from "react";
import MainNavbar from "@/components/main-app/MainNavBar";
import Footer from "@/components/main-app/Footer";
import MyReservations from "@/components/main-app/reservations/MyReservations";
import HeroMyReservations from "@/components/main-app/reservations/HeroMyReservations";

function MyReservationsPage() {
  return (
    <div>
      <MainNavbar />
      <HeroMyReservations />
      <MyReservations />
      <Footer />
    </div>
  );
}

export default MyReservationsPage;
