import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { IgetStationsBySupervisorResponse } from './model/IgetStationsBySupervisorResponse';
import { IGetOperatorsByStationResponse } from './model/getOperatorsByStation/IGetOperatorsByStationResponse';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  private url: string = `${environment.BACK_END}stations/`

  constructor(private http: HttpClient) { }

  public getStationsBySupervisor(): Observable<IgetStationsBySupervisorResponse> {
    return this.http.get<IgetStationsBySupervisorResponse>(
      `${this.url}getStationsBySupervisor`
    )
  }

  public getOperatorsByStation(idStation: string): Observable<IGetOperatorsByStationResponse> {
    return this.http.get<IGetOperatorsByStationResponse>(
      `${this.url}getOperatorsByStation/${idStation}`
    )
  }

}