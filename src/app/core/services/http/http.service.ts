import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateResponseModel } from 'src/app/shared/models/response/create-response.model';
import { DeleteResponseModel } from 'src/app/shared/models/response/delete-response.model';
import { FetchResponseModel } from 'src/app/shared/models/response/fetch-response.model';
import { UpdateResponseModel } from 'src/app/shared/models/response/update-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly _serverURL: string;

  constructor(private readonly _httpClient: HttpClient) {
    this._serverURL = environment.serverURL;
  }

  /** Fetch Methods */

  public fetchBulkByParams<T>(routeURL: string, httpParams: HttpParams): Observable<Array<FetchResponseModel<T>>> {
    return this._httpClient.get<Array<FetchResponseModel<T>>>(`${this._serverURL}/${routeURL}`, { params: httpParams });
  }

  public fetchBulkById<T>(routeURL: string, resourceId: string): Observable<Array<FetchResponseModel<T>>> {
    return this._httpClient.get<Array<FetchResponseModel<T>>>(`${this._serverURL}/${routeURL}/${resourceId}`);
  }

  public fetchOneByParams<T>(routeURL: string, httpParams: HttpParams): Observable<FetchResponseModel<T>> {
    return this._httpClient.get<FetchResponseModel<T>>(`${this._serverURL}/${routeURL}`, { params: httpParams });
  }

  public fetchOneById<T>(routeURL: string, resourceId: string): Observable<FetchResponseModel<T>> {
    return this._httpClient.get<FetchResponseModel<T>>(`${this._serverURL}/${routeURL}/${resourceId}`);
  }

  /** Create Methods */

  public createOne<T, K>(routeURL: string, httpBody: K): Observable<CreateResponseModel<T>> {
    return this._httpClient.post<CreateResponseModel<T>>(`${this._serverURL}/${routeURL}`, { body: httpBody });
  }

  /** Update Methods */

  public updateOne<T, V>(routeURL: string, httpBody: V): Observable<UpdateResponseModel<T>> {
    return this._httpClient.put<UpdateResponseModel<T>>(`${this._serverURL}/${routeURL}`, { body: httpBody });
  }

  /** Delete Methods */

  public deleteOneById<T>(routeURL: string, resourceId: string): Observable<DeleteResponseModel<T>> {
    return this._httpClient.delete<DeleteResponseModel<T>>(`${this._serverURL}/${routeURL}/${resourceId}`);
  }

  public deleteOneByParams<T>(routeURL: string, httpParams: HttpParams): Observable<DeleteResponseModel<T>> {
    return this._httpClient.delete<DeleteResponseModel<T>>(`${this._serverURL}/${routeURL}`, { params: httpParams });
  }
}
