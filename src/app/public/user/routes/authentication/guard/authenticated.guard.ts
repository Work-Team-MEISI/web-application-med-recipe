import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from 'src/app/core/services/jwt/jwt.service';
import { PublicRoute } from 'src/app/shared/constants/public.route';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  public constructor(
    private readonly _jwtService: JwtService,
    private readonly _router: Router,
  ) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isTokenExpired: boolean = this._jwtService.isAccessTokenExpired();

    if (isTokenExpired === false) {
      this._router.navigate([`${PublicRoute.PUBLIC}/${PublicRoute.CITIZENS}`]);

      return false;
    }

    return true;
  }

}
