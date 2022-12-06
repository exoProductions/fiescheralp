import { Component, OnInit } from '@angular/core';
import { DaysAndInfos } from 'src/app/models/days-and-infos.model';
import { CalendarService } from 'src/app/services/calendar.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  mode:number=0; //0=reservieren, 1=reservation löschen

  constructor(private calendarService: CalendarService, private reservationService: ReservationService) { }

  ngOnInit(): void {
   // this.reservate();
  }

  subtractFromDuration(): void {
    this.calendarService.subtractFromDuration();
  }
  addToDuration(): void {
    this.calendarService.addToDuration();
  }

  reservate(): void {
    this.reservationService.reservate()
  }
  setReservationClicked(state: boolean): void {
    this.reservationService.reservationClicked = state;
  }
  getDuration(): number {
    return this.calendarService.duration;
  }
  getNumberOfGuests(): number {
    return this.reservationService.numberOfGuests;
  }
  getPrice(): number {
    return this.reservationService.getPrice()
  }

  getUserdata(): any {
    return this.reservationService.userdata;
  }
  getReservationWorkedInd(): number {
    return this.reservationService.reservationWorkedInd;
  }
  getReservationClicked(): boolean {
    return this.reservationService.reservationClicked;
  }

  getReservationsInRange():DaysAndInfos[]{
    return this.calendarService.daysAndInfosInRange;
  }
}
