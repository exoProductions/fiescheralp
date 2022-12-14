import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation/reservation.component';
import { InfoSectionComponent } from './sections/info-section/info-section.component';
import { SettingsSectionComponent } from './sections/settings-section/settings-section.component';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReservationComponent,
    InfoSectionComponent,
    SettingsSectionComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    SharedModule,
    FormsModule,
  ]
})
export class ReservationModule { }
