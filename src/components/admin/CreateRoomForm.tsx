"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useCreateRoomMutation } from "@/redux/services/roomApi";
import { RoomData } from "@/interfaces/roomsInterface";
import { AvailabilityStatus, RoomType } from "@/enums/roomEnums";

const CreateRoomForm: React.FC = () => {
  const [roomData, setRoomData] = useState<RoomData>({
    roomNumber: '',
    roomType: RoomType.SINGLE, // provide a default value for RoomType
    pricePerNight: 0, // provide a default value for pricePerNight
    capacity: 0, // provide a default value for capacity
    roomSize: 0, // provide a default value for roomSize
    availabilityStatus: AvailabilityStatus.AVAILABLE, // provide a default value for availabilityStatus
    description: '', // initialize as an empty string since it's optional
    images: null, // initialize as null since it's optional
  });
  const [createRoom, { isLoading, isError, error }] = useCreateRoomMutation();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setRoomData({
      ...roomData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setRoomData({
        ...roomData,
        images: files,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(roomData).forEach(([key, value]) => {
        if (value instanceof FileList) {
          // Append each file to the formData with the key 'images'
          Array.from(value).forEach((file, index) => {
            formData.append(`images`, file);
          });
        } else {
          formData.append(key, value as string);
        }
      });

      //!!!! to fix later
      // @ts-ignore
      const createdRoom = await createRoom(formData).unwrap();
      console.log("Room created:", createdRoom);
      // Handle success
    } catch (err) {
      console.error("Error creating room:", err);
      // Handle error
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-200 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create Room</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="roomNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Room Number
          </label>
          <input
            type="text"
            id="roomNumber"
            name="roomNumber"
            value={roomData.roomNumber}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="roomType"
            className="block text-sm font-medium text-gray-700"
          >
            Room Type
          </label>
          <select
            id="roomType"
            name="roomType"
            value={roomData.roomType}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Room Type</option>
            <option value="SINGLE">Single</option>
            <option value="DOUBLE">Double</option>
            <option value="SUITE">Suite</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={roomData.description}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="pricePerNight"
            className="block text-sm font-medium text-gray-700"
          >
            Price Per Night
          </label>
          <input
            type="number"
            id="pricePerNight"
            name="pricePerNight"
            value={roomData.pricePerNight}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="capacity"
            className="block text-sm font-medium text-gray-700"
          >
            Capacity
          </label>
          <input
            type="number"
            id="capacity"
            name="capacity"
            value={roomData.capacity}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="roomSize"
            className="block text-sm font-medium text-gray-700"
          >
            Room Size (sq. ft.)
          </label>
          <input
            type="number"
            id="roomSize"
            name="roomSize"
            value={roomData.roomSize}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="availabilityStatus"
            className="block text-sm font-medium text-gray-700"
          >
            Availability Status
          </label>
          <select
            id="availabilityStatus"
            name="availabilityStatus"
            value={roomData.availabilityStatus}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Availability Status</option>
            <option value="AVAILABLE">Available</option>
            <option value="OCCUPIED">Occupied</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Images
          </label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleImageChange}
            multiple
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {isLoading ? "Creating..." : "Create Room"}
          </button>
          {isError && (
            <div>
              Error: {typeof error === "string" ? error : JSON.stringify(error)}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateRoomForm;
