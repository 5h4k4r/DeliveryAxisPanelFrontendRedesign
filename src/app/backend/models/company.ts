/* tslint:disable */
/* eslint-disable */
import { AddressDetails } from './address-details';
export interface Company {
  address?: null | string;
  createdAt?: string;
  email?: null | string;
  id?: null | string;
  name: string;
  phone?: null | string;
  shippingAddresses?: null | Array<AddressDetails>;
  updatedAt?: string;
  website?: null | string;
}
