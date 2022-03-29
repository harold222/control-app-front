import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { makeStateKey, StateKey, TransferState } from "@angular/platform-browser";
import { catchError, delay, Observable, of, race, tap } from 'rxjs';
import { TokenService } from '../shared/services/token/token.service';
import { ErrorModalService } from '../shared/components/error-modal/service/error-modal.service';

@Injectable({
    providedIn: 'root'
})
export class InterceptorToken implements HttpInterceptor {

    constructor(
        private transferState: TransferState,
        private tokenService: TokenService,
        private ErrorModalService: ErrorModalService
    ) {
    }

    public createError(codeError: number): void {
        this.ErrorModalService.setModal(true);
        this.ErrorModalService.setError(codeError);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        console.log('peticion: ', request.url)
        request = this.tokenService.addTokenToRequest(request)


        if (request.method !== 'GET') {
            return next.handle(request)
                .pipe(
                    catchError((error: HttpErrorResponse) => {
                        if (request.url.indexOf('.json') === -1) {
                            (error && error.error) ?
                                this.createError(error.error.statusCode) :
                                this.createError(-1);
                        }
                        return of(error);
                    }),
                );
        }

        const key: StateKey<string> = makeStateKey<string>(request.url);

        return race(
            next.handle(request).pipe(
                tap((event) => {
                    const body = (event as HttpResponse<any>).body
                    body && this.transferState.set(key, body);
                }),
                catchError((error: HttpErrorResponse) => {
                    if (request.url.indexOf('.json') === -1) {
                        (error && error.error) ?
                            this.createError(error.error.statusCode) :
                            this.createError(-1);
                    }
                    return of(error);
                })
            ),of(null).pipe(delay(500))
        )
    }

}