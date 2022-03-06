import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlightComponent } from './flight-plan/flight-plan.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,MatDatepickerModule,
    MatNativeDateModule,MatFormFieldModule,MatInputModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'th-TH' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
