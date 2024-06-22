"use client";
import React, { useState, useEffect, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setBookingData } from '@/redux/features/booking/bookingSlice';
import { useFindBookingQuery } from "@/redux/services/bookingApi";
import { useRouter } from "next/navigation";

function FormReservation() {
  const [bookingNumber, setBookingNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const router = useRouter();

  const { data, error: fetchError, isLoading } = useFindBookingQuery(bookingNumber, {
    skip: !submitted, // Only fetch when form is submitted
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Update booking data if API call is successful
  useEffect(() => {
    if (data) {
      dispatch(setBookingData(data));
      setError('');
      router.push("/my-reservations");
    } else if (fetchError) {
      setError('Booking not found');
    }
  }, [data, fetchError]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-2">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Hotel Room Reservation</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="bookingNumber" className="block text-gray-700 text-sm font-bold mb-2">Booking Number:</label>
              <input 
                type="text" 
                id="bookingNumber" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={bookingNumber} 
                onChange={(e) => setBookingNumber(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="bg-[#C4B4A7] hover:bg-[#D8C8BB] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </form>
        ) : (
          <>
            {isLoading ? (
              <p className="text-center text-gray-700">Loading...</p>
            ) : (
              <>
                <p className="text-center text-gray-700">Your booking number is: <span className="font-bold">{bookingNumber}</span></p>
                {error && <p className="text-center text-red-500">{error}</p>}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default FormReservation;
