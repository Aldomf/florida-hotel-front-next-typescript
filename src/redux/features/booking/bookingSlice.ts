import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingDataSlice } from "@/interfaces/roomsInterface";

interface BookingState {
  bookingData: BookingDataSlice | null;
}

const initialState: BookingState = {
  bookingData: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingData: (state, action: PayloadAction<BookingDataSlice>) => {
      state.bookingData = action.payload;
    },
    clearBookingData: (state) => {
      state.bookingData = null;
    },
  },
});

export const { setBookingData, clearBookingData } = bookingSlice.actions;
export default bookingSlice.reducer;
