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
