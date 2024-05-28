"use client"
import React, { useEffect } from "react";
import MainNavbar from "@/components/main-app/MainNavBar";
import ManyRooms from "@/components/main-app/rooms/ManyRooms";
import { useGetRoomsQuery } from "@/redux/services/roomApi";

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
      <h1 className="font-semibold text-3xl lg:text-5xl text-center my-8">Rooms</h1>
      <ManyRooms rooms={rooms || []}
        error={error}
        isLoading={isLoading}/>
    </div>
  );
}

export default Rooms;
