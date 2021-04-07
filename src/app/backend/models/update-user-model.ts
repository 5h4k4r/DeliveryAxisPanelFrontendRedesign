/* tslint:disable */
/* eslint-disable */
import { DriverDetails } from './driver-details';
export interface UpdateUserModel {
  blocked?: null | boolean;
  displayName?: null | string;
  driverDetails?: DriverDetails;
  email?: null | string;
  newPassword?: null | string;
  oldPassword?: null | string;
  parentId?: null | string;
  phone?: null | string;
}
