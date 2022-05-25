import { Injectable } from '@angular/core';
import { catchError, Observable, Observer, of, pipe, throwError } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { LocalStorageService } from 'src/app/core/services/storage/local-storage/local-storage.service';
import { PublicRoute } from 'src/app/shared/constants/public.route';
import { TokenCollection } from 'src/app/shared/constants/token.collection';
import { CreateResponseModel } from 'src/app/shared/models/response/create-response.model';
import { UpdateResponseModel } from 'src/app/shared/models/response/update-response.model';
import { UserRoute } from '../../../constants/user.route';
import { UserEntity } from '../../../entity/user.entity';
import { AuthenticationRoute } from '../constants/authentication.route';
import { ForgotPasswordDTO } from '../dtos/forgot-password.dto';
import { SignInDTO } from '../dtos/sign-in.dto';
import { SignOutDTO } from '../dtos/sign-out.dto';
import { SignUpDTO } from '../dtos/sign-up.dto';
import { TokenModel } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private readonly _httpService: HttpService,
    private readonly _storageService: LocalStorageService
  ) { }

  public signIn(signInDTO: SignInDTO): Observable<boolean> {
    return new Observable((observer: Observer<boolean>) => {
      const routeURL = `${PublicRoute.USERS}/${UserRoute.AUTHENTICATION}/${AuthenticationRoute.SIGN_IN}`;

      this._httpService
        .createOne<TokenModel, SignInDTO>(routeURL, signInDTO)
        .pipe(
          catchError((error: Error) => {
            observer.error(error);
            return of(null);
          })
        )
        .subscribe((data: CreateResponseModel<TokenModel> | null) => {
          if (data !== null) {
            this._storageService.createToken(TokenCollection.ACCESS_TOKEN, data.resourceArgs!.accessToken);
            this._storageService.createToken(TokenCollection.REFRESH_TOKEN, data.resourceArgs!.refreshToken);
          }

          observer.next(data !== null ? true : false);
          return observer.complete();
        });
    })
  }

  public signUp(signUpDTO: SignUpDTO): Observable<boolean> {
    return new Observable((observer: Observer<boolean>) => {
      const routeURL = `${PublicRoute.USERS}/${UserRoute.AUTHENTICATION}/${AuthenticationRoute.SIGN_UP}`;

      this._httpService
        .createOne<UserEntity, SignUpDTO>(routeURL, signUpDTO)
        .pipe(
          catchError((error: Error) => {
            observer.error(error);
            return of(null);
          })
        )
        .subscribe((data: CreateResponseModel<UserEntity> | null) => {
          observer.next(data !== null ? true : false);
          return observer.complete();
        });
    })
  }

  public forgotPassword(forgotPasswordDTO: ForgotPasswordDTO): Observable<boolean> {
    return new Observable((observer: Observer<boolean>) => {
      const routeURL = `${PublicRoute.USERS}/${UserRoute.AUTHENTICATION}/${AuthenticationRoute.FORGOT_PASSWORD}`;

      this._httpService
        .updateOne<UserEntity, ForgotPasswordDTO>(routeURL, forgotPasswordDTO)
        .pipe(
          catchError((error: Error) => {
            observer.error(error);
            return of(null);
          })
        )
        .subscribe((data: UpdateResponseModel<UserEntity> | null) => {
          observer.next(data !== null ? true : false);
          return observer.complete();
        });
    })
  }

  public signOut(): Observable<boolean> {
    return new Observable((observer: Observer<boolean>) => {
      const routeURL = `${PublicRoute.USERS}/${UserRoute.AUTHENTICATION}/${AuthenticationRoute.SIGN_OUT}`;

      this._httpService
        .updateOne<null, null>(routeURL, null)
        .pipe(
          catchError((error: Error) => {
            observer.error(error);
            return of(null);
          })
        )
        .subscribe((data: UpdateResponseModel<null> | null) => {
          observer.next(data !== null ? true : false);
          return observer.complete();
        });
    })
  }

  public refreshToken(): Observable<boolean> {
    return new Observable((observer: Observer<boolean>) => {
      const routeURL = `${PublicRoute.USERS}/${UserRoute.AUTHENTICATION}/${AuthenticationRoute.REFRESH_TOKEN}`;

      this._httpService
        .updateOne<null, null>(routeURL, null)
        .pipe(
          catchError((error: Error) => {
            observer.error(error);
            return of(null);
          })
        )
        .subscribe((data: UpdateResponseModel<null> | null) => {
          observer.next(data !== null ? true : false);
          return observer.complete();
        });
    })
  }
}
