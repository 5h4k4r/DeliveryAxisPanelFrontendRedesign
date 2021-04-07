/* tslint:disable */
/* eslint-disable */
import { GeocodingAddressComponent } from './geocoding-address-component';
import { GeocodingGeometry } from './geocoding-geometry';
import { GeocodingPlusCode } from './geocoding-plus-code';
export interface GeocodingResult {
  address_components?: null | Array<GeocodingAddressComponent>;
  formatted_address?: null | string;
  geometry?: GeocodingGeometry;
  place_id?: null | string;
  plus_code?: GeocodingPlusCode;
  types?: null | Array<string>;
}
