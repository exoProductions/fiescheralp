import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';
import { NavigationService } from 'src/app/services/navigation.service';
import SwiperCore, { SwiperOptions, Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectCoverflow } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);


@Component({
  selector: 'app-impressions',
  templateUrl: './impressions.component.html',
  styleUrls: ['./impressions.component.less']
})
export class ImpressionsComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: false,
    pagination: { clickable: false },
    scrollbar: { draggable: false },
    /*effect: 'coverflow',
    grabCursor: true,
    coverflowEffect: {
      slideShadows: true,
      rotate: 5,
      stretch: 15,
      depth: 40,
      modifier: 4
    }*/
  };
  imgs: any[] = [
    {
      img: "0.jpg",
      title: "Img Title",
      text: "Some words text bla bla another text phrases bli blu",
      sizeInd:0,
    },
    {
      img: "1.jpg",
      title: "Img Title",
      text: "Some words text bla bla another text phrases bli blu",
      sizeInd:2,
    }, {
      img: "2.jpg",
      title: "Img Title",
      text: "Some words text bla bla another text phrases bli blu",
      sizeInd:1,
    }, {
      img: "3.jpg",
      title: "Img Title",
      text: "Some words text bla bla another text phrases bli blu",
      sizeInd:1,
    }, {
      img: "4.jpg",
      title: "Img Title",
      text: "Some words text bla bla another text phrases bli blu",
      sizeInd:2,
    },
    {
      img: "4.jpg",
      title: "Img Title",
      text: "Some words text bla bla another text phrases bli blu",
      sizeInd:0,
    },
    {
      img: "2.jpg",
      title: "Img Title",
      text: "Some words text bla bla another text phrases bli blu",
      sizeInd:0,
    }, {
      img: "3.jpg",
      title: "Img Title",
      text: "Some words text bla bla another text phrases bli blu",
      sizeInd:1,
    }, {
      img: "4.jpg",
      title: "Img Title",
      text: "Some words text bla bla another text phrases bli blu",
      sizeInd:2,
    },
  ];

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.navigationService.curPageInd = 2;
    this.gotoTop();
  }


  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  getSlidesPerView(isSwiperOne: boolean): number {
    if (window.innerWidth > 1200) {
      return isSwiperOne ? 3 : 4;
    } else {
      if (window.innerWidth > 800) {
        return isSwiperOne ? 2 : 3;
      } else {
        return isSwiperOne ? 1 : 2;
      }
    }
  }
  getIsLargeSwiper(): boolean {
    return window.innerWidth >= 1200;
  }

}
