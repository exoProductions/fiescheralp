import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.less']
})
export class ActivitiesComponent implements OnInit, OnDestroy, AfterViewInit {
  private routeSub!: Subscription;
  activityInd: number = 0;
  @ViewChild("path") pathElem!: ElementRef;

  activityRows: any[][] = [
    [
      {
        activityTitle: "Activity one",
        shortDescription: "Short Description of Activity one",
        activityInd: 0,
      },
      {
        activityTitle: "Activity one",
        shortDescription: "Short Description of Activity one",
        activityInd: 1,
      },
      {
        activityTitle: "Activity one",
        shortDescription: "Short Description of Activity one",
        activityInd: 2,
      },
    ],
    [
      {
        activityTitle: "Activity one",
        shortDescription: "Short Description of Activity one",
        activityInd: 3,
      },
      {
        activityTitle: "Activity one",
        shortDescription: "Short Description of Activity one",
        activityInd: 4,
      },
      {
        activityTitle: "Activity one",
        shortDescription: "Short Description of Activity one",
        activityInd: 5,
      },
    ],
    [
      {
        activityTitle: "Activity one",
        shortDescription: "Short Description of Activity one",
        activityInd: 6,
      },
      {
        activityTitle: "Activity one",
        shortDescription: "Short Description of Activity one",
        activityInd: 7,
      },
      {
        activityTitle: "Activity one",
        shortDescription: "Short Description of Activity one",
        activityInd: 8,
      },
    ],
  ]
  pathLength:number=10;

  constructor(private navigationService: NavigationService, private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id']);
      this.activityInd = params['id'];
    });
  }


  ngOnInit(): void {
    this.navigationService.curPageInd = 3;
    this.gotoTop();
  }
  ngAfterViewInit(): void {
 //this.pathLength  = this.pathElem.nativeElement.getTotalLength();
    this.pathElem.nativeElement.style.strokeDasharray = this.pathLength + ' ' + this.pathLength;
    this.pathElem.nativeElement.style.strokeDashoffset = this.pathLength;
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    let scrollPercentage=(document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight);
    let drawLength=this.pathLength*scrollPercentage;
    this.pathElem.nativeElement.style.strokeDashoffset=this.pathLength-drawLength;
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
