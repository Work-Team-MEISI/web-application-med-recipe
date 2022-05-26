import { Injectable } from '@angular/core';
import { catchError, Observable, Observer, throwError } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { FetchResponseModel } from 'src/app/shared/models/response/fetch-response.model';
import { CitizenEntity } from '../entity/citizen.entity';

@Injectable({
  providedIn: 'root'
})
export class CitizenService {
  constructor(
    private readonly _httpService: HttpService,
  ) { }

  public fetchCitizens(): Observable<Array<CitizenEntity>> {
    return new Observable((observer: Observer<Array<CitizenEntity>>) => {
      const routeURL = "";

      this._httpService.fetchBulk<CitizenEntity>(routeURL)
        .pipe(
          catchError((error) => {
            observer.error(error);
            return throwError(observer);
          })
        )
        .subscribe((data) => {
          const citizens: Array<CitizenEntity> = new Array<CitizenEntity>();

          for (const row of data) {
            citizens.push(row.resourceArgs!);
          }

          observer.next(citizens);
          return observer.complete();
        })
    });
  }
}
