"use client"
import React, { useEffect } from "react";
import MainNavbar from "@/components/main-app/MainNavBar";
import ManyRooms from "@/components/main-app/rooms/ManyRooms";
import { useGetRoomsQuery } from "@/redux/services/roomApi";
import HeroRooms from "@/components/main-app/rooms/HeroRooms";

function Rooms() {
  // Fetch all rooms using the useGetRoomsQuery hook
  const { data: rooms, error, isLoading, refetch } = useGetRoomsQuery();

  // Use useEffect to refetch data on component mount
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div>
      <MainNavbar />
      <HeroRooms/>
      <ManyRooms rooms={rooms || []}
        error={error}
        isLoading={isLoading}/>
    </div>
  );
}

export default Rooms;
