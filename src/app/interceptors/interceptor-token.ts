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
import { catchError, delay, Observable, of, race, tap, throwError } from 'rxjs';
import { TokenService } from '../shared/services/token/token.service';
import { ErrorModalService } from '../shared/components/error-modal/service/error-modal.service';

@Injectable()
export class InterceptorToken implements HttpInterceptor {

    constructor(
        private transferState: TransferState,
        private tokenService: TokenService,
        private ErrorModalService: ErrorModalService
    ) {}

    public createError(codeError: number): void {
        this.ErrorModalService.setModal(true);
        this.ErrorModalService.setError(codeError);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        request = this.tokenService.addTokenToRequest(request)
        if (request.method !== 'GET') {
            return next.handle(request)
                .pipe(
                    catchError((error: HttpErrorResponse) => {
                        if (request.url.indexOf('.json') === -1) {
                            console.log('aca: ', error.error);
                            (error?.error) ?
                                this.createError(error.status) : 
                                this.createError(-1);
                        }
                        return request.url.includes('auth/login') ?
                            throwError(error):
                            of(error)
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
                        (error?.error) ?
                            this.createError(error.status) : 
                            this.createError(-1);
                    }
                    return throwError(error);
                })
            ),
            of(null)
        )
    }

}