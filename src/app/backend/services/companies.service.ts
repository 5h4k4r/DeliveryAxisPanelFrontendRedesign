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

import { Company } from '../models/company';
import { CompanyPaginatedData } from '../models/company-paginated-data';
import { UpdateCompanyModel } from '../models/update-company-model';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listCompanies
   */
  static readonly ListCompaniesPath = '/companies';

  /**
   * Lists all the companies.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listCompanies()` instead.
   *
   * This method doesn't expect any request body.
   */
  listCompanies$Response(params?: {
    Page?: number;
    Limit?: number;
    SearchText?: string;
    Ids?: Array<string>;
  }): Observable<StrictHttpResponse<CompanyPaginatedData>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.ListCompaniesPath, 'get');
    if (params) {
      rb.query('Page', params.Page, {});
      rb.query('Limit', params.Limit, {});
      rb.query('SearchText', params.SearchText, {});
      rb.query('Ids', params.Ids, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CompanyPaginatedData>;
      })
    );
  }

  /**
   * Lists all the companies.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listCompanies$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listCompanies(params?: {
    Page?: number;
    Limit?: number;
    SearchText?: string;
    Ids?: Array<string>;
  }): Observable<CompanyPaginatedData> {

    return this.listCompanies$Response(params).pipe(
      map((r: StrictHttpResponse<CompanyPaginatedData>) => r.body as CompanyPaginatedData)
    );
  }

  /**
   * Path part for operation getCompanyById
   */
  static readonly GetCompanyByIdPath = '/companies/{id}';

  /**
   * Gets a company using their id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCompanyById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCompanyById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Company>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.GetCompanyByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Company>;
      })
    );
  }

  /**
   * Gets a company using their id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCompanyById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCompanyById(params: {
    id: string;
  }): Observable<Company> {

    return this.getCompanyById$Response(params).pipe(
      map((r: StrictHttpResponse<Company>) => r.body as Company)
    );
  }

  /**
   * Path part for operation updateCompany
   */
  static readonly UpdateCompanyPath = '/companies/{id}';

  /**
   * Updates a company.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCompany()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCompany$Response(params: {
    id: string;
    body?: UpdateCompanyModel
  }): Observable<StrictHttpResponse<Company>> {

    const rb = new RequestBuilder(this.rootUrl, CompaniesService.UpdateCompanyPath, 'post');
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
        return r as StrictHttpResponse<Company>;
      })
    );
  }

  /**
   * Updates a company.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateCompany$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCompany(params: {
    id: string;
    body?: UpdateCompanyModel
  }): Observable<Company> {

    return this.updateCompany$Response(params).pipe(
      map((r: StrictHttpResponse<Company>) => r.body as Company)
    );
  }

}
