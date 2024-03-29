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

import { CashFlowAnalyticsAccountResult } from './cash-flow-analytics-account-result';
import { CashFlowAnalyticsBusinessSummary } from './cash-flow-analytics-business-summary';
import { ObbReportHeader } from './obb-report-header';

/**
 * Cash Flow Analytics report data as JSON
 * @export
 * @interface CashFlowAnalyticsReport
 */
export interface CashFlowAnalyticsReport {
    /**
     * Title of the report
     * @type {string}
     * @memberof CashFlowAnalyticsReport
     */
    'title': string;
    /**
     * Cash flow results per account
     * @type {Array<CashFlowAnalyticsAccountResult>}
     * @memberof CashFlowAnalyticsReport
     */
    'accountResults'?: Array<CashFlowAnalyticsAccountResult>;
    /**
     * Business ID
     * @type {number}
     * @memberof CashFlowAnalyticsReport
     */
    'businessId'?: number;
    /**
     * 
     * @type {CashFlowAnalyticsBusinessSummary}
     * @memberof CashFlowAnalyticsReport
     */
    'businessSummary'?: CashFlowAnalyticsBusinessSummary;
    /**
     * A customer ID represented as a number. See Add Customer API for how to create a customer ID.
     * @type {number}
     * @memberof CashFlowAnalyticsReport
     */
    'customerId': number;
    /**
     * 
     * @type {ObbReportHeader}
     * @memberof CashFlowAnalyticsReport
     */
    'reportHeader': ObbReportHeader;
    /**
     * Name of requester
     * @type {string}
     * @memberof CashFlowAnalyticsReport
     */
    'requesterName'?: string;
    /**
     * The total revenue
     * @type {number}
     * @memberof CashFlowAnalyticsReport
     */
    'totalRevenue'?: number;
}

