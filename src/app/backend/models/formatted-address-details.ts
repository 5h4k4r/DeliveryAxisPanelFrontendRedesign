/* tslint:disable */
/* eslint-disable */
import { GeoPoint } from './geo-point';
export interface FormattedAddressDetails {

  /**
   * First line of the address.
   */
  addressLine1: string;

  /**
   * Second line of the address
   */
  addressLine2: string;

  /**
   * City the address is located in.
   */
  city?: null | string;

  /**
   * Name of the person.
   */
  company?: null | string;

  /**
   * Name of the person.
   */
  contactName?: null | string;

  /**
   * ISO 3166 country code for the country the address is located in.
   */
  country: string;

  /**
   * Email to reach the person or organization.
   */
  email?: null | string;
  formattedAddress?: null | string;
  geometry?: GeoPoint;

  /**
   * Phone number to reach the person or organization.
   */
  phone?: null | string;

  /**
   * ZIP or postal code the address is located in.
   */
  postCode: string;

  /**
   * State or province the address is located in.
   */
  state?: null | string;
}
