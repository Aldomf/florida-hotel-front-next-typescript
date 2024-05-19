"use client";
import Navbar from "@/components/admin/NavBar";
import RoomCard from "@/components/admin/RoomCard";
import Link from "next/link";
import React, { useEffect } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { Toaster, toast } from "react-hot-toast";
import { useGetRoomsQuery } from "@/redux/services/roomApi";

function Rooms() {
  // Fetch all rooms using the useGetRoomsQuery hook
  const { data: rooms, error, isLoading, refetch } = useGetRoomsQuery();

  // Use useEffect to refetch data on component mount
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="bg-gray-700">
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-col items-center my-5 space-y-2">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
          Rooms
        </h2>
        <Link
          href="/admin/room/create"
          className="flex items-center justify-center text-xl border-white border p-2 text-white bg-black hover:bg-gray-800"
        >
          <IoCreateOutline className="w-8 h-8 text-white" />
          Create Room
        </Link>
      </div>
      <div>
        <RoomCard rooms={rooms || []} error={error} isLoading={isLoading} />
      </div>
      <Toaster />
    </div>
  );
}

export default Rooms;
