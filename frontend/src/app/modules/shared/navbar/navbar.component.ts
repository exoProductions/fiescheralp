import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  pageIcons: string[] = [
    "home-outline",
    "bookmarks-outline",
    "image-outline",
    "accessibility-outline",
  ];

  animatedOnce:boolean=false;

  scrollOffset:number=0;

  constructor(private navigationService: NavigationService,private router:Router) { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    window.innerWidth>=800?this.navigationService.navIsOpen=false:null;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrollOffset = window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
  setCurPageInd(ind: number): void {
    this.navigationService.curPageInd = ind;
  }

  navigateToPage(ind: number): void {
    this.router.navigate(['/' + this.getRoutes()[ind]]); //todo uncomment 
    this.navigationService.navIsOpen=false;
  }


  toggleNav(): void {
    this.navigationService.navIsOpen = !this.navigationService.navIsOpen;
  }

  getCurrentPageInd(): number {
    return this.navigationService.curPageInd;
  }
  getRoutes(): string[] {
    return this.navigationService.pages;
  }

  getNavIsOpen(): boolean {
    return this.navigationService.navIsOpen;
  }
  getCurPageInd(): number {
    return this.navigationService.curPageInd;
  }
  getWindowHeight():number{
    return window.innerHeight;
  }
}
