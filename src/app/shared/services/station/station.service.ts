import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { IgetStationsBySupervisorResponse } from './model/IgetStationsBySupervisorResponse';

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

}