import { Injectable } from '@angular/core';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/fontawesome-free-brands';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  pages:string[]=["Home","Reservation","Impressionen", "Aktivitäten"];
  curPageInd:number=0;
  navIsOpen:boolean=false;
  socialLinks: string[] = [
    "https://www.facebook.com/exoProductionsGmbH",
    "https://www.instagram.com/exo.productions/",
    "https://www.youtube.com/channel/UCDwC3byjaV2_NIme18Metfw",
    "https://www.linkedin.com/company/exo-productions/"
  ];
  
  socialLinksTitle:string[]=["Facebook","Instagram","Youtube","TikTok"]
  socialIcons: any = [
    faFacebook,
    faInstagram,
    faYoutube,
    faTiktok,
  ];

  isSafari:boolean=false;
  constructor() { 
    this.isSafari=this.getBrowserName()=='safari';//safari
  }

  getBrowserName():string {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
 }
}
