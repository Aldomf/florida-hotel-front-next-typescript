"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  useUpdateRoomMutation,
  useGetRoomByIdQuery,
  useDeleteRoomMutation,
} from "@/redux/services/roomApi";
import { RoomDataToUpdate } from "@/interfaces/roomsInterface";
import { AvailabilityStatus, RoomType } from "@/enums/roomEnums";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { Toaster, toast } from "react-hot-toast";

const UpdateRoomForm: React.FC = () => {
  const params = useParams<{ id: string }>();
  const roomId = params.id;

  const router = useRouter();

  const {
    data: initialRoomData,
    error: fetchError,
    isLoading: isFetching,
  } = useGetRoomByIdQuery(roomId);

  const [roomData, setRoomData] = useState<RoomDataToUpdate>({
    roomNumber: "",
    roomType: RoomType.SINGLE,
    pricePerNight: 0,
    capacity: 0,
    roomSize: 0,
    availabilityStatus: AvailabilityStatus.AVAILABLE,
    description: "",
    imageUrls: [],
    images: null,
  });

  const [imageIndicesToDelete, setImageIndicesToDelete] = useState<number[]>(
    []
  );

  const [
    updateRoom,
    {
      isLoading: isUpdating,
      isError: updateError,
      error: updateErrorDetails,
      data: updatedData,
    },
  ] = useUpdateRoomMutation();

  const [deleteRoom, { isLoading: isDeleting, isError: deleteError }] =
    useDeleteRoomMutation();

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (initialRoomData) {
      setRoomData({
        ...initialRoomData,
        imageUrls: initialRoomData.imageUrls || [],
      });
    }
  }, [initialRoomData]);

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
      const newImageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setRoomData({
        ...roomData,
        images: files,
        imageUrls: newImageUrls, // Set imageUrls to the new array directly
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImageUrls = [...roomData.imageUrls];
    updatedImageUrls.splice(index, 1); // Remove image from state
    setRoomData({ ...roomData, imageUrls: updatedImageUrls });
    setImageIndicesToDelete((prevIndices) => [...prevIndices, index]); // Track the index of the image to delete
  };

  const handleDeleteRoom = async () => {
    try {
      await deleteRoom(roomId).unwrap();
      console.log("Room deleted successfully");
      // Redirect or handle success
      toast.success("Room deleted successfully!", {
        duration: 3000,
      });
      router.push("/admin/room/rooms");
      router.refresh();
    } catch (err) {
      console.error("Error deleting room:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      const excludedFields = ["id", "imageUrls", "createdAt", "updatedAt"];

      Object.entries(roomData).forEach(([key, value]) => {
        if (excludedFields.includes(key)) return;
        if (value instanceof FileList) {
          Array.from(value).forEach((file) => {
            formData.append("images", file);
          });
        } else {
          formData.append(key, value as string);
        }
      });

      if (imageIndicesToDelete.length > 0) {
        // Append each index as a separate form data entry
        imageIndicesToDelete.forEach((index) => {
          formData.append("imageIndicesToDelete[]", index.toString());
        });
      }

      await updateRoom({ id: roomId, roomData: formData }).unwrap();
      console.log("Room updated successfully");

      // Update imageUrls state to remove deleted images
      const updatedImageUrls = roomData.imageUrls.filter(
        (_, index) => !imageIndicesToDelete.includes(index)
      );
      setRoomData((prevState) => ({
        ...prevState,
        imageUrls: updatedImageUrls,
      }));

      // window.location.reload(); // Refreshing the page might not be the best approach
      toast.success("Room updated successfully!", {
        duration: 3000,
      });
      router.push("/admin/room/rooms");
      router.refresh();
    } catch (err) {
      console.error("Error updating room:", err);
    }
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (fetchError) {
    const errorMessage =
      "status" in fetchError
        ? `Error: ${fetchError.status} - ${JSON.stringify(fetchError.data)}`
        : fetchError.message;

    return <div>Error fetching room data: {errorMessage}</div>;
  }

  return (
    <div className="mx-4 px-3 md:px-6 md:max-w-md md:mx-auto p-6 bg-gray-200 rounded-md shadow-md w-80 lg:w-96">
      <form onSubmit={handleSubmit} ref={formRef}>
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
            required
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
            required
          >
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
            required
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
            required
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
            required
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
            required
          >
            <option value="AVAILABLE">Available</option>
            <option value="OCCUPIED">Occupied</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Current Images
          </label>
          <div className="flex flex-wrap">
            {roomData.imageUrls.map((url, index) => (
              <div key={index} className="relative w-24 h-24 m-1">
                <Image
                  src={url}
                  alt={`Room image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded"
                >
                  <RxCross2 />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700"
          >
            Add Images
          </label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {isUpdating ? "Updating..." : "Update Room"}
          </button>
          <button
            type="button"
            onClick={handleDeleteRoom}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            {isDeleting ? "Deleting..." : "Delete Room"}
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default UpdateRoomForm;
