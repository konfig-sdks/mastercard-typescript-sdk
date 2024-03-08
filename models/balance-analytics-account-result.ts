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
import { ObbAccountDetails } from './obb-account-details';
import { ObbCurrentReportRequestDetails } from './obb-current-report-request-details';
import { ObbDataAvailability } from './obb-data-availability';

/**
 * 
 * @export
 * @interface BalanceAnalyticsAccountResult
 */
export interface BalanceAnalyticsAccountResult {
    /**
     * 
     * @type {ObbAccountDetails}
     * @memberof BalanceAnalyticsAccountResult
     */
    'accountDetails': ObbAccountDetails;
    /**
     * An account ID represented as a number
     * @type {number}
     * @memberof BalanceAnalyticsAccountResult
     */
    'accountId': number;
    /**
     * 
     * @type {BalanceAnalyticsMetrics}
     * @memberof BalanceAnalyticsAccountResult
     */
    'balanceAnalyticsMetrics'?: BalanceAnalyticsMetrics;
    /**
     * 
     * @type {ObbCurrentReportRequestDetails}
     * @memberof BalanceAnalyticsAccountResult
     */
    'currentReportRequest': ObbCurrentReportRequestDetails;
    /**
     * 
     * @type {ObbDataAvailability}
     * @memberof BalanceAnalyticsAccountResult
     */
    'historicDataAvailability': ObbDataAvailability;
}

