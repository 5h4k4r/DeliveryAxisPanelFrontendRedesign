/* tslint:disable */
/* eslint-disable */
export interface CustomerInfo {

  /**
   * Name of the person.
   */
  contactName?: null | string;

  /**
   * Email to reach the person or organization.
   */
  email?: null | string;

  /**
   * Metadata associated with the customer
   */
  metadata?: null | { [key: string]: {  } };

  /**
   * Phone number to reach the person or organization.
   */
  phone?: null | string;
}
