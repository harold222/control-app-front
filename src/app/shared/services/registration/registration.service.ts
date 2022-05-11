import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ICreateNewRegistration } from './model/CreateNewRegistration/ICreateNewRegistration';

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

}