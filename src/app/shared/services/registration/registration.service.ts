import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private url: string = `${environment.BACK_END}registration/`

  constructor(private http: HttpClient) { }

  public getStationsBySupervisor(idStation: string): Observable<any> {
    return this.http.get<any>(
      `${this.url}create`, idStation
    )
  }

}