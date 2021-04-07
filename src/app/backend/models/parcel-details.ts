/* tslint:disable */
/* eslint-disable */
import { Currency } from './currency';
import { ParcelDimensions } from './parcel-dimensions';
import { ParcelItem } from './parcel-item';
export interface ParcelDetails {
  contents: string;
  currency?: Currency;
  dimensions?: ParcelDimensions;
  items?: null | Array<ParcelItem>;
  quantity?: number;
  value?: number;
}
