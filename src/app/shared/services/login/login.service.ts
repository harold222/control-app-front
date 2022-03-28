import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = `${environment.BACK_END}auth/`

  constructor(private http: HttpClient) { }

  public generateLogin(data: any): Observable<any> {
    return this.http.post(
      `${this.url}login`, data
    )
  }

}
