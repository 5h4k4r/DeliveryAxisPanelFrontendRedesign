/* tslint:disable */
/* eslint-disable */
import { Company } from './company';

/**
 * Represents any paginated data/
 */
export interface CompanyPaginatedData {

  /**
   * Gets the total count of the items in the data.
   */
  count?: number;

  /**
   * Gets the items in the current page.
   */
  items?: null | Array<Company>;

  /**
   * Gets the total items per page limit.
   */
  limit?: number;

  /**
   * Gets the page index of the current pagination.
   */
  page?: number;

  /**
   * Gets the remaining items in the paginated data.
   */
  remainingItems?: number;
}
