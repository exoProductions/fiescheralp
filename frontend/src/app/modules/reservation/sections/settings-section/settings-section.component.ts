import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-settings-section',
  templateUrl: './settings-section.component.html',
  styleUrls: ['./settings-section.component.less']
})
export class SettingsSectionComponent implements OnInit {

  constructor(private calendarService: CalendarService, private reservationService: ReservationService,private globalVariableService:GlobalVariablesService) { }

  ngOnInit(): void {
  }

  onFormChanged():void{
    console.log(this.getUserdata());
  }
  submitReservation():void{

  }

  subtractFromDuration(): void {
    this.calendarService.subtractFromDuration();
  }
  addToDuration(): void {
    this.calendarService.addToDuration();
  }
  subtractFromGuests():void{
    if(this.reservationService.numberOfGuests>1){
      this.reservationService.numberOfGuests--;
    }
  }
  addToGuests():void{
    if(this.reservationService.numberOfGuests<this.reservationService.maxGuests){
      this.reservationService.numberOfGuests++;
    }
  }
  navigateToAGB():void{
    window.open(this.globalVariableService.legalityLink+1, "_blank");
  }
  getDuration(): number {
    return this.calendarService.duration;
  }
  getNumberOfGuests():number{
    return this.reservationService.numberOfGuests;
  }
  getPrice(): number {
    return this.reservationService.getPrice()
  }

  getUserdata():any{
    return this.reservationService.userdata;
  }


}
