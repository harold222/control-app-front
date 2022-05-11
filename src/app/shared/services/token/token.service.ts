import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor(){ }

    public getToken = (): string | null => localStorage.getItem('token');

    public removeToken = (): void => localStorage.removeItem('token');

    public updateToken = (newToken: string) => localStorage.setItem('token', newToken);
    
    public getUserOfToken(): string | null {
        let token = this.getToken()
        if (token) {
            let atob = window.atob(token.split('.')[1]);
            if (atob) {
                const atobParse = JSON.parse(atob)
                return `${atobParse.name} ${atobParse.lastname}`
            } else return null
        }
        return null
    }

    public addTokenToRequest = (request: HttpRequest<any>): HttpRequest<any> =>
        request.clone({
            headers: request.headers.append('xxxtokenxxx', this.getToken() || ''),
            url: request.url
        });

}