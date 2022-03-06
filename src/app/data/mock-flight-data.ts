import { Flight } from "../flight-plan/flight";

export class mockFlightData {
  public static mfData: Flight[] = [
    {
      fullName: 'Thanawat Phumphothong',
      from: 'Korea',
      to: 'Japan',
      type: 'One way',
      adults: 1,
      departure: new Date('2565-03-01'),
      children: 1,
      infants: 1,
      arrival: new Date('2565-03-07'),
    },
  ];
}
