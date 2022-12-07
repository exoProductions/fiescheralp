import { Injectable } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  websiteName:string="Fiescheralp"
  websiteNameShort:string="Fiescheralp";
  isWiderThan800:boolean=true;
  legalityLink:string="https://www.legality.exo-productions.ch/";
  adminEmail:string="dominic.gut@stud.hslu.ch"; //"benigerber@livenet.ch"; //achtung, auch in reserve.php ändern

  navbarHeight:number=120;
  configLarge: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  configSmall: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  configSmaller: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  constructor() { }

  onSizeChange(windowSize:number):void{
    this.isWiderThan800=windowSize>1200;
  }

  getSwiperConfig(): SwiperOptions {
    if (window.innerWidth > 1200) {
      return this.configLarge;
    } else {
      if (window.innerWidth > 800) {
        return this.configSmall
      } else {
        return this.configSmaller
      }
    }
  }
}
