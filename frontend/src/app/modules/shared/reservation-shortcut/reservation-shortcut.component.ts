import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarService } from 'src/app/services/calendar.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-reservation-shortcut',
  templateUrl: './reservation-shortcut.component.html',
  styleUrls: ['./reservation-shortcut.component.less']
})
export class ReservationShortcutComponent implements OnInit {

  show: boolean = false;
  closed: boolean = false;
  calendarIsOpen: boolean = false;
  constructor(private calendarService: CalendarService,private router:Router,private navigationService:NavigationService ) { }

  ngOnInit(): void {
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    scrollOffset > window.innerHeight * 2 ? this.show = true : this.show = false;
  }

  subtractFromDuration(): void {
    this.calendarService.subtractFromDuration();
  }
  addToDuration(): void {
    this.calendarService.addToDuration();
  }
  goToReservation() {
    this.router.navigate(["Reservation"]); //todo uncomment
  }
  getCurrentDate(): string {
    return this.calendarService.selectedStartDate.getDate().toString() + "." + (this.calendarService.selectedStartDate.getMonth() + 1).toString() + "." + this.calendarService.selectedStartDate.getFullYear().toString();
  }
  getDuration(): number {
    return this.calendarService.duration;
  }

  getShowShortcut():boolean{
    return this.navigationService.curPageInd==0;
  }

}
