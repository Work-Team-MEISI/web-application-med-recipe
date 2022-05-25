import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/storage/local-storage/local-storage.service';
import { JwtService } from 'src/app/core/services/jwt/jwt.service';
import { TokenCollection } from 'src/app/shared/constants/token.collection';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private readonly _storageService: LocalStorageService,
    private readonly _jwtService: JwtService,
    private readonly _authenticationService: AuthenticationService,
  ) { }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this._applyHeaders(request);

    return next.handle(request)
      .pipe(
        catchError((error: any) => {
          if (error.status === 401) {
            const isRefreshTokenExpired = this._jwtService.isRefreshTokenExpired();

            if (isRefreshTokenExpired === true) {
              this._authenticationService.signOut();

              return throwError(error);
            }

            return this._refreshToken(next, request);
          }

          return throwError(error);
        })
      );
  }

  private _refreshToken(next: HttpHandler, request: HttpRequest<unknown>): Observable<HttpEvent<unknown>> {
    this._authenticationService.refreshToken();

    request = this._applyHeaders(request);

    return next.handle(request);
  }

  private _applyHeaders(request: HttpRequest<unknown>): HttpRequest<unknown> {
    const accessToken = this._storageService.fetchToken<string>(TokenCollection.ACCESS_TOKEN);

    return request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });
  }
}
