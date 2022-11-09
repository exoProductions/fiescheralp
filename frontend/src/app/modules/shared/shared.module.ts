import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationShortcutComponent } from './reservation-shortcut/reservation-shortcut.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ReservationShortcutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
