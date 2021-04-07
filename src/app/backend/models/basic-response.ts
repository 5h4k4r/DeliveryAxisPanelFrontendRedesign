/* tslint:disable */
/* eslint-disable */
import { ErrorCode } from './error-code';
export interface BasicResponse {
  code?: ErrorCode;

  /**
   * A short message explaining what went wrong
   */
  message?: null | string;
}
