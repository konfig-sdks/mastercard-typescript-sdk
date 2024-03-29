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
 * @interface CashFlowMonthlyCashFlowDebitSummaries
 */
export interface CashFlowMonthlyCashFlowDebitSummaries {
    /**
     * One instance for each complete calendar month in the report
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowDebitSummaries
     */
    'month': number;
    /**
     * Number of Debits by month across all accounts
     * @type {string}
     * @memberof CashFlowMonthlyCashFlowDebitSummaries
     */
    'numberOfDebits': string;
    /**
     * Total Amount of Debits by month across all accounts
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowDebitSummaries
     */
    'totalDebitsAmount': number;
    /**
     * Largest Debit by month
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowDebitSummaries
     */
    'largestDebit': number;
    /**
     * Number of Debits by month (less transfers)
     * @type {string}
     * @memberof CashFlowMonthlyCashFlowDebitSummaries
     */
    'numberOfDebitsLessTransfers': string;
    /**
     * Total amount of debits by month (less transfers)
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowDebitSummaries
     */
    'totalDebitsAmountLessTransfers': number;
    /**
     * The average debit amount
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowDebitSummaries
     */
    'averageDebitAmount': number;
}

