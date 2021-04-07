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

import { MiniSubscriptionDetails } from '../models/mini-subscription-details';
import { UpdateSubscriptionModel } from '../models/update-subscription-model';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUserSubscription
   */
  static readonly GetUserSubscriptionPath = '/users/{userId}/subscription';

  /**
   * Gets a user's current subscription using their id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserSubscription()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserSubscription$Response(params: {
    userId: string;
  }): Observable<StrictHttpResponse<MiniSubscriptionDetails>> {

    const rb = new RequestBuilder(this.rootUrl, SubscriptionsService.GetUserSubscriptionPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MiniSubscriptionDetails>;
      })
    );
  }

  /**
   * Gets a user's current subscription using their id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserSubscription$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserSubscription(params: {
    userId: string;
  }): Observable<MiniSubscriptionDetails> {

    return this.getUserSubscription$Response(params).pipe(
      map((r: StrictHttpResponse<MiniSubscriptionDetails>) => r.body as MiniSubscriptionDetails)
    );
  }

  /**
   * Path part for operation updateUserSubscription
   */
  static readonly UpdateUserSubscriptionPath = '/users/{userId}/subscription';

  /**
   * Updates a user's current subscription using their id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUserSubscription()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUserSubscription$Response(params: {
    userId: string;
    body?: UpdateSubscriptionModel
  }): Observable<StrictHttpResponse<MiniSubscriptionDetails>> {

    const rb = new RequestBuilder(this.rootUrl, SubscriptionsService.UpdateUserSubscriptionPath, 'post');
    if (params) {
      rb.path('userId', params.userId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MiniSubscriptionDetails>;
      })
    );
  }

  /**
   * Updates a user's current subscription using their id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateUserSubscription$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUserSubscription(params: {
    userId: string;
    body?: UpdateSubscriptionModel
  }): Observable<MiniSubscriptionDetails> {

    return this.updateUserSubscription$Response(params).pipe(
      map((r: StrictHttpResponse<MiniSubscriptionDetails>) => r.body as MiniSubscriptionDetails)
    );
  }

}
