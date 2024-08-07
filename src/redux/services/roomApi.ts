import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetRoomData, RoomData, RoomDataToCreate } from "@/interfaces/roomsInterface";

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
    getRooms: builder.query<GetRoomData[], void>({
      query: () => "rooms",
      extraOptions: {
        refetchOnMountOrArgChange: true,
      },
    }),
    getRoomById: builder.query<RoomDataToCreate, string>({
      query: (id) => `rooms/${id}`,
      extraOptions: {
        refetchOnMountOrArgChange: true,
      },
    }),
    updateRoom: builder.mutation<void, { id: string, roomData: FormData }>({
      query: ({ id, roomData }) => ({
        url: `rooms/${id}`,
        method: "PATCH",
        body: roomData,
      }),
    }),
    deleteRoom: builder.mutation<void, string>({
      query: (id) => ({
        url: `rooms/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for usage in function components
export const { useCreateRoomMutation, useGetRoomsQuery, useGetRoomByIdQuery, useUpdateRoomMutation, useDeleteRoomMutation, } = roomApi;
