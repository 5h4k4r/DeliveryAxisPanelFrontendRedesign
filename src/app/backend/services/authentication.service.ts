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

import { AuthToken } from '../models/auth-token';
import { BasicResponse } from '../models/basic-response';
import { LogoutRequest } from '../models/logout-request';
import { RequestAuthModel } from '../models/request-auth-model';
import { ResetPasswordRequestModel } from '../models/reset-password-request-model';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation login
   */
  static readonly LoginPath = '/authentication/login';

  /**
   * Authenticates a user using handle and password.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(params?: {
    body?: RequestAuthModel
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.LoginPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Authenticates a user using handle and password.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(params?: {
    body?: RequestAuthModel
  }): Observable<User> {

    return this.login$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation logout
   */
  static readonly LogoutPath = '/authentication/logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logout()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logout$Response(params?: {
    body?: LogoutRequest
  }): Observable<StrictHttpResponse<BasicResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.LogoutPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `logout$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  logout(params?: {
    body?: LogoutRequest
  }): Observable<BasicResponse> {

    return this.logout$Response(params).pipe(
      map((r: StrictHttpResponse<BasicResponse>) => r.body as BasicResponse)
    );
  }

  /**
   * Path part for operation refreshToken
   */
  static readonly RefreshTokenPath = '/authentication/refresh-token';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `refreshToken()` instead.
   *
   * This method doesn't expect any request body.
   */
  refreshToken$Response(params?: {
    refreshToken?: string;
  }): Observable<StrictHttpResponse<AuthToken>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.RefreshTokenPath, 'post');
    if (params) {
      rb.query('refreshToken', params.refreshToken, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthToken>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `refreshToken$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  refreshToken(params?: {
    refreshToken?: string;
  }): Observable<AuthToken> {

    return this.refreshToken$Response(params).pipe(
      map((r: StrictHttpResponse<AuthToken>) => r.body as AuthToken)
    );
  }

  /**
   * Path part for operation forgotPasswordTokenExists
   */
  static readonly ForgotPasswordTokenExistsPath = '/authentication/forgot-password/token-exists';

  /**
   * Checks if a forgot password token exists.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `forgotPasswordTokenExists()` instead.
   *
   * This method doesn't expect any request body.
   */
  forgotPasswordTokenExists$Response(params: {
    tokenId: string;
  }): Observable<StrictHttpResponse<BasicResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.ForgotPasswordTokenExistsPath, 'get');
    if (params) {
      rb.query('tokenId', params.tokenId, {});
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
   * Checks if a forgot password token exists.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `forgotPasswordTokenExists$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  forgotPasswordTokenExists(params: {
    tokenId: string;
  }): Observable<BasicResponse> {

    return this.forgotPasswordTokenExists$Response(params).pipe(
      map((r: StrictHttpResponse<BasicResponse>) => r.body as BasicResponse)
    );
  }

  /**
   * Path part for operation forgotPassword
   */
  static readonly ForgotPasswordPath = '/authentication/forgot-password';

  /**
   * Sends a password reset email to the specified email if it's associated with a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `forgotPassword()` instead.
   *
   * This method doesn't expect any request body.
   */
  forgotPassword$Response(params?: {
    email?: string;
  }): Observable<StrictHttpResponse<BasicResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.ForgotPasswordPath, 'post');
    if (params) {
      rb.query('email', params.email, {});
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
   * Sends a password reset email to the specified email if it's associated with a user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `forgotPassword$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  forgotPassword(params?: {
    email?: string;
  }): Observable<BasicResponse> {

    return this.forgotPassword$Response(params).pipe(
      map((r: StrictHttpResponse<BasicResponse>) => r.body as BasicResponse)
    );
  }

  /**
   * Path part for operation changePasswordAfterForgotten
   */
  static readonly ChangePasswordAfterForgottenPath = '/authentication/reset-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePasswordAfterForgotten()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePasswordAfterForgotten$Response(params?: {
    body?: ResetPasswordRequestModel
  }): Observable<StrictHttpResponse<BasicResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.ChangePasswordAfterForgottenPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `changePasswordAfterForgotten$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePasswordAfterForgotten(params?: {
    body?: ResetPasswordRequestModel
  }): Observable<BasicResponse> {

    return this.changePasswordAfterForgotten$Response(params).pipe(
      map((r: StrictHttpResponse<BasicResponse>) => r.body as BasicResponse)
    );
  }

}
