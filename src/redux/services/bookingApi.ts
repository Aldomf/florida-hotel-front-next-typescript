import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BookingData} from "@/interfaces/roomsInterface";

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/` }),
  endpoints: (builder) => ({
    createBooking: builder.mutation<BookingData, BookingData>({
      query: (bookingData) => ({
        url: "booking",
        method: "POST",
        body: bookingData,
      }),
    }),
  }),
});

// Export hooks for usage in function components
export const { useCreateBookingMutation, } = bookingApi;
