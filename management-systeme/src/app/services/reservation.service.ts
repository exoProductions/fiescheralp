import { Injectable } from '@angular/core';
import { DeleteReservationData } from '../models/delete-reservation-data.model';
import { ReservationData } from '../models/reservation-data';
import { Userdata } from '../models/userdata.model';
import { ApiService } from './api.service';
import { CalendarService } from './calendar.service';
import { GlobalVariablesService } from './global-variables.service';

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

  constructor(private calendarService:CalendarService,private apiService:ApiService,private globalVariableService:GlobalVariablesService) { }

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

  
  deleteReservation():void{
    this.reservationClicked=true;
      this.apiService.deleteReservations(this.getDeleteReservationData()).subscribe((worked:boolean) => {
        if(worked){
          this.reservationWorkedInd=1;
          this.calendarService.loadAlreadyBookedDays();
        }else{
          this.reservationWorkedInd=0;
        }
      });
  }

  getReservationData():ReservationData{
    let days:number[]=[];
    let months:number[]=[];
    let years:number[]=[];
    for(let reservedDayAndInfos of this.calendarService.daysAndInfosInRange){
      days.push(reservedDayAndInfos.date.getDate());
      months.push(reservedDayAndInfos.date.getMonth());
      years.push(reservedDayAndInfos.date.getFullYear());
      console.log(reservedDayAndInfos.date);
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

  
  getDeleteReservationData():DeleteReservationData{
    let days:number[]=[];
    let months:number[]=[];
    let years:number[]=[];
    for(let reservedDayAndInfos of this.calendarService.daysAndInfosInRange){
      days.push(reservedDayAndInfos.date.getDate());
      months.push(reservedDayAndInfos.date.getMonth());
      years.push(reservedDayAndInfos.date.getFullYear());
      console.log(reservedDayAndInfos.date);
    }
    
    return {
      days:days,
      months:months,
      years:years,
      nickname:this.globalVariableService.adminNickname,
      password:this.globalVariableService.adminPassword,
    }
  }

}
