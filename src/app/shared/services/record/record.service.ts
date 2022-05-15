import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IGetRecordBySupervisorResponse } from './model/IGetRecordBySupervisorResponse';
import { IUpdateStateRecordAndHistoryResponse } from './model/updateStateRecordAndHistory/IUpdateStateRecordAndHistoryResponse';
import { IUpdateStateRecordAndHistoryRequest } from './model/updateStateRecordAndHistory/IUpdateStateRecordAndHistoryRequest';
import { IGetSpecificRecordResponse } from './model/getSpecificRecord/IGetSpecificRecordResponse';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private url: string = `${environment.BACK_END}records/`

  constructor(private http: HttpClient) { }

  public getRecordBySupervisor(idSupervisor: string, idStation: string): Observable<IGetRecordBySupervisorResponse> {
    return this.http.get<IGetRecordBySupervisorResponse>(
      `${this.url}getRecordBySupervisor/${idSupervisor}/${idStation}`
    )
  }

  public updateStateRecordAndHistory(request: IUpdateStateRecordAndHistoryRequest): Observable<IUpdateStateRecordAndHistoryResponse>{
    return this.http.post<IUpdateStateRecordAndHistoryResponse>(
      `${this.url}updateState`, request
    )
  }

  public getSpecificRecord(id: string): Observable<IGetSpecificRecordResponse> {
    return this.http.get<IGetSpecificRecordResponse>(
      `${this.url}getRecord/${id}`
    )
  }
}