/* tslint:disable */
/* eslint-disable */
import { GeocodingLocation } from './geocoding-location';
import { GeocodingViewport } from './geocoding-viewport';
export interface GeocodingGeometry {
  location?: GeocodingLocation;
  location_type?: null | string;
  viewport?: GeocodingViewport;
}
