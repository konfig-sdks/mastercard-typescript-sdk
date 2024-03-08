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
 * 
 * @export
 * @interface ReportSummary
 */
export interface ReportSummary {
    /**
     * A report ID
     * @type {string}
     * @memberof ReportSummary
     */
    'id': string;
    /**
     * Finicity indicator to track all activity associated with this report
     * @type {string}
     * @memberof ReportSummary
     */
    'requestId': string;
    /**
     * Name of a Finicity partner
     * @type {string}
     * @memberof ReportSummary
     */
    'requesterName': string;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof ReportSummary
     */
    'createdDate': number;
    /**
     * A consumer ID. See Create Consumer API for how to create a consumer ID.
     * @type {string}
     * @memberof ReportSummary
     */
    'consumerId'?: string;
    /**
     * Last 4 digits of a SSN
     * @type {string}
     * @memberof ReportSummary
     */
    'consumerSsn'?: string;
    /**
     * A report type. Possible values:  * `voi`  * `voa`  * `voaHistory`  * `history`  * `voieTxVerify`  * `voieWithReport`  * `voieWithInterview`  * `paystatement`  * `preQualVoa`  * `assetSummary`  * `voie`  * `transactions`  * `statement`  * `voiePayroll`  * `voeTransactions`  * `voePayroll`  * `cfrp`  * `cfrb`  * `barpcra`  * `barpnoncra`  * `barbcra`  * `barbftc`  * `barbnoncra` 
     * @type {string}
     * @memberof ReportSummary
     */
    'type': string;
    /**
     * A report generation status. Possible values:  * `inProgress`  * `success`  * `failure` 
     * @type {string}
     * @memberof ReportSummary
     */
    'status': string;
}
