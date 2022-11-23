import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.less']
})
export class ReservationComponent implements OnInit {

  constructor(private navigationService:NavigationService,private globalVariableService:GlobalVariablesService) { }

  ngOnInit(): void {
    this.navigationService.curPageInd=1;
    this.gotoTop();
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
}
