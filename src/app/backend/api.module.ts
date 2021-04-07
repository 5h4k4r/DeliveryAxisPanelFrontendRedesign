/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AccountsService } from './services/accounts.service';
import { AuthenticationService } from './services/authentication.service';
import { CheckoutService } from './services/checkout.service';
import { CompaniesService } from './services/companies.service';
import { DashboardService } from './services/dashboard.service';
import { GeocodingService } from './services/geocoding.service';
import { NotificationsService } from './services/notifications.service';
import { OrdersService } from './services/orders.service';
import { StatusService } from './services/status.service';
import { StripeWebhookService } from './services/stripe-webhook.service';
import { SubscriptionsService } from './services/subscriptions.service';
import { SwaggerService } from './services/swagger.service';
import { TokensService } from './services/tokens.service';
import { UserDevicesService } from './services/user-devices.service';
import { UsersService } from './services/users.service';
import { UserVerificationService } from './services/user-verification.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AccountsService,
    AuthenticationService,
    CheckoutService,
    CompaniesService,
    DashboardService,
    GeocodingService,
    NotificationsService,
    OrdersService,
    StatusService,
    StripeWebhookService,
    SubscriptionsService,
    SwaggerService,
    TokensService,
    UserDevicesService,
    UsersService,
    UserVerificationService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
