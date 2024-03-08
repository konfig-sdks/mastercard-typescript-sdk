/*
Open Banking

OpenAPI specification for Finicity APIs.

Open Banking solutions in the US are provided by Finicity, a Mastercard
company.

The version of the OpenAPI document: 1.16.0
Contact: apisupport@mastercard.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BalanceAnalyticsMetrics } from './balance-analytics-metrics';
import { ObbCurrentReportRequestDetails } from './obb-current-report-request-details';
import { ObbDataAvailability } from './obb-data-availability';

/**
 * Balance analytics summarized across all accounts in the report
 * @export
 * @interface BalanceAnalyticsBusinessSummary
 */
export interface BalanceAnalyticsBusinessSummary {
    /**
     * 
     * @type {BalanceAnalyticsMetrics}
     * @memberof BalanceAnalyticsBusinessSummary
     */
    'balanceAnalyticsMetrics'?: BalanceAnalyticsMetrics;
    /**
     * 
     * @type {ObbCurrentReportRequestDetails}
     * @memberof BalanceAnalyticsBusinessSummary
     */
    'currentReportRequest'?: ObbCurrentReportRequestDetails;
    /**
     * 
     * @type {ObbDataAvailability}
     * @memberof BalanceAnalyticsBusinessSummary
     */
    'historicDataAvailability'?: ObbDataAvailability;
}
