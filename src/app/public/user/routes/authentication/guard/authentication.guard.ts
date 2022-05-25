import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from 'src/app/core/services/jwt/jwt.service';
import { PublicRoute } from 'src/app/shared/constants/public.route';
import { UserRoute } from '../../../constants/user.route';
import { AuthenticationRoute } from '../constants/authentication.route';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  public constructor(
    private readonly _jwtService: JwtService,
    private readonly _router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isTokenExpired: boolean = this._jwtService.isAccessTokenExpired();

    if (isTokenExpired === true) {
      this._router.navigate([`${PublicRoute.USERS}/${UserRoute.AUTHENTICATION}/${AuthenticationRoute.SIGN_IN}`]);

      return false;
    }

    return true;
  }

}
