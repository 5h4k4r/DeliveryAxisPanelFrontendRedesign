/* tslint:disable */
/* eslint-disable */
import { AddressDetails } from './address-details';
export interface UpdateCompanyModel {
  address?: null | string;
  email?: null | string;
  name?: null | string;
  phone?: null | string;
  shippingAddresses?: null | Array<AddressDetails>;
  website?: null | string;
}
