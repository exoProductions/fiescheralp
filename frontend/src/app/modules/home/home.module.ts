import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SplashComponent } from './sections/splash/splash.component';



@NgModule({
  declarations: [
    HomeComponent,
    SplashComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
