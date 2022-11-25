import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-impressions',
  templateUrl: './impressions.component.html',
  styleUrls: ['./impressions.component.less']
})
export class ImpressionsComponent implements OnInit {

  slideContents:any[]=[
    {
      img:"0.jpg",
      text:"",
    },
    {
      img:"1.jpg",
      text:"",
    },    {
      img:"2.jpg",
      text:"",
    },    {
      img:"3.jpg",
      text:"",
    },    {
      img:"4.jpg",
      text:"",
    },    {
      img:"5.jpg",
      text:"",
    },    {
      img:"6.jpg",
      text:"",
    },
  ];

  constructor(private navigationService:NavigationService,private globalVariableService:GlobalVariablesService) { 
  }

  ngOnInit(): void {
    this.navigationService.curPageInd=2;
    this.gotoTop();
  }
 

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  getSwiperConfig(): SwiperOptions {
    return this.globalVariableService.getSwiperConfig()
   }
   getIsLargeSwiper(): boolean {
     return window.innerWidth >= 1200;
   }
  
}
