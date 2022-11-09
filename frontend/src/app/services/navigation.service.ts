import { Injectable } from '@angular/core';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/fontawesome-free-brands';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  pages:string[]=["Home","Reservation","Activities"];
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
  constructor() { }}
