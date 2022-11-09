import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './modules/activities/activities/activities.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ReservationComponent } from './modules/reservation/reservation/reservation.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: "Home", component: HomeComponent },
  { path: "Reservation", component: ReservationComponent },
  { path: "Activities", component: ActivitiesComponent },
  { path: '**', redirectTo: "/Home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
