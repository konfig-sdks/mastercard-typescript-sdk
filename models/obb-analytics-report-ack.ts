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


/**
 * Response given when analytics were generated successfully, providing the caller with a report ID which can be used to retrieve the report as JSON or a PDF.
 * @export
 * @interface ObbAnalyticsReportAck
 */
export interface ObbAnalyticsReportAck {
    /**
     * Title of the report
     * @type {string}
     * @memberof ObbAnalyticsReportAck
     */
    'title': string;
    /**
     * List of account IDs included in the report
     * @type {Array<number>}
     * @memberof ObbAnalyticsReportAck
     */
    'accountIds': Array<number>;
    /**
     * Business ID associated with the requested customer
     * @type {number}
     * @memberof ObbAnalyticsReportAck
     */
    'businessId'?: number;
    /**
     * Created date of balance analytics request
     * @type {string}
     * @memberof ObbAnalyticsReportAck
     */
    'createdDate': string;
    /**
     * A customer ID represented as a number. See Add Customer API for how to create a customer ID.
     * @type {number}
     * @memberof ObbAnalyticsReportAck
     */
    'customerId': number;
    /**
     * A report ID
     * @type {string}
     * @memberof ObbAnalyticsReportAck
     */
    'reportId': string;
    /**
     * PIN that may be used to access the report
     * @type {string}
     * @memberof ObbAnalyticsReportAck
     */
    'reportPin': string;
    /**
     * Name of requester
     * @type {string}
     * @memberof ObbAnalyticsReportAck
     */
    'requesterName'?: string;
}

