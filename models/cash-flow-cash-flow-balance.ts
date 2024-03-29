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

import { CashFlowMonthlyCashFlowBalances } from './cash-flow-monthly-cash-flow-balances';

/**
 * 
 * @export
 * @interface CashFlowCashFlowBalance
 */
export interface CashFlowCashFlowBalance {
    /**
     * List of attributes for each month
     * @type {Array<CashFlowMonthlyCashFlowBalances>}
     * @memberof CashFlowCashFlowBalance
     */
    'monthlyCashFlowBalances': Array<CashFlowMonthlyCashFlowBalances>;
    /**
     * Min daily balance across entire transaction history
     * @type {number}
     * @memberof CashFlowCashFlowBalance
     */
    'minDailyBalance': number;
    /**
     * Max Daily Balance across entire transaction history
     * @type {number}
     * @memberof CashFlowCashFlowBalance
     */
    'maxDailyBalance': number;
    /**
     * Average Daily Balance across twelve months for the account
     * @type {number}
     * @memberof CashFlowCashFlowBalance
     */
    'twelveMonthAverageDailyBalance': number;
    /**
     * Average Daily Balance across six months for the account
     * @type {number}
     * @memberof CashFlowCashFlowBalance
     */
    'sixMonthAverageDailyBalance': number;
    /**
     * Average Daily Balance across two months for the account
     * @type {number}
     * @memberof CashFlowCashFlowBalance
     */
    'twoMonthAverageDailyBalance': number;
    /**
     * Standard Deviation of Daily Balance across twelve months for the account
     * @type {string}
     * @memberof CashFlowCashFlowBalance
     */
    'twelveMonthStandardDeviationOfDailyBalance': string;
    /**
     * Standard Deviation of Daily Balance across six months for the account
     * @type {string}
     * @memberof CashFlowCashFlowBalance
     */
    'sixMonthStandardDeviationOfDailyBalance'?: string;
    /**
     * Standard Deviation of Daily Balance across two months for the account
     * @type {string}
     * @memberof CashFlowCashFlowBalance
     */
    'twoMonthStandardDeviationOfDailyBalance': string;
    /**
     * Number of Days Negative Balance over entire transaction history
     * @type {string}
     * @memberof CashFlowCashFlowBalance
     */
    'numberDaysNegativeBalance'?: string;
    /**
     * Number of Days positive balance over entire transaction history
     * @type {string}
     * @memberof CashFlowCashFlowBalance
     */
    'numberOfDaysPositiveBalance': string;
}

