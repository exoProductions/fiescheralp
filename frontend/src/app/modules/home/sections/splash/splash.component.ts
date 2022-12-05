import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.less']
})
export class SplashComponent implements OnInit {

  constructor(private navigationService:NavigationService) { }

  ngOnInit(): void {
  }

  getIsSafari():boolean{
    return this.navigationService.isSafari;
  }
}
