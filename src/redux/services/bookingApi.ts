import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BookingData } from "@/interfaces/roomsInterface";

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/` }),
  endpoints: (builder) => ({
    findBooking: builder.query<BookingData, string>({
      query: (bookingNumber) => ({
        url: "booking/find",
        method: "POST",
        body: { bookingNumber },
      }),
    }),
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
export const { useFindBookingQuery, useCreateBookingMutation } = bookingApi;
