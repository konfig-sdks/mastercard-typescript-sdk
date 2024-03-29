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

import { VOETransactionsReportIncomeStream } from './voetransactions-report-income-stream';

/**
 * 
 * @export
 * @interface VOETransactionsReportAccount
 */
export interface VOETransactionsReportAccount {
    /**
     * The ID of the account
     * @type {number}
     * @memberof VOETransactionsReportAccount
     */
    'id'?: number;
    /**
     * The account number from the institution (all digits except the last four are obfuscated)
     * @type {string}
     * @memberof VOETransactionsReportAccount
     */
    'number'?: string;
    /**
     * The name(s) of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report.
     * @type {string}
     * @memberof VOETransactionsReportAccount
     */
    'ownerName'?: string;
    /**
     * The mailing address of the account owner(s). This field is optional. If no owner information is available, this field will not appear in the report.
     * @type {string}
     * @memberof VOETransactionsReportAccount
     */
    'ownerAddress'?: string;
    /**
     * The account name from the institution
     * @type {string}
     * @memberof VOETransactionsReportAccount
     */
    'name'?: string;
    /**
     * One of the values from account types
     * @type {string}
     * @memberof VOETransactionsReportAccount
     */
    'type'?: string;
    /**
     * The status of the most recent aggregation attempt
     * @type {number}
     * @memberof VOETransactionsReportAccount
     */
    'aggregationStatusCode'?: number;
    /**
     * A list of income stream records
     * @type {Array<VOETransactionsReportIncomeStream>}
     * @memberof VOETransactionsReportAccount
     */
    'incomeStreams'?: Array<VOETransactionsReportIncomeStream>;
}

