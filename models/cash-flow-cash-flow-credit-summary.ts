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

import { CashFlowMonthlyCashFlowCreditSummaries } from './cash-flow-monthly-cash-flow-credit-summaries';

/**
 * 
 * @export
 * @interface CashFlowCashFlowCreditSummary
 */
export interface CashFlowCashFlowCreditSummary {
    /**
     * List of attributes for each month
     * @type {Array<CashFlowMonthlyCashFlowCreditSummaries>}
     * @memberof CashFlowCashFlowCreditSummary
     */
    'monthlyCashFlowCreditSummaries': Array<CashFlowMonthlyCashFlowCreditSummaries>;
    /**
     * Sum of all credit transactions for each month for all accounts
     * @type {number}
     * @memberof CashFlowCashFlowCreditSummary
     */
    'twelveMonthCreditTotal': number;
    /**
     * Sum of all monthly credit transactions without transfers for all accounts
     * @type {number}
     * @memberof CashFlowCashFlowCreditSummary
     */
    'twelveMonthCreditTotalLessTransfers': number;
    /**
     * Six month sum of all credit transactions
     * @type {number}
     * @memberof CashFlowCashFlowCreditSummary
     */
    'sixMonthCreditTotal': number;
    /**
     * Six month sum of all monthly credit transactions without transfers for all accounts
     * @type {number}
     * @memberof CashFlowCashFlowCreditSummary
     */
    'sixMonthCreditTotalLessTransfers': number;
    /**
     * Two month sum of all credit transactions
     * @type {number}
     * @memberof CashFlowCashFlowCreditSummary
     */
    'twoMonthCreditTotal': number;
    /**
     * Two month sum of all monthly credit transactions without transfers for all accounts
     * @type {number}
     * @memberof CashFlowCashFlowCreditSummary
     */
    'twoMonthCreditTotalLessTransfers': number;
}

