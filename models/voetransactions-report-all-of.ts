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

import { ReportInstitution } from './report-institution';

/**
 * 
 * @export
 * @interface VOETransactionsReportAllOf
 */
export interface VOETransactionsReportAllOf {
    /**
     * The `postedDate` of the earliest transaction analyzed for the report. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof VOETransactionsReportAllOf
     */
    'startDate'?: number;
    /**
     * The `postedDate` of the latest transaction analyzed for the report. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof VOETransactionsReportAllOf
     */
    'endDate'?: number;
    /**
     * Number of days covered by the report
     * @type {number}
     * @memberof VOETransactionsReportAllOf
     */
    'days'?: number;
    /**
     * \"true\" if the report covers more than 180 days
     * @type {boolean}
     * @memberof VOETransactionsReportAllOf
     */
    'seasoned'?: boolean;
    /**
     * A list of institution records, including information about the individual accounts used in this report
     * @type {Array<ReportInstitution>}
     * @memberof VOETransactionsReportAllOf
     */
    'institutions'?: Array<ReportInstitution>;
}

