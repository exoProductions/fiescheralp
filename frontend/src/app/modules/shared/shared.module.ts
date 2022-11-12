import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationShortcutComponent } from './reservation-shortcut/reservation-shortcut.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SvgIconsComponent } from './svg-icons/svg-icons.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ReservationShortcutComponent,
    SvgIconsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SvgIconsComponent,
  ]
})
export class SharedModule { }
