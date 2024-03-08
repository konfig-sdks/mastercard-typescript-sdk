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
 * @interface CashFlowMonthlyCashFlowBalances
 */
export interface CashFlowMonthlyCashFlowBalances {
    /**
     * One instance for each complete calendar month in the report
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowBalances
     */
    'month': number;
    /**
     * Min Daily Balance for each month
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowBalances
     */
    'minDailyBalance': number;
    /**
     * Max Daily Balance for each month
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowBalances
     */
    'maxDailyBalance': number;
    /**
     * Average Daily Balance for each month
     * @type {number}
     * @memberof CashFlowMonthlyCashFlowBalances
     */
    'averageDailyBalance': number;
    /**
     * Standard Deviation of Daily Balance for each month
     * @type {string}
     * @memberof CashFlowMonthlyCashFlowBalances
     */
    'standardDeviationOfDailyBalance'?: string;
    /**
     * Number of Days Negative Balance for each month
     * @type {string}
     * @memberof CashFlowMonthlyCashFlowBalances
     */
    'numberOfDaysNegativeBalance': string;
    /**
     * Number of Days positive balance for each month
     * @type {string}
     * @memberof CashFlowMonthlyCashFlowBalances
     */
    'numberOfDaysPositiveBalance': string;
}

