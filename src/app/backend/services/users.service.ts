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

import { RequestAuthModel } from '../models/request-auth-model';
import { UpdateUserModel } from '../models/update-user-model';
import { User } from '../models/user';
import { UserPaginatedData } from '../models/user-paginated-data';
import { UserRole } from '../models/user-role';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation authenticateDeprecated
   */
  static readonly AuthenticateDeprecatedPath = '/users/authenticate';

  /**
   * Authenticates a user using handle and password.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticateDeprecated()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticateDeprecated$Response(params?: {
    body?: RequestAuthModel
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.AuthenticateDeprecatedPath, 'post');
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
   * To access the full response (for headers, for example), `authenticateDeprecated$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticateDeprecated(params?: {
    body?: RequestAuthModel
  }): Observable<User> {

    return this.authenticateDeprecated$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation listUsers
   */
  static readonly ListUsersPath = '/users';

  /**
   * Lists all the users.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  listUsers$Response(params?: {
    Page?: number;
    Limit?: number;
    CompanyId?: string;
    ParentId?: string;
    Role?: UserRole;
    Blocked?: boolean;
    SortField?: string;
    SortDescending?: boolean;
    SearchText?: string;
    ExcludeFields?: boolean;
    Fields?: Array<string>;
    Ids?: Array<string>;
  }): Observable<StrictHttpResponse<UserPaginatedData>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ListUsersPath, 'get');
    if (params) {
      rb.query('Page', params.Page, {});
      rb.query('Limit', params.Limit, {});
      rb.query('CompanyId', params.CompanyId, {});
      rb.query('ParentId', params.ParentId, {});
      rb.query('Role', params.Role, {});
      rb.query('Blocked', params.Blocked, {});
      rb.query('SortField', params.SortField, {});
      rb.query('SortDescending', params.SortDescending, {});
      rb.query('SearchText', params.SearchText, {});
      rb.query('ExcludeFields', params.ExcludeFields, {});
      rb.query('Fields', params.Fields, {});
      rb.query('Ids', params.Ids, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserPaginatedData>;
      })
    );
  }

  /**
   * Lists all the users.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listUsers(params?: {
    Page?: number;
    Limit?: number;
    CompanyId?: string;
    ParentId?: string;
    Role?: UserRole;
    Blocked?: boolean;
    SortField?: string;
    SortDescending?: boolean;
    SearchText?: string;
    ExcludeFields?: boolean;
    Fields?: Array<string>;
    Ids?: Array<string>;
  }): Observable<UserPaginatedData> {

    return this.listUsers$Response(params).pipe(
      map((r: StrictHttpResponse<UserPaginatedData>) => r.body as UserPaginatedData)
    );
  }

  /**
   * Path part for operation createUser
   */
  static readonly CreateUserPath = '/users';

  /**
   * Creates a new user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser$Response(params?: {
    body?: User
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.CreateUserPath, 'post');
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
   * Creates a new user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser(params?: {
    body?: User
  }): Observable<User> {

    return this.createUser$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation getUserById
   */
  static readonly GetUserByIdPath = '/users/{id}';

  /**
   * Gets a user using their id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetUserByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * Gets a user using their id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserById(params: {
    id: string;
  }): Observable<User> {

    return this.getUserById$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation updateUser
   */
  static readonly UpdateUserPath = '/users/{id}';

  /**
   * Updates a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser$Response(params: {
    id: string;
    body?: UpdateUserModel
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UpdateUserPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
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
   * Updates a user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser(params: {
    id: string;
    body?: UpdateUserModel
  }): Observable<User> {

    return this.updateUser$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

}
