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

import { TokenDetails } from '../models/token-details';
import { TokenDetailsPaginatedData } from '../models/token-details-paginated-data';

@Injectable({
  providedIn: 'root',
})
export class TokensService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listTokens
   */
  static readonly ListTokensPath = '/tokens';

  /**
   * Lists all the api keys for a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listTokens()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTokens$Response(params?: {
    Page?: number;
    Limit?: number;
    UserId?: string;
    Internal?: boolean;
    Name?: string;
    SortField?: string;
    SortDescending?: boolean;
    SearchText?: string;
    ExcludeFields?: boolean;
    Fields?: Array<string>;
    Ids?: Array<string>;
  }): Observable<StrictHttpResponse<TokenDetailsPaginatedData>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.ListTokensPath, 'get');
    if (params) {
      rb.query('Page', params.Page, {});
      rb.query('Limit', params.Limit, {});
      rb.query('UserId', params.UserId, {});
      rb.query('Internal', params.Internal, {});
      rb.query('Name', params.Name, {});
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
        return r as StrictHttpResponse<TokenDetailsPaginatedData>;
      })
    );
  }

  /**
   * Lists all the api keys for a user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listTokens$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listTokens(params?: {
    Page?: number;
    Limit?: number;
    UserId?: string;
    Internal?: boolean;
    Name?: string;
    SortField?: string;
    SortDescending?: boolean;
    SearchText?: string;
    ExcludeFields?: boolean;
    Fields?: Array<string>;
    Ids?: Array<string>;
  }): Observable<TokenDetailsPaginatedData> {

    return this.listTokens$Response(params).pipe(
      map((r: StrictHttpResponse<TokenDetailsPaginatedData>) => r.body as TokenDetailsPaginatedData)
    );
  }

  /**
   * Path part for operation createToken
   */
  static readonly CreateTokenPath = '/tokens';

  /**
   * Creates a new api key.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createToken()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createToken$Response(params?: {
    body?: TokenDetails
  }): Observable<StrictHttpResponse<TokenDetails>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.CreateTokenPath, 'post');
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
   * Creates a new api key.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createToken$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createToken(params?: {
    body?: TokenDetails
  }): Observable<TokenDetails> {

    return this.createToken$Response(params).pipe(
      map((r: StrictHttpResponse<TokenDetails>) => r.body as TokenDetails)
    );
  }

  /**
   * Path part for operation getTokenById
   */
  static readonly GetTokenByIdPath = '/tokens/{id}';

  /**
   * Gets an api key using it's id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTokenById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTokenById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<TokenDetails>> {

    const rb = new RequestBuilder(this.rootUrl, TokensService.GetTokenByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * Gets an api key using it's id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTokenById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTokenById(params: {
    id: string;
  }): Observable<TokenDetails> {

    return this.getTokenById$Response(params).pipe(
      map((r: StrictHttpResponse<TokenDetails>) => r.body as TokenDetails)
    );
  }

}
