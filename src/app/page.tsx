"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement, increment } from "@/redux/features/room/roomSlice";
import MainNavbar from "@/components/main-app/MainNavBar";
import Hero from "@/components/main-app/homepage/Hero";
import RoomSection from "@/components/main-app/homepage/RoomSection";
import InfoSection from "@/components/main-app/homepage/InfoSection";
import RestoAndBars from "@/components/main-app/homepage/RestoAndBars";
import Spa from "@/components/main-app/homepage/Spa";
import Gallery from "@/components/main-app/homepage/Gallery";
import Footer from "@/components/main-app/Footer";
import { Toaster } from "react-hot-toast";

export default function Counter() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <MainNavbar />
      <Hero />
      <InfoSection />
      <RoomSection />
      <RestoAndBars />
      <Spa />
      <Gallery id="gallery-section"/>
      <Footer/>
      <Toaster />
      {/* <div className='h-[1000px]'>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div> */}
      {/* <div>
        {data?.map(user => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
