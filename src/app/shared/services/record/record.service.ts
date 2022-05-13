import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IGetRecordBySupervisorResponse } from './model/IGetRecordBySupervisorResponse';

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

}