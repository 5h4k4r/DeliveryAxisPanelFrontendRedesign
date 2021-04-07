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
import { CreateUserDeviceRequest } from '../models/create-user-device-request';
import { UserDevice } from '../models/user-device';

@Injectable({
  providedIn: 'root',
})
export class UserDevicesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getDevices
   */
  static readonly GetDevicesPath = '/users/{id}/devices';

  /**
   * Gets the devices registered for a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDevices()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevices$Response(params: {

    /**
     * userId
     */
    id: string;
  }): Observable<StrictHttpResponse<Array<UserDevice>>> {

    const rb = new RequestBuilder(this.rootUrl, UserDevicesService.GetDevicesPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserDevice>>;
      })
    );
  }

  /**
   * Gets the devices registered for a user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDevices$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevices(params: {

    /**
     * userId
     */
    id: string;
  }): Observable<Array<UserDevice>> {

    return this.getDevices$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserDevice>>) => r.body as Array<UserDevice>)
    );
  }

  /**
   * Path part for operation addDevice
   */
  static readonly AddDevicePath = '/users/{id}/devices';

  /**
   * Registers or updates a device with a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addDevice()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  addDevice$Response(params: {

    /**
     * userId
     */
    id: string;
    body?: CreateUserDeviceRequest
  }): Observable<StrictHttpResponse<UserDevice>> {

    const rb = new RequestBuilder(this.rootUrl, UserDevicesService.AddDevicePath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDevice>;
      })
    );
  }

  /**
   * Registers or updates a device with a user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addDevice$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  addDevice(params: {

    /**
     * userId
     */
    id: string;
    body?: CreateUserDeviceRequest
  }): Observable<UserDevice> {

    return this.addDevice$Response(params).pipe(
      map((r: StrictHttpResponse<UserDevice>) => r.body as UserDevice)
    );
  }

  /**
   * Path part for operation removeDevice
   */
  static readonly RemoveDevicePath = '/users/{id}/devices';

  /**
   * Unregisters a device with a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeDevice()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeDevice$Response(params: {

    /**
     * userId
     */
    id: string;
    deviceId: string;
  }): Observable<StrictHttpResponse<BasicResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserDevicesService.RemoveDevicePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('deviceId', params.deviceId, {});
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
   * Unregisters a device with a user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `removeDevice$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeDevice(params: {

    /**
     * userId
     */
    id: string;
    deviceId: string;
  }): Observable<BasicResponse> {

    return this.removeDevice$Response(params).pipe(
      map((r: StrictHttpResponse<BasicResponse>) => r.body as BasicResponse)
    );
  }

}
