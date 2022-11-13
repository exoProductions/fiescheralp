import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.less']
})
export class ActivitiesComponent implements OnInit,OnDestroy {

  private routeSub!: Subscription;
  activityInd:number=0;
  constructor(private navigationService:NavigationService,private route:ActivatedRoute) { 
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id']);
      this.activityInd = params['id'];
    });
  }

  ngOnInit(): void {
    this.navigationService.curPageInd=3;
    this.gotoTop();
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
