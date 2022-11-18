import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationShortcutComponent } from './reservation-shortcut/reservation-shortcut.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SvgIconsComponent } from './svg-icons/svg-icons.component';
import { WordCarouselComponent } from './word-carousel/word-carousel.component';
import { CalendarComponent } from './calendar/calendar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ReservationShortcutComponent,
    SvgIconsComponent,
    WordCarouselComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ReservationShortcutComponent,
    SvgIconsComponent,
    WordCarouselComponent,
    CalendarComponent,
  ]
})
export class SharedModule { }
