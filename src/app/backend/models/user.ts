/* tslint:disable */
/* eslint-disable */
import { AuthToken } from './auth-token';
import { DriverDetails } from './driver-details';
import { MiniSubscriptionDetails } from './mini-subscription-details';
import { UserRole } from './user-role';
export interface User {
  authentication?: AuthToken;
  blocked?: null | boolean;
  companyId?: null | string;
  createdAt?: null | string;
  customerId?: null | string;
  displayName: string;
  driverDetails?: DriverDetails;
  email?: null | string;
  id?: null | string;
  isVerified?: null | boolean;
  lastLoginAt?: null | string;
  metadata?: null | { [key: string]: {  } };
  parentId?: null | string;
  password: string;
  phone?: null | string;
  role?: UserRole;
  subscription?: MiniSubscriptionDetails;
  token?: null | string;
  trialUsed?: null | boolean;
  updatedAt?: null | string;
  username: string;
}
