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

import { SendNotificationRequest } from '../models/send-notification-request';
import { TokenDetails } from '../models/token-details';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation sendNotification
   */
  static readonly SendNotificationPath = '/notifications';

  /**
   * Sends notification to a specific user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendNotification()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendNotification$Response(params?: {
    body?: SendNotificationRequest
  }): Observable<StrictHttpResponse<TokenDetails>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.SendNotificationPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TokenDetails>;
      })
    );
  }

  /**
   * Sends notification to a specific user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `sendNotification$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendNotification(params?: {
    body?: SendNotificationRequest
  }): Observable<TokenDetails> {

    return this.sendNotification$Response(params).pipe(
      map((r: StrictHttpResponse<TokenDetails>) => r.body as TokenDetails)
    );
  }

}
