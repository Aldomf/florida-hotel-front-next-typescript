import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RoomData } from "@/interfaces/roomsInterface";

export const roomApi = createApi({
  reducerPath: "roomApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/` }),
  endpoints: (builder) => ({
    createRoom: builder.mutation<RoomData, RoomData>({
      query: (roomData) => ({
        url: "rooms",
        method: "POST",
        body: roomData,
      }),
    }),
  }),
});

// Export hooks for usage in function components
export const { useCreateRoomMutation } = roomApi;
