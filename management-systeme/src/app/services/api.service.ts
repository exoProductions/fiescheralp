import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DaysAndInfos } from '../models/days-and-infos.model';
import { DeleteReservationData } from '../models/delete-reservation-data.model';
import { ReservationData } from '../models/reservation-data';
import { GlobalVariablesService } from './global-variables.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server: string = "https://www.test.exo-productions.ch";
  constructor(private httpClient: HttpClient,private globalVariableService:GlobalVariablesService) { }

  reserve(reservationData: ReservationData): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.server}/api/reserve.php`, reservationData);
  }
  deleteReservations(deleteReservationData: DeleteReservationData): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.server}/api/deleteReservations.php`, deleteReservationData);
  }
  loadAlreadyBookedDaysAndInfos(): Observable<DaysAndInfos[]> {
    return this.httpClient.post<DaysAndInfos[]>(`${this.server}/api/loadAlreadyBookedDaysAndInfos.php`,{nickname:this.globalVariableService.adminNickname,password:this.globalVariableService.adminPassword});
  }
}
