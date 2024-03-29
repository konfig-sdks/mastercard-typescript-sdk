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
 * @interface CashFlowMonthlycashflowDebits
 */
export interface CashFlowMonthlycashflowDebits {
    /**
     * One instance for each complete calendar month in the report
     * @type {number}
     * @memberof CashFlowMonthlycashflowDebits
     */
    'month': number;
    /**
     * Number of Debits by month
     * @type {string}
     * @memberof CashFlowMonthlycashflowDebits
     */
    'numberOfDebits': string;
    /**
     * Total Amount of Debits by month
     * @type {number}
     * @memberof CashFlowMonthlycashflowDebits
     */
    'totalDebitsAmount': number;
    /**
     * Largest Debit by month
     * @type {number}
     * @memberof CashFlowMonthlycashflowDebits
     */
    'largestDebit': number;
    /**
     * Number of Debits by month (less transfers)
     * @type {string}
     * @memberof CashFlowMonthlycashflowDebits
     */
    'numberOfDebitsLessTransfers': string;
    /**
     * Total amount of debits by month (less transfers)
     * @type {number}
     * @memberof CashFlowMonthlycashflowDebits
     */
    'totalDebitsAmountLessTransfers': number;
    /**
     * The average debit amount
     * @type {number}
     * @memberof CashFlowMonthlycashflowDebits
     */
    'averageDebitAmount': number;
}

