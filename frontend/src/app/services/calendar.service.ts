import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { DateSeparated } from '../models/date-separated.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  today: Date = new Date();
  allMonthsOfYear: Date[][] = [];
  allMonthsOfPreviousYear: Date[][] = [];
  allMonthsOfNextYear: Date[][] = [];
  currentYear: number = this.today.getFullYear();
  currentMonth: number = this.today.getMonth()

  private selectedStartDate: Date = this.today;
  duration: number = 2;
  maxDuration: number = 35;
  possibleDaysInRange: Date[] = [];
  daysInRange: Date[] = [];
  alreadyBookedDayInSelection: boolean = false;
  showSelectOtherText: boolean = false;
  dayNames: string[] = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  alreadyBookedDays: Date[] = [];

  constructor(private apiService: ApiService) {
    this.loadAlreadyBookedDays();
    this.generateNewYear(this.currentYear);
  }

  loadAlreadyBookedDays(): void {
    this.apiService.loadAlreadyBookedDays().subscribe((loadedDates: DateSeparated[]) => {
      if (loadedDates != null) {
        for (let i = 0; i < loadedDates.length; i++) {
          this.alreadyBookedDays.push(new Date(Date.UTC(loadedDates[i].fullYear, loadedDates[i].month, loadedDates[i].date)));
        }
      }
    });
  }

  generateNewYear(year: number): void {
    this.allMonthsOfYear = [];
    this.allMonthsOfNextYear = [];
    this.allMonthsOfPreviousYear = [];
    for (let i = 0; i < 12; i++) {
      this.allMonthsOfYear.push(this.getDaysInMonthUTC(i, year));
      this.allMonthsOfPreviousYear.push(this.getDaysInMonthUTC(i, year - 1));
      this.allMonthsOfNextYear.push(this.getDaysInMonthUTC(i, year + 1));
    }
    this.generatePossibleDaysInRange();
  }

  getDaysInMonthUTC(month: number, year: number): Date[] {
    let date: Date = new Date(Date.UTC(year, month, 1));
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
  getDaysOfCurrentMonth(): Date[] {
    return this.allMonthsOfYear[this.currentMonth];
  }

  getDayOfFirstDayInMonth(): number {
    let day = this.getDaysOfCurrentMonth()[0].getDay();
    if (day == 0) {
      return 6;
    } else {
      return day - 1;
    }
  }
  getDayOfLastDayInMonth(): number {
    let day = this.getDaysOfCurrentMonth()[this.getDaysOfCurrentMonth().length - 1].getDay();
    if (day == 0) {
      console.log(day);
      return 6;
    } else {
      return day - 1;
    }
  }
  getPrevMonthDays(): Date[] {
    let prevMonthDays: Date[] = [];
    for (let i = this.getDayOfFirstDayInMonth() - 1; i >= 0; i--) { //todo ral for
      if (this.currentMonth == 0) {
        let prevMonth = this.allMonthsOfPreviousYear[11];
        prevMonthDays.push(prevMonth[prevMonth.length - 1 - i]);
      } else {
        let prevMonth = this.allMonthsOfYear[this.currentMonth - 1];
        prevMonthDays.push(prevMonth[prevMonth.length - 1 - i]);
      }
    }
    return prevMonthDays;
  }

  getNextMonthDays(): Date[] {
    let nextMonthDays: Date[] = [];

    for (let i = 0; i < 6 - this.getDayOfLastDayInMonth(); i++) { //todo ral for
      if (this.currentMonth == 11) {
        let nextMonth = this.allMonthsOfNextYear[0];
        nextMonthDays.push(nextMonth[i]);
      } else {
        let nextMonth = this.allMonthsOfYear[this.currentMonth + 1];
        nextMonthDays.push(nextMonth[i]);
      }
    }
    return nextMonthDays;
  }

  getMonthFromNumber(ind: number): string {
    switch (ind) {
      case 0: return "Januar";
      case 1: return "Februar";
      case 2: return "M??rz";
      case 3: return "April";
      case 4: return "May";
      case 5: return "Juni";
      case 6: return "Juli";
      case 7: return "August";
      case 8: return "September";
      case 9: return "Oktober";
      case 10: return "November";
      case 11: return "Dezember";
      default: return "Januar";
    }
  }

  getDayIsInSelectionRange(date: Date): boolean {
    this.alreadyBookedDayInSelection = false;
    for (let i = 0; i < this.duration; i++) {
      let curDayFromList = this.possibleDaysInRange[i];
      if (date.getDate() == curDayFromList.getDate() && date.getMonth() == curDayFromList.getMonth() && date.getFullYear() == curDayFromList.getFullYear()) {
        if (this.daysInRange.length < this.duration) {
          this.daysInRange[i]=date;
          if (this.daysInRange[this.duration-1] !=null) {
            this.calcAlreadyBookedDayInSelection();
          }
        }
        if (this.getDayAlreadyBooked(date)) {
          this.alreadyBookedDayInSelection = true;
        }
        return true;
      }
    }
    return false;
  }

  calcAlreadyBookedDayInSelection(): void {
    setTimeout(() => {
      this.showSelectOtherText = false;
      for (let dayInRange of this.daysInRange) {
        if (this.getDayAlreadyBooked(dayInRange)) {
          this.showSelectOtherText = true;
        }
      }
    }, 100);
  }

  generatePossibleDaysInRange(): void {
    let startDay: Date = new Date(Date.UTC(this.selectedStartDate.getFullYear(), this.selectedStartDate.getMonth(), this.selectedStartDate.getDate()));
    this.possibleDaysInRange = [];

    while (this.possibleDaysInRange.length < this.maxDuration) {
      this.possibleDaysInRange.push(new Date(startDay));
      startDay.setUTCDate(startDay.getUTCDate() + 1);
    }
  }
  getDayAlreadyBooked(date: Date): boolean {
    for (let bookedDay of this.alreadyBookedDays) {
      if (date.getDate() == bookedDay.getDate() && date.getMonth() == bookedDay.getMonth() && date.getFullYear() == bookedDay.getFullYear()) {
        return true;
      }
    }
    return false;
  }

  subtractFromDuration(): void {
    this.duration--;
    if (this.duration < 1) {
      this.duration = 1;
    }
    this.setSelectedStartDate(this.selectedStartDate);
  }
  addToDuration(): void {
    if (this.duration < this.maxDuration) {
      this.duration++;
    }
    this.setSelectedStartDate(this.selectedStartDate);
  }
  setSelectedStartDate(newStartDate: Date): void {
    this.selectedStartDate = newStartDate;
    this.daysInRange = [];
    this.generatePossibleDaysInRange()
  }
  getSelectedStartDate(): Date {
    return this.selectedStartDate;
  }

}
