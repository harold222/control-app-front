import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ICreateNewRegistration } from './model/CreateNewRegistration/ICreateNewRegistration';
import { IGetOperatorsByRecordResponse } from './model/GetOperatorsByRecord/IGetOperatorsByRecordResponse';
import { IGetOperatorsByRecordRequest } from './model/GetOperatorsByRecord/IGetOperatorsByRecordRequest';
import { IUpdateOpeningTimeRequest } from './model/updateOpeningTime/IUpdateOpeningTimeRequest';
import { IUpdateOpeningTimeResponse } from './model/updateOpeningTime/IUpdateOpeningTimeResponse';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private url: string = `${environment.BACK_END}registration/`

  constructor(private http: HttpClient) { }

  public getStationsBySupervisor(idStation: string): Observable<ICreateNewRegistration> {
    return this.http.post<ICreateNewRegistration>(
      `${this.url}create`, { idStation }
    )
  }

  public getOperatorsByRecord(request: IGetOperatorsByRecordRequest): Observable<IGetOperatorsByRecordResponse> {
    return this.http.post<IGetOperatorsByRecordResponse>(
      `${this.url}getOperatorsByRecord`, request
    )
  }

  public updateOpeningTime(request: IUpdateOpeningTimeRequest): Observable<IUpdateOpeningTimeResponse>{
    return this.http.post<IUpdateOpeningTimeResponse>(
      `${this.url}opening`, request
    )
  }

  public updateClosingTime(request: IUpdateOpeningTimeRequest): Observable<IUpdateOpeningTimeResponse>{
    return this.http.post<IUpdateOpeningTimeResponse>(
      `${this.url}closing`, request
    )
  }

}