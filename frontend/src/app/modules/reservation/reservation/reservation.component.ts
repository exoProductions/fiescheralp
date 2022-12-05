import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.less']
})
export class ReservationComponent implements OnInit {
  @ViewChild('settingsSection') settingsElem!:ElementRef;
  scrollY:number=0;
  scrolledToSettings:boolean=false;
  constructor(private calendarService:CalendarService ,private navigationService:NavigationService,private globalVariableService:GlobalVariablesService,private reservationService:ReservationService) { }

  ngOnInit(): void {
    this.navigationService.curPageInd=1;
    this.gotoTop();
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  getEmail():string{
    return this.globalVariableService.eMail;
  }

  getPricePerDay():number{
    return this.reservationService.pricePerDay;
  }
  getStartDate():string{
    let selected:Date=this.calendarService.getSelectedStartDate();
      return selected.getDate().toString()+"."+selected.getMonth()+"."+selected.getFullYear();
  }
  scrollToSettings():void{
    this.settingsElem.nativeElement.scrollIntoView({ behavior: 'smooth'});
    this.scrolledToSettings=true;
  }
  getShowGoToSettingsSection():boolean{
    let show:boolean=(this.scrollY> window.innerHeight/2 && window.innerWidth<800) && !this.scrolledToSettings;

    return show;
  }
  getReservationClicked():boolean{
    return this.reservationService.reservationClicked;
  }
}
