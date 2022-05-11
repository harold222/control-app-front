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

    public createError(message: string): void {
        this.ErrorModalService.setModal(true);
        this.ErrorModalService.setError(message);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        request = this.tokenService.addTokenToRequest(request)
        if (request.method !== 'GET') {
            return next.handle(request)
                .pipe(
                    catchError((error: HttpErrorResponse) => {
                        if (request.url.indexOf('.json') === -1) {
                            (error?.error) ?
                                this.createError(error.error.message) : 
                                this.createError('Se ha generado un problema vuelva a intentarlo');
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
                            this.createError(error.error.message) : 
                            this.createError('Se ha generado un problema vuelva a intentarlo');
                    }
                    return throwError(error);
                })
            ),
            of(null)
        )
    }

}