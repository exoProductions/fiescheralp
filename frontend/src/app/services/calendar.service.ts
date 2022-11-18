import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  today: Date = new Date();
  allMonthsOfYear: Date[][] = [];
  allMonthsOfPreviousYear: Date[][] = [];
  allMonthsOfNextYear: Date[][] = [];
  currentYear: number = this.today.getFullYear();
  currentMonth: number =this.today.getMonth()

  selectedStartDate: Date = this.today;
  duration:number=1;

  dayNames:string[]=["Mo","Di","Mi","Do","Fr","Sa","So"];

  constructor() {
    this.generateNewYear(this.currentYear);
    console.log(this.allMonthsOfYear);
  }

  generateNewYear(year: number): void {
    this.allMonthsOfYear=[];
    this.allMonthsOfNextYear=[];
    this.allMonthsOfPreviousYear=[];
    for (let i = 0; i < 12; i++) {
      this.allMonthsOfYear.push(this.getDaysInMonthUTC(i, year));
      this.allMonthsOfPreviousYear.push(this.getDaysInMonthUTC(i, year-1));
      this.allMonthsOfNextYear.push(this.getDaysInMonthUTC(i, year+1));
    }
  }
/*
  getDaysInMonth(month: number, year: number): Date[] {
    let date: Date = new Date(year, month, 1);
    let days: Date[] = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }
*/
  getDaysInMonthUTC(month: number, year: number): Date[] {
    var date: Date = new Date(Date.UTC(year, month, 1));
    let days: Date[] = [];
    while (date.getUTCMonth() === month) {
      days.push(new Date(date));
      date.setUTCDate(date.getUTCDate() + 1);
    }
    return days;
  }
  skipToPreviousMonth(): void {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
      this.generateNewYear(this.currentYear);
    }
  }
  skipToNextMonth(): void {
    this.currentMonth++;
    if (this.currentMonth >= 12) {
      this.currentMonth = 0;
      this.currentYear++;
      this.generateNewYear(this.currentYear);
    }
  }
  getDaysOfCurrentMonth():Date[]{
    return this.allMonthsOfYear[this.currentMonth];
  }
  getDayOfFirstDayInMonth():number{
    let day=this.getDaysOfCurrentMonth()[0].getDay();
    if(day==0){
      console.log(day);
      return 6;
    }else{
      return day-1;
    }
  }
  getDayOfLastDayInMonth():number{
    let day=this.getDaysOfCurrentMonth()[this.getDaysOfCurrentMonth().length-1].getDay();
    if(day==0){
      console.log(day);
      return 6;
    }else{
      return day-1;
    }
  }
  getPrevMonthDays():Date[]{
    let prevMonthDays:Date[]=[];
    for(let i=this.getDayOfFirstDayInMonth()-1;i>=0;i--){ //todo ral for
      if(this.currentMonth==0){
        let prevMonth=this.allMonthsOfPreviousYear[11];
        prevMonthDays.push(prevMonth[prevMonth.length-1-i]);
      }else{
        let prevMonth=this.allMonthsOfYear[this.currentMonth-1];
        prevMonthDays.push(prevMonth[prevMonth.length-1-i]);
      }
    }
    return prevMonthDays;
  }

  getNextMonthDays():Date[]{
    let nextMonthDays:Date[]=[];
    
    for(let i=0;i<6-this.getDayOfLastDayInMonth();i++){ //todo ral for
      if(this.currentMonth==11){
        let nextMonth=this.allMonthsOfNextYear[0];
        console.log(nextMonth);
        nextMonthDays.push(nextMonth[i]);
      }else{
        let nextMonth=this.allMonthsOfYear[this.currentMonth+1];
        nextMonthDays.push(nextMonth[i]);
      }
    }
    console.log(nextMonthDays)
    return nextMonthDays;
  }

  getMonthFromNumber(ind: number): string {
    switch (ind) {
      case 0: return "Januar"; break;
      case 1: return "Februar"; break;
      case 2: return "März"; break;
      case 3: return "April"; break;
      case 4: return "May"; break;
      case 5: return "Juni"; break;
      case 6: return "Juli"; break;
      case 7: return "August"; break;
      case 8: return "September"; break;
      case 9: return "Oktober"; break;
      case 10: return "November"; break;
      case 11: return "Dezember"; break;
      default: return "Januar";
    }
  }


  subtractFromDuration():void{
    this.duration--;
    if(this.duration<1){
      this.duration=1;
    }
  }
  addToDuration():void{
    this.duration++;
  }

}
