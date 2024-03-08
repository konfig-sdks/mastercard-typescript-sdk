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

import { ErrorMessage } from './error-message';

/**
 * Properties shared by all generated reports
 * @export
 * @interface BaseReportAck
 */
export interface BaseReportAck {
    /**
     * Title of the report
     * @type {string}
     * @memberof BaseReportAck
     */
    'title'?: string;
    /**
     * A report ID
     * @type {string}
     * @memberof BaseReportAck
     */
    'id'?: string;
    /**
     * The type of customer (\"active\" or \"testing\" or \"\" for all types)
     * @type {string}
     * @memberof BaseReportAck
     */
    'customerType'?: string;
    /**
     * A customer ID represented as a number. See Add Customer API for how to create a customer ID.
     * @type {number}
     * @memberof BaseReportAck
     */
    'customerId'?: number;
    /**
     * Finicity indicator to track all activity associated with this report
     * @type {string}
     * @memberof BaseReportAck
     */
    'requestId'?: string;
    /**
     * Name of a Finicity partner
     * @type {string}
     * @memberof BaseReportAck
     */
    'requesterName'?: string;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/). Note: If the report is retrieved on a day other than the day it was generated, on the header of the PDF version of the report there will be a \"Retrieved Date\" populated.
     * @type {number}
     * @memberof BaseReportAck
     */
    'createdDate'?: number;
    /**
     * A consumer ID. See Create Consumer API for how to create a consumer ID.
     * @type {string}
     * @memberof BaseReportAck
     */
    'consumerId'?: string;
    /**
     * Last 4 digits of a SSN
     * @type {string}
     * @memberof BaseReportAck
     */
    'consumerSsn'?: string;
    /**
     * A report type. Possible values:  * `voi`  * `voa`  * `voaHistory`  * `history`  * `voieTxVerify`  * `voieWithReport`  * `voieWithInterview`  * `paystatement`  * `preQualVoa`  * `assetSummary`  * `voie`  * `transactions`  * `statement`  * `voiePayroll`  * `voeTransactions`  * `voePayroll`  * `cfrp`  * `cfrb`  * `barpcra`  * `barpnoncra`  * `barbcra`  * `barbftc`  * `barbnoncra` 
     * @type {string}
     * @memberof BaseReportAck
     */
    'type'?: string;
    /**
     * A report generation status. Possible values:  * `inProgress`  * `success`  * `failure` 
     * @type {string}
     * @memberof BaseReportAck
     */
    'status'?: string;
    /**
     * In case errors occurred during the report generation
     * @type {Array<ErrorMessage>}
     * @memberof BaseReportAck
     */
    'errors'?: Array<ErrorMessage>;
}

