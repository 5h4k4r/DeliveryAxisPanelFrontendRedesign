/* tslint:disable */
/* eslint-disable */
import { CreateUserDeviceRequest } from './create-user-device-request';
import { UserRole } from './user-role';
export interface RequestAuthModel {
  device?: CreateUserDeviceRequest;
  handle: string;
  password: string;
  roles?: null | Array<UserRole>;
}
