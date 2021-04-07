/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { DashboardData } from '../models/dashboard-data';

@Injectable({
  providedIn: 'root',
})
export class DashboardService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getDashboardData
   */
  static readonly GetDashboardDataPath = '/dashboard';

  /**
   * Gets the dashboard data for the logged in user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDashboardData()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDashboardData$Response(params?: {
  }): Observable<StrictHttpResponse<DashboardData>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardService.GetDashboardDataPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DashboardData>;
      })
    );
  }

  /**
   * Gets the dashboard data for the logged in user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDashboardData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDashboardData(params?: {
  }): Observable<DashboardData> {

    return this.getDashboardData$Response(params).pipe(
      map((r: StrictHttpResponse<DashboardData>) => r.body as DashboardData)
    );
  }

}
