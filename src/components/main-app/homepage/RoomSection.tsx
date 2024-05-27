import React, { useEffect } from 'react'
import RoomCard from './RoomCardHomepage'
import { useGetRoomsQuery } from '@/redux/services/roomApi';

function RoomSection() {
    // Fetch all rooms using the useGetRoomsQuery hook
  const { data: rooms, error, isLoading, refetch } = useGetRoomsQuery();

  // Use useEffect to refetch data on component mount
  useEffect(() => {
    refetch();
  }, [refetch]);

  // Limit the rooms to the first three
  const limitedRooms = rooms ? rooms.slice(3, 6) : [];

  return (
    <div>
        <RoomCard rooms={limitedRooms || []} error={error} isLoading={isLoading} />
    </div>
  )
}

export default RoomSection