import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivitiesModule } from './modules/activities/activities.module';
import { HomeModule } from './modules/home/home.module';
import { ImpressionsModule } from './modules/impressions/impressions.module';
import { ReservationModule } from './modules/reservation/reservation.module';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    ActivitiesModule,
    ReservationModule,
    ImpressionsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
