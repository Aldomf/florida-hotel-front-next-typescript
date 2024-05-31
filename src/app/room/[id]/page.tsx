"use client"
import React, { useEffect } from "react";
import MainNavbar from '@/components/main-app/MainNavBar'
import OneRoom from "@/components/main-app/room/OneRoom";
import HeroOneRoom from "@/components/main-app/room/HeroOneRooms";
import { useParams } from "next/navigation";
import { useGetRoomByIdQuery } from "@/redux/services/roomApi";

function Room() {
  const params = useParams<{ id: string }>();
  const roomId = params.id;

  const {
    data: initialRoomData,
    error: fetchError,
    isLoading: isFetching,
    refetch,
  } = useGetRoomByIdQuery(roomId);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div>
      <MainNavbar />
      <HeroOneRoom initialRoomData={initialRoomData}
        isFetching={isFetching}
        fetchError={fetchError}/>
      <OneRoom 
        initialRoomData={initialRoomData}
        isFetching={isFetching}
        fetchError={fetchError}
      />
    </div>
  );
}

export default Room;
