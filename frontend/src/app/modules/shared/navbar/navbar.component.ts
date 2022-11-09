import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faBrush, faLocation, faGem, faBars } from '@fortawesome/free-solid-svg-icons';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  pageIcons: any = [
    faHome,
    faBrush,
    faLocation,
    faGem,
  ];

  burgerIcon=faBars;
  animatedOnce:boolean=false;

  constructor(private navigationService: NavigationService, private globalVariablesService: GlobalVariablesService,private router:Router) { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    window.innerWidth>=800?this.navigationService.navIsOpen=false:null;
  }

  setCurPageInd(ind: number): void {
    this.navigationService.curPageInd = ind;
  }

  navigateToPage(ind: number): void {
    this.router.navigate(['/' + this.getPages()[ind]]);
    this.navigationService.navIsOpen=false;
  }

  openSocial(ind: number): void {
    window.open(this.navigationService.socialLinks[ind], "_blank");
  }

  toggleNav(): void {
    this.navigationService.navIsOpen = !this.navigationService.navIsOpen;
  }

  getShowSpacer():boolean{
    return true;
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
  getWebsiteName(): string {
    return this.globalVariablesService.websiteNameShort;
  }
  getPages(): string[] {
    return this.navigationService.pages;
  }
  getCurPageInd(): number {
    return this.navigationService.curPageInd;
  }
  getSocialIcons():any[]{
    return this.navigationService.socialIcons
  } 


}
