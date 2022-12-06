import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DaysAndInfos } from '../models/days-and-infos.model';
import { ReservationData } from '../models/reservation-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server: string = "https://www.test.exo-productions.ch";
  constructor(private httpClient: HttpClient) { }

  reserve(reservationData: ReservationData): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.server}/api/reserve.php`, reservationData);
  }

  loadAlreadyBookedDaysAndInfos(): Observable<DaysAndInfos[]> {
    return this.httpClient.post<DaysAndInfos[]>(`${this.server}/api/loadAlreadyBookedDaysAndInfos.php`,{});
  }
}
