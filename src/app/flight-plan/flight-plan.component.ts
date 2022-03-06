import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flight } from './flight';
import { FlightBookService } from '../service/thx.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight-plan.component.html',
  styleUrls: ['./flight-plan.component.css'],
})
export class FlightComponent implements OnInit {
  flight : Flight[] = [];
  flightForm: FormGroup;
  minDate: Date;
  isshow = false;
  constructor(
    private fb: FormBuilder,
    private flightService: FlightBookService

    ) {
    this.flightForm = this.fb.group({
      fullName: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      type: ['', Validators.required],
      adults: ['', [Validators.required, Validators.pattern('^[0-9]{0,1}')]],
      departure: ['', Validators.required],
      children: ['', [Validators.required, Validators.pattern('^[0-9]{0,1}')]],
      infants: ['', [Validators.required, Validators.pattern('^[0-9]{0,1}')]],
      arrival: ['', Validators.required],
    });
    this.minDate = new Date();
    this.getflight();
  }

  ngOnInit(): void {}
  getflight(){
    this.flight = this.flightService.getFlight();
  }

  onSubmit(f: Flight): void {
    const departureYear = f.departure.getFullYear() + 543;
    const departureMonth = f.departure.getMonth();
    const departureDay = f.departure.getDate();
    const arrivalYear = f.arrival.getFullYear() + 543;
    const arrivalMonth = f.arrival.getMonth();
    const arrivalDay = f.arrival.getDate();
    f.departure = new Date(
      departureMonth + 1 + '/' + departureDay + '/' + departureYear
    );
    f.arrival = new Date(
      arrivalMonth + 1 + '/' + arrivalDay + '/' + arrivalYear
    );
    this.flightService.addFlight(f);
    this.flightForm.reset();
  }



  }

