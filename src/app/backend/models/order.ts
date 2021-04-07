/* tslint:disable */
/* eslint-disable */
import { AddressDetails } from './address-details';
import { CustomerInfo } from './customer-info';
import { OrderStateChange } from './order-state-change';
import { OrderStatus } from './order-status';
import { ParcelDetails } from './parcel-details';
export interface Order {
  collectionDate?: null | string;
  companyId: string;
  createdAt?: string;
  customerCollects?: boolean;
  customerInfo?: CustomerInfo;
  deliveryAddress?: AddressDetails;
  deliveryDate?: null | string;
  driverId?: null | string;

  /**
   * Gets or sets the custom order id.
   */
  id?: null | string;
  lastStateChangeTime?: string;
  metadata?: null | { [key: string]: {  } };
  parcels?: null | Array<ParcelDetails>;
  returnAddress: AddressDetails;
  stateChanges?: null | Array<OrderStateChange>;
  status?: OrderStatus;
  updatedAt?: string;
}
