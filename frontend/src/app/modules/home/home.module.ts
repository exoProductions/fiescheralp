import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SplashComponent } from './sections/splash/splash.component';
import { SharedModule } from '../shared/shared.module';
import { TopOverviewComponent } from './sections/top-overview/top-overview.component';
import { InfosComponent } from './sections/infos/infos.component';
import { AppartmentComponent } from './sections/appartment/appartment.component';
import { ReviewsComponent } from './sections/reviews/reviews.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppartmentInfosComponent } from './sections/appartment/appartment-infos/appartment-infos.component';



@NgModule({
  declarations: [
    HomeComponent,
    SplashComponent,
    TopOverviewComponent,
    InfosComponent,
    AppartmentComponent,
    ReviewsComponent,
    AppartmentInfosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GoogleMapsModule,
  ]
})
export class HomeModule { }
