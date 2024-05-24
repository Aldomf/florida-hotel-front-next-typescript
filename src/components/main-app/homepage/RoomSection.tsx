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

  return (
    <div>
        <RoomCard rooms={rooms || []} error={error} isLoading={isLoading} />
    </div>
  )
}

export default RoomSection