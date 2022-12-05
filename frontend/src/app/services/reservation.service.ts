import { Injectable } from '@angular/core';
import { ReservationData } from '../models/reservation-data.model';
import { Userdata } from '../models/userdata.model';
import { ApiService } from './api.service';
import { CalendarService } from './calendar.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  pricePerDay:number=135;
  additionalPerPerson:number=10;
  numberOfGuests:number=1;
  maxGuests:number=5;

  userdata:Userdata={
    firstname:"Dominic",
    lastname:"Gut",
    eMail:"dominic.gut@gmx.ch",
    acceptedAGB:true,
  }

  constructor(private calendarService:CalendarService,private apiService:ApiService) { }

  getPrice():number{
    return this.calendarService.duration*this.pricePerDay+this.numberOfGuests*this.additionalPerPerson;
  }

  reservate():void{
    this.apiService.reserve(this.getReservationData()).subscribe((worked:boolean) => {
      console.log(worked);
    });
  }

  getReservationData():ReservationData{
    return {
      days:[1,3,5],
      months:[2,4,6],
      years:[3,5,7],
      firstname:this.userdata.firstname,
      lastname:this.userdata.lastname,
      eMail:this.userdata.eMail,
      acceptedAGB:this.userdata.acceptedAGB,
    }
  }

}
