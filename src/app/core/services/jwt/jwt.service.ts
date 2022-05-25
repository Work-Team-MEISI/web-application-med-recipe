import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenCollection } from 'src/app/shared/constants/token.collection';
import { LocalStorageService } from '../storage/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private readonly _jwtHelper: JwtHelperService;

  constructor(
    private readonly _storageService: LocalStorageService,
  ) {
    this._jwtHelper = new JwtHelperService();
  }

  public isAccessTokenExpired(): boolean {
    const accessToken = this._storageService.fetchToken<string>(TokenCollection.ACCESS_TOKEN);

    if (accessToken === null) {
      return false;
    }

    return this._jwtHelper.isTokenExpired(accessToken);
  }


  public isRefreshTokenExpired(): boolean {
    const refreshToken = this._storageService.fetchToken<string>(TokenCollection.REFRESH_TOKEN);

    if (refreshToken === null) {
      return false;
    }

    return this._jwtHelper.isTokenExpired(refreshToken);
  }
}
