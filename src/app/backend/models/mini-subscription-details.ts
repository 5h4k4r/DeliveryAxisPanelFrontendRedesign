/* tslint:disable */
/* eslint-disable */
import { MiniPlanDetails } from './mini-plan-details';
export interface MiniSubscriptionDetails {
  applicationFeePercent?: null | number;
  billingCycleAnchor?: null | string;
  cancelAt?: null | string;
  canceledAt?: null | string;
  collectionMethod?: null | string;
  created?: null | string;
  currentPeriodEnd?: null | string;
  currentPeriodStart?: null | string;
  daysUntilDue?: null | number;
  endedAt?: null | string;
  id?: null | string;
  metadata?: null | { [key: string]: string };
  nextPendingInvoiceItemInvoice?: null | string;
  plan?: MiniPlanDetails;
  startDate?: null | string;
  status?: null | string;
  trialEnd?: null | string;
  trialStart?: null | string;
}
