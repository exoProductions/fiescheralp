import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  today:Date=new Date();
  allMonthsOfYear:Date[][]=[];
  currentYear:number=this.today.getFullYear();
  currentMonth:number=0;
  constructor() { 
    this.generateNewYear(this.currentYear);
    console.log(this.allMonthsOfYear);
  }

  generateNewYear(year:number):void{
    for(let i=0;i<12;i++){
      this.allMonthsOfYear.push(this.getDaysInMonthUTC(i,year));
    }
  }

   getDaysInMonth(month:number, year:number):Date[] {
    let date:Date = new Date(year, month, 1);
     let days:Date[] = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

 getDaysInMonthUTC(month:number, year:number):Date[] {
    var date:Date = new Date(Date.UTC(year, month, 1));
    let days:Date[] = [];
    while (date.getUTCMonth() === month) {
      days.push(new Date(date));
      date.setUTCDate(date.getUTCDate() + 1);
    }
    return days;
  }
  skipToPreviousMonth():void{
    this.currentMonth--;
    if(this.currentMonth<0){
      this.currentMonth=11;
      this.currentYear--;
      this.generateNewYear(this.currentYear);
    }
  }
  skipToNextMonth():void{
    this.currentMonth++;
    if(this.currentMonth>=12){
      this.currentMonth=0;
      this.currentYear++;
      this.generateNewYear(this.currentYear);
    }
  }
}
