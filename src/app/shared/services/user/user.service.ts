import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IGetUserResponse } from './getUser/IGetUserResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = `${environment.BACK_END}users/`

  constructor(private http: HttpClient) { }

  public getUser(id: string): Observable<IGetUserResponse> {
    return this.http.get<IGetUserResponse>(
      `${this.url}/${id}`
    )
  }

}