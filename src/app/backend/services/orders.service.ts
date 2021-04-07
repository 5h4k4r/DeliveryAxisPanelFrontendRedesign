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
import { Order } from '../models/order';
import { OrderPaginatedData } from '../models/order-paginated-data';
import { OrderStatus } from '../models/order-status';
import { UpdateOrderModel } from '../models/update-order-model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listOrders
   */
  static readonly ListOrdersPath = '/orders';

  /**
   * Lists all the orders.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listOrders()` instead.
   *
   * This method doesn't expect any request body.
   */
  listOrders$Response(params?: {
    Page?: number;
    Limit?: number;
    DriverId?: string;
    CompanyId?: string;
    FromTime?: string;
    ToTime?: string;
    Status?: Array<OrderStatus>;
    SortField?: string;
    SortDescending?: boolean;
    SearchText?: string;
    ExcludeFields?: boolean;
    Fields?: Array<string>;
    Ids?: Array<string>;
  }): Observable<StrictHttpResponse<OrderPaginatedData>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.ListOrdersPath, 'get');
    if (params) {
      rb.query('Page', params.Page, {});
      rb.query('Limit', params.Limit, {});
      rb.query('DriverId', params.DriverId, {});
      rb.query('CompanyId', params.CompanyId, {});
      rb.query('FromTime', params.FromTime, {});
      rb.query('ToTime', params.ToTime, {});
      rb.query('Status', params.Status, {});
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
        return r as StrictHttpResponse<OrderPaginatedData>;
      })
    );
  }

  /**
   * Lists all the orders.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `listOrders$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listOrders(params?: {
    Page?: number;
    Limit?: number;
    DriverId?: string;
    CompanyId?: string;
    FromTime?: string;
    ToTime?: string;
    Status?: Array<OrderStatus>;
    SortField?: string;
    SortDescending?: boolean;
    SearchText?: string;
    ExcludeFields?: boolean;
    Fields?: Array<string>;
    Ids?: Array<string>;
  }): Observable<OrderPaginatedData> {

    return this.listOrders$Response(params).pipe(
      map((r: StrictHttpResponse<OrderPaginatedData>) => r.body as OrderPaginatedData)
    );
  }

  /**
   * Path part for operation createOrder
   */
  static readonly CreateOrderPath = '/orders';

  /**
   * Creates a new order.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOrder$Response(params?: {
    body?: Order
  }): Observable<StrictHttpResponse<Order>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.CreateOrderPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Creates a new order.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOrder(params?: {
    body?: Order
  }): Observable<Order> {

    return this.createOrder$Response(params).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Path part for operation getOrderById
   */
  static readonly GetOrderByIdPath = '/orders/{id}';

  /**
   * Gets an order using their id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrderById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Order>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.GetOrderByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Gets an order using their id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOrderById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderById(params: {
    id: string;
  }): Observable<Order> {

    return this.getOrderById$Response(params).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Path part for operation updateOrder
   */
  static readonly UpdateOrderPath = '/orders/{id}';

  /**
   * Updates an order.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOrder$Response(params: {
    id: string;
    body?: UpdateOrderModel
  }): Observable<StrictHttpResponse<Order>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.UpdateOrderPath, 'post');
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
        return r as StrictHttpResponse<Order>;
      })
    );
  }

  /**
   * Updates an order.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOrder(params: {
    id: string;
    body?: UpdateOrderModel
  }): Observable<Order> {

    return this.updateOrder$Response(params).pipe(
      map((r: StrictHttpResponse<Order>) => r.body as Order)
    );
  }

  /**
   * Path part for operation deleteOrder
   */
  static readonly DeleteOrderPath = '/orders/{id}';

  /**
   * Deletes an order.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOrder()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrder$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<BasicResponse>> {

    const rb = new RequestBuilder(this.rootUrl, OrdersService.DeleteOrderPath, 'delete');
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
   * Deletes an order.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteOrder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrder(params: {
    id: string;
  }): Observable<BasicResponse> {

    return this.deleteOrder$Response(params).pipe(
      map((r: StrictHttpResponse<BasicResponse>) => r.body as BasicResponse)
    );
  }

}
