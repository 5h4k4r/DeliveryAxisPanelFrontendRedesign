/* tslint:disable */
/* eslint-disable */
import { Order } from './order';

/**
 * Represents any paginated data/
 */
export interface OrderPaginatedData {

  /**
   * Gets the total count of the items in the data.
   */
  count?: number;

  /**
   * Gets the items in the current page.
   */
  items?: null | Array<Order>;

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
