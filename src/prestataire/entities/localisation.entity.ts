import { LatLng } from "@prisma/client";

export class LatLngEntity implements LatLng {
  id: string;
  latitude: number;
  longitude: number
}
