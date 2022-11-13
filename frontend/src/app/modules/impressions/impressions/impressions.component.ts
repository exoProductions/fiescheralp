import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-impressions',
  templateUrl: './impressions.component.html',
  styleUrls: ['./impressions.component.less']
})
export class ImpressionsComponent implements OnInit {
  constructor(private navigationService:NavigationService) { 

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
}
