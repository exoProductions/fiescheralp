import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { ReservationService } from 'src/app/services/reservation.service';
import SwiperCore, { SwiperOptions, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.less']
})
export class InfoSectionComponent implements OnInit {
  

  advantages: any[] = [
    {
      advantage: "aölksdfjöas aölskdfj askdfjasdkf askdfk kdsf asddfka sddfaksdf aksdf kasdfas",
      icon: "home-outline"
    },
    {
      advantage: "aölksdfjöas aölskdfj askdfjasdkf askdfk kdsf asddfka sddfaksdf aksdf kasdfas",
      icon: "home-outline"
    }, {
      advantage: "aölksdfjöas aölskdfj askdfjasdkf askdfk kdsf asddfka sddfaksdf aksdf kasdfas",
      icon: "home-outline"
    },
  ];

  slideContents: any[] = [
    {
      img: "0.jpg",
      title: "Schlafzimmer N° 1",
      text: "1 Doppelbett (1.80 x 2m)"
    },
    {
      img: "1.jpg",
      title: "Schlafzimmer N° 1",
      text: "1 Doppelbett (1.80 x 2m)"
    }, {
      img: "2.jpg",
      title: "Schlafzimmer N° 1",
      text: "1 Doppelbett (1.80 x 2m)"
    },
    {
      img: "2.jpg",
      title: "Schlafzimmer N° 1",
      text: "1 Doppelbett (1.80 x 2m)"
    }, {
      img: "2.jpg",
      title: "Schlafzimmer N° 1",
      text: "1 Doppelbett (1.80 x 2m)"
    },
  ];

  showAllAddons:boolean=false;
  addons: any[] = [
    {
      text: "Blick auf den Aletsch Gletscher",
      icon: "home-outline"
    },
    {
      text: "Wlan",
      icon: "home-outline"
    }, {
      text: "Vorgarten",
      icon: "home-outline"
    }, {
      text: "Feuerstelle",
      icon: "home-outline"
    }, {
      text: "Garage",
      icon: "home-outline"
    }, {
      text: "Balkon",
      icon: "home-outline"
    }, {
      text: "Tische / Arbeitsplätze",
      icon: "home-outline"
    },
    {
      text: "Beim Verlassen der Wohnung machen Sie nur das Nötigste, wir erledigen den Rest",
      icon: "home-outline"
    },
  ];

  constructor(private reservationService:ReservationService,private globalVariableService:GlobalVariablesService) { }

  ngOnInit(): void {
  }
  onSlideChange() {
    console.log('slide change');
  }
  getSwiperConfig(): SwiperOptions {
   return this.globalVariableService.getSwiperConfig()
  }
  getIsLargeSwiper(): boolean {
    return window.innerWidth >= 1200;
  }
  getMaxGuests():number{
    return this.reservationService.maxGuests;
  }
}
