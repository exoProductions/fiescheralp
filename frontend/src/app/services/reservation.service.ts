import { Injectable } from '@angular/core';
import { ReservationData } from '../models/reservation-data.model';
import { Userdata } from '../models/userdata.model';
import { ApiService } from './api.service';
import { CalendarService } from './calendar.service';
import { GlobalVariablesService } from './global-variables.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  pricePerDay: number = 135;
  additionalPerPerson: number = 10;
  numberOfGuests: number = 1;
  maxGuests: number = 5;

  userdata: Userdata = {
    firstname: "Dominic",
    lastname: "Gut",
    eMail: "dominic.gut@gmx.ch",
    acceptedAGB: false,
  }

  reservationWorkedInd: number = 0; //0=didnt work, 1=worked, 2=choose another date, 3=nicht alles ausgefüllt
  reservationClicked: boolean = false;

  constructor(private calendarService: CalendarService, private apiService: ApiService, private globalVariableService: GlobalVariablesService) { }

  getPrice(): number {
    return this.calendarService.duration * this.pricePerDay + this.numberOfGuests * this.additionalPerPerson;
  }

  reservate(): void {
    this.reservationClicked = true;
    if (this.userdata.firstname.length>0 && this.userdata.lastname.length>0 && this.userdata.eMail.length>5) {
      if (!this.calendarService.showSelectOtherText) {
        this.apiService.reserve(this.getReservationData()).subscribe((worked: boolean) => {

          if (worked) {
            this.reservationWorkedInd = 1;
            this.calendarService.loadAlreadyBookedDays();
          } else {
            this.reservationWorkedInd = 0;
          }
        });
      } else {
        this.reservationWorkedInd = 2;
      }
    }else{
      this.reservationWorkedInd = 3;
    }
  }

  getReservationData(): ReservationData {
    let days: number[] = [];
    let months: number[] = [];
    let years: number[] = [];
    for (let reservedDay of this.calendarService.daysInRange) {
      days.push(reservedDay.getDate());
      months.push(reservedDay.getMonth());
      years.push(reservedDay.getFullYear());
      console.log(reservedDay);
    }

    return {
      days: days,
      months: months,
      years: years,
      firstname: this.userdata.firstname,
      lastname: this.userdata.lastname,
      eMail: this.userdata.eMail,
      adminEMail: this.globalVariableService.adminEmail,
      acceptedAGB: this.userdata.acceptedAGB,
    }
  }

}
