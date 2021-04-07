/* tslint:disable */
/* eslint-disable */
import { OrderStatus } from './order-status';
export interface OrderStateChange {
  driverId?: null | string;
  status?: OrderStatus;
  timestamp?: string;
  userId?: null | string;
}
