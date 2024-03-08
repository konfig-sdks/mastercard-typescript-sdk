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

import { PrequalificationReportAssetSummary } from './prequalification-report-asset-summary';
import { ReportInstitution } from './report-institution';

/**
 * 
 * @export
 * @interface PrequalificationReportAllOf
 */
export interface PrequalificationReportAllOf {
    /**
     * The `postedDate` of the earliest transaction analyzed for the report. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof PrequalificationReportAllOf
     */
    'startDate'?: number;
    /**
     * The `postedDate` of the latest transaction analyzed for the report. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof PrequalificationReportAllOf
     */
    'endDate'?: number;
    /**
     * The number of days covered by the report
     * @type {number}
     * @memberof PrequalificationReportAllOf
     */
    'days'?: number;
    /**
     * \"true\" if the report covers more than 180 days
     * @type {boolean}
     * @memberof PrequalificationReportAllOf
     */
    'seasoned'?: boolean;
    /**
     * The sum of available balance for all of the accounts included in the report
     * @type {number}
     * @memberof PrequalificationReportAllOf
     */
    'consolidatedAvailableBalance'?: number;
    /**
     * A list of institution records, including information about the individual accounts in this report
     * @type {Array<ReportInstitution>}
     * @memberof PrequalificationReportAllOf
     */
    'institutions'?: Array<ReportInstitution>;
    /**
     * 
     * @type {PrequalificationReportAssetSummary}
     * @memberof PrequalificationReportAllOf
     */
    'assets'?: PrequalificationReportAssetSummary;
}

