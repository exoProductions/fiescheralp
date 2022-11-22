import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation/reservation.component';
import { SharedModule } from '../shared/shared.module';
import { InfoSectionComponent } from './sections/info-section/info-section.component';
import { SettingsSectionComponent } from './sections/settings-section/settings-section.component';



@NgModule({
  declarations: [
    ReservationComponent,
    InfoSectionComponent,
    SettingsSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ReservationModule { }
