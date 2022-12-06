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

  reservationWorkedInd:number=0; //0=didnt work, 1=worked, 2=choose another date
  reservationClicked:boolean=false;

  constructor(private calendarService:CalendarService,private apiService:ApiService) { }

  getPrice():number{
    return this.calendarService.duration*this.pricePerDay+this.numberOfGuests*this.additionalPerPerson;
  }

  reservate():void{
    this.reservationClicked=true;
    if(!this.calendarService.showSelectOtherText){
      this.apiService.reserve(this.getReservationData()).subscribe((worked:boolean) => {
        
        if(worked){
          this.reservationWorkedInd=1;
          this.calendarService.loadAlreadyBookedDays();
        }else{
          this.reservationWorkedInd=0;
        }
      });
    }else{
      this.reservationWorkedInd=2;
    }
  }

  getReservationData():ReservationData{
    let days:number[]=[];
    let months:number[]=[];
    let years:number[]=[];
    for(let reservedDay of this.calendarService.daysInRange){
      days.push(reservedDay.getDate());
      months.push(reservedDay.getMonth());
      years.push(reservedDay.getFullYear());
      console.log(reservedDay);
    }
    
    return {
      days:days,
      months:months,
      years:years,
      firstname:this.userdata.firstname,
      lastname:this.userdata.lastname,
      eMail:this.userdata.eMail,
      acceptedAGB:this.userdata.acceptedAGB,
    }
  }

}
