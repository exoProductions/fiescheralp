import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})
export class CalendarComponent implements OnInit {

  constructor(private calendarService:CalendarService) { }

  ngOnInit(): void {
  }

  skipToPreviousMonth():void{
    this.calendarService.skipToPreviousMonth();
  }
  skipToNextMonth():void{
    this.calendarService.skipToNextMonth();
  }

  getDaysOfCurrentMonth():Date[]{
    console.log(this.calendarService.getDaysOfCurrentMonth());
    return this.calendarService.getDaysOfCurrentMonth();
  }

  getDayNames():string[]{
    return this.calendarService.dayNames;
  }

  getMonthFromNumber():string{
    return this.calendarService.getMonthFromNumber(this.calendarService.currentMonth);
  }
  getDayOfFirstDayInMonth():number{
    return this.calendarService.getDayOfFirstDayInMonth();
  }
  getPrevMonthDays():Date[]{
    return this.calendarService.getPrevMonthDays();
  }
  getNextMonthDays():Date[]{
    return this.calendarService.getNextMonthDays();
  }
  getCurrentYear():number{
    return this.calendarService.currentYear;
  }
}
