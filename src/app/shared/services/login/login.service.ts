import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { IgenerateLoginRequest } from './model/generateLogin/IgenerateLoginRequest';
import { IgenerateLoginResponse } from './model/generateLogin/IgenerateLoginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = `${environment.BACK_END}auth/`

  constructor(private http: HttpClient) { }

  public generateLogin(data: IgenerateLoginRequest): Observable<IgenerateLoginResponse> {
    return this.http.post<IgenerateLoginResponse>(
      `${this.url}login`, data
    )
  }

}
