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
 * @interface CashFlowMonthlyCashFlowCredits
 */
export interface CashFlowMonthlyCashFlowCredits {
    /**
     * One instance for each complete calendar month in the report
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    'month': number;
    /**
     * Number of credits by month
     * @type {string}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    'numberOfCredits': string;
    /**
     * Total amount of credits by month
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    'totalCreditsAmount': number;
    /**
     * Largest credit by month
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    'largestCredit': number;
    /**
     * Number of credits by month (less transfers)
     * @type {string}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    'numberOfCreditsLessTransfers': string;
    /**
     * Total amount of credits by month (less transfers)
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    'totalCreditsAmountLessTransfers': number;
    /**
     * The average credit amount
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    'averageCreditAmount': number;
    /**
     * The estimated number of loan deposits
     * @type {string}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    'estimatedNumberOfLoanDeposits': string;
    /**
     * The estimated loan deposit amount
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowCredits
     */
    'estimatedLoanDepositAmount': number;
}

