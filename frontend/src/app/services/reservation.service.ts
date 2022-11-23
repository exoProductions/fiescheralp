import { Injectable } from '@angular/core';
import { CalendarService } from './calendar.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  pricePerDay:number=135;
  additionalPerPerson:number=10;
  numberOfGuests:number=1;
  maxGuests:number=5;

  userdata:any={
    firstname:"",
    lastname:"",
    eMail:"",
    acceptedAGB:false,
  }

  constructor(private calendarService:CalendarService) { }

  getPrice():number{
    return this.calendarService.duration*this.pricePerDay+this.numberOfGuests*this.additionalPerPerson;
  }
}
