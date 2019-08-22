import { Availability } from "./availability.model";
export class Hotel {
  id: number;
  name: string;
  price: number;
  city: string;
  availability: Array<Availability>;
}
