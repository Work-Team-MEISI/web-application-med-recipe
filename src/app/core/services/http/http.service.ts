import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchResponseModel } from 'src/app/shared/models/response/fetch-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly _serverURL: string;

  constructor(private readonly _httpClient: HttpClient) {
    this._serverURL = environment.serverURL;
  }

  public fetchOneByParams<T>(routeURL: string, httpParams: HttpParams): Observable<FetchResponseModel<T>> {
    return this._httpClient.get<FetchResponseModel<T>>(`${this._serverURL}/${routeURL}`, { params: httpParams });
  }

  public fetchOneById<T>(routeURL: string, resourceId: string): Observable<FetchResponseModel<T>> {
    return this._httpClient.get<FetchResponseModel<T>>(`${this._serverURL}/${routeURL}/${resourceId}`);
  }

  public fetchBulkByParams<T>(routeURL: string, httpParams: HttpParams): Observable<Array<FetchResponseModel<T>>> {
    return this._httpClient.get<Array<FetchResponseModel<T>>>(`${this._serverURL}/${routeURL}`, { params: httpParams });
  }

  public fetchBulkById<T>(routeURL: string, resourceId: string): Observable<Array<FetchResponseModel<T>>> {
    return this._httpClient.get<Array<FetchResponseModel<T>>>(`${this._serverURL}/${routeURL}/${resourceId}`);
  }
}
