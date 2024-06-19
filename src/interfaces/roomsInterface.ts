import { RoomType, AvailabilityStatus } from "@/enums/roomEnums";

export interface RoomData {
  roomNumber: string;
  roomType: RoomType;
  description?: string;
  pricePerNight: number;
  capacity: number;
  roomSize: number;
  availabilityStatus: AvailabilityStatus;
  images: FileList | null;
}

export interface GetRoomData {
  id: number;
  roomNumber: string;
  roomType: RoomType;
  description?: string;
  pricePerNight: number;
  capacity: number;
  roomSize: number;
  availabilityStatus: AvailabilityStatus;
  imageUrls: string[];
}

export interface GetRoomDataById {
  id: number;
  roomNumber: string;
  roomType: RoomType;
  description?: string;
  pricePerNight: number;
  capacity: number;
  roomSize: number;
  availabilityStatus: AvailabilityStatus;
  imageUrls: string[];
}

export interface RoomDataToCreate {
  id: number
  roomNumber: string;
  roomType: RoomType;
  description?: string;
  pricePerNight: number;
  capacity: number;
  roomSize: number;
  availabilityStatus: AvailabilityStatus;
  imageUrls: string[];
  images: FileList | null;
}

export interface RoomDataToUpdate {
  roomNumber: string;
  roomType: RoomType;
  description?: string;
  pricePerNight: number;
  capacity: number;
  roomSize: number;
  availabilityStatus: AvailabilityStatus;
  imageUrls: string[];
  images: FileList | null;
}

export interface BookingData {
  id?: number;
  name: string;
  email: string;
  startDate: string;
  endDate: string;
  price: number;
  nights: number;
  roomId: number;
}
