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

import { BasicResponse } from '../models/basic-response';

@Injectable({
  providedIn: 'root',
})
export class UserVerificationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation verifyUser
   */
  static readonly VerifyUserPath = '/users/{id}/verify';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `verifyUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  verifyUser$Response(params: {
    id: string;
    otp: string;
  }): Observable<StrictHttpResponse<BasicResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserVerificationService.VerifyUserPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('otp', params.otp, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BasicResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `verifyUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  verifyUser(params: {
    id: string;
    otp: string;
  }): Observable<BasicResponse> {

    return this.verifyUser$Response(params).pipe(
      map((r: StrictHttpResponse<BasicResponse>) => r.body as BasicResponse)
    );
  }

  /**
   * Path part for operation resendVerificationCode
   */
  static readonly ResendVerificationCodePath = '/users/{id}/resend-otp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resendVerificationCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  resendVerificationCode$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<BasicResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserVerificationService.ResendVerificationCodePath, 'post');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BasicResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `resendVerificationCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resendVerificationCode(params: {
    id: string;
  }): Observable<BasicResponse> {

    return this.resendVerificationCode$Response(params).pipe(
      map((r: StrictHttpResponse<BasicResponse>) => r.body as BasicResponse)
    );
  }

}
