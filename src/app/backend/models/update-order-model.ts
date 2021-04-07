/* tslint:disable */
/* eslint-disable */
import { AddressDetails } from './address-details';
import { CustomerInfo } from './customer-info';
import { OrderStatus } from './order-status';
import { ParcelDetails } from './parcel-details';
export interface UpdateOrderModel {
  collectionDate?: null | string;
  customerCollects?: null | boolean;
  customerInfo?: CustomerInfo;
  deliveryAddress?: AddressDetails;
  deliveryDate?: null | string;
  driverId?: null | string;
  metadata?: null | { [key: string]: {  } };
  parcels?: null | Array<ParcelDetails>;
  returnAddress?: AddressDetails;
  status?: OrderStatus;
}
