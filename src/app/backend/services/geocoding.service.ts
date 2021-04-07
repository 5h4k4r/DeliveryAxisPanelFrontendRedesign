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

import { AutocompleteResponse } from '../models/autocomplete-response';
import { DetailsResponse } from '../models/details-response';
import { FormattedAddressDetails } from '../models/formatted-address-details';
import { GeocodingResponse } from '../models/geocoding-response';

@Injectable({
  providedIn: 'root',
})
export class GeocodingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listGeocodingResults
   */
  static readonly ListGeocodingResultsPath = '/geocoding/google';

  /**
   * Lists all the google geocoding addresses matching the search query.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listGeocodingResults()` instead.
   *
   * This method doesn't expect any request body.
   */
  listGeocodingResults$Response(params: {
    searchText: string;
  }): Observable<StrictHttpResponse<GeocodingResponse>> {

    const rb = new RequestBuilder(this.rootUrl, GeocodingService.ListGeocodingResultsPath, 'get');
    if (params) {
      rb.query('searchText', params.searchText, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GeocodingResponse>;
      })
    );
  }

  /**
   * Lists all the google geocoding addresses matching the search query.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listGeocodingResults$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listGeocodingResults(params: {
    searchText: string;
  }): Observable<GeocodingResponse> {

    return this.listGeocodingResults$Response(params).pipe(
      map((r: StrictHttpResponse<GeocodingResponse>) => r.body as GeocodingResponse)
    );
  }

  /**
   * Path part for operation listAddresses
   */
  static readonly ListAddressesPath = '/geocoding/address';

  /**
   * Lists all the addresses matching the search query.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAddresses()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAddresses$Response(params: {
    searchText: string;
  }): Observable<StrictHttpResponse<Array<FormattedAddressDetails>>> {

    const rb = new RequestBuilder(this.rootUrl, GeocodingService.ListAddressesPath, 'get');
    if (params) {
      rb.query('searchText', params.searchText, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FormattedAddressDetails>>;
      })
    );
  }

  /**
   * Lists all the addresses matching the search query.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listAddresses$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAddresses(params: {
    searchText: string;
  }): Observable<Array<FormattedAddressDetails>> {

    return this.listAddresses$Response(params).pipe(
      map((r: StrictHttpResponse<Array<FormattedAddressDetails>>) => r.body as Array<FormattedAddressDetails>)
    );
  }

  /**
   * Path part for operation listPlaces
   */
  static readonly ListPlacesPath = '/geocoding/places';

  /**
   * Lists all the places matching the search query.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listPlaces()` instead.
   *
   * This method doesn't expect any request body.
   */
  listPlaces$Response(params: {
    searchText: string;
  }): Observable<StrictHttpResponse<AutocompleteResponse>> {

    const rb = new RequestBuilder(this.rootUrl, GeocodingService.ListPlacesPath, 'get');
    if (params) {
      rb.query('searchText', params.searchText, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AutocompleteResponse>;
      })
    );
  }

  /**
   * Lists all the places matching the search query.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listPlaces$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listPlaces(params: {
    searchText: string;
  }): Observable<AutocompleteResponse> {

    return this.listPlaces$Response(params).pipe(
      map((r: StrictHttpResponse<AutocompleteResponse>) => r.body as AutocompleteResponse)
    );
  }

  /**
   * Path part for operation getPlaceDetails
   */
  static readonly GetPlaceDetailsPath = '/geocoding/places/{id}';

  /**
   * Gets place details by id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPlaceDetails()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPlaceDetails$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Array<DetailsResponse>>> {

    const rb = new RequestBuilder(this.rootUrl, GeocodingService.GetPlaceDetailsPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DetailsResponse>>;
      })
    );
  }

  /**
   * Gets place details by id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPlaceDetails$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPlaceDetails(params: {
    id: string;
  }): Observable<Array<DetailsResponse>> {

    return this.getPlaceDetails$Response(params).pipe(
      map((r: StrictHttpResponse<Array<DetailsResponse>>) => r.body as Array<DetailsResponse>)
    );
  }

}
