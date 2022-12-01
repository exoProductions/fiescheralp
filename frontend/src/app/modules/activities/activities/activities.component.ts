import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ActivityData } from './activity-data';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.less']
})
export class ActivitiesComponent implements OnInit, OnDestroy, AfterViewInit {
  private routeSub!: Subscription;
  activityInd: number = 0;
  @ViewChild("path") pathElem!: ElementRef;
  @ViewChild("dirt1") dirtElem1!: ElementRef;
  @ViewChild("dirt2") dirtElem2!: ElementRef;
  @ViewChild("shoes") shoesElem!: ElementRef;
  @ViewChild("activitiesTitle") activitiesTitle!: ElementRef;

  activities = new ActivityData().activities;

  pathLength: number = 10;

  constructor(private navigationService: NavigationService, private route: ActivatedRoute, private router:Router) {
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
    //this.pathElem.nativeElement.style.strokeDasharray = this.pathLength + ' ' + 0;
    //this.pathElem.nativeElement.style.strokeDashoffset = this.pathLength;
    this.pathLength=4.5*this.pathLength //450vh;
    this.pathElem.nativeElement.style.strokeDasharray = this.pathLength+' '+this.pathLength;
    this.pathElem.nativeElement.style.strokeDashoffset = this.pathLength;
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    // console.log(document.documentElement.scrollTop ,document.documentElement.scrollHeight)
    //let scrollPercentage=(document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // let scrollPercentage=Math.max(0,(document.documentElement.scrollTop + document.body.scrollTop - window.innerHeight +this.globalVariableService.navbarHeight/2)/(document.documentElement.scrollHeight- window.innerHeight * 2 +this.globalVariableService.navbarHeight/2));
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - window.innerHeight);
    let drawLength = this.pathLength * scrollPercentage;
    //drawLength=5;
    this.pathElem.nativeElement.style.strokeDashoffset = this.pathLength-drawLength;
    console.log( this.pathElem.nativeElement.style.strokeDashoffset );
    let scrollY = window.scrollY;
    /*this.dirtElem1.nativeElement.style.bottom=scrollY/8+"px";
    this.dirtElem2.nativeElement.style.bottom=scrollY/10+"px";
    this.shoesElem.nativeElement.style.top="calc(20% * -1 + "+scrollY/20+"px)";
    */
    this.activitiesTitle.nativeElement.style.top = scrollY * -0.5 + "px";
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  bookNow():void{
    this.router.navigate(["Reservation"]);
  }

  getSize():number{
    return window.innerHeight * 7;
  }
}
