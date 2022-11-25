import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpressionsComponent } from './impressions/impressions.component';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    ImpressionsComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
  ]
})
export class ImpressionsModule { }
