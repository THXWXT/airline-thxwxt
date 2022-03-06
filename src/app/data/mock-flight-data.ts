import { Flight } from "../flight-plan/flight";

export class mockFlightData {
  public static mfData: Flight[] = [
    {
      fullName: '',
      from: '',
      to: '',
      type: '',
      adults: 0,
      departure: new Date(''),
      children: 0,
      infants: 0,
      arrival: new Date(''),
    },
  ];
}
