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
  imageUrls: []
}

export interface GetRoomDataById {
  roomNumber: string;
  roomType: RoomType;
  description?: string;
  pricePerNight: number;
  capacity: number;
  roomSize: number;
  availabilityStatus: AvailabilityStatus;
  imageUrls: []
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
