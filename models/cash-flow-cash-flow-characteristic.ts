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

import { CashFlowMonthlyCashFlowCharacteristics } from './cash-flow-monthly-cash-flow-characteristics';

/**
 * 
 * @export
 * @interface CashFlowCashFlowCharacteristic
 */
export interface CashFlowCashFlowCharacteristic {
    /**
     * List of attributes for each month
     * @type {Array<CashFlowMonthlyCashFlowCharacteristics>}
     * @memberof CashFlowCashFlowCharacteristic
     */
    'monthlyCashFlowCharacteristics': Array<CashFlowMonthlyCashFlowCharacteristics>;
    /**
     * Average (Total Credits - Total Debits) for the account
     * @type {number}
     * @memberof CashFlowCashFlowCharacteristic
     */
    'averageMonthlyNet': number;
    /**
     * Average (Total Credits - Total Debits) without transfers for the account
     * @type {number}
     * @memberof CashFlowCashFlowCharacteristic
     */
    'averageMonthlyNetLessTransfers': number;
    /**
     * Sum of all monthly (Total Credits - Total Debits) each month for the account
     * @type {number}
     * @memberof CashFlowCashFlowCharacteristic
     */
    'twelveMonthTotalNet'?: number;
    /**
     * Sum of all monthly (Total Credits - Total Debits) without transfers for the account
     * @type {number}
     * @memberof CashFlowCashFlowCharacteristic
     */
    'twelveMonthTotalNetLessTransfers'?: number;
    /**
     * 6 Month Average (Total Credits - Total Debits)
     * @type {number}
     * @memberof CashFlowCashFlowCharacteristic
     */
    'sixMonthAverageTotalCreditsLessTotalDebits'?: number;
    /**
     * 6 Month Average (Total Credits - Total Debits) - (Without Transfers)
     * @type {number}
     * @memberof CashFlowCashFlowCharacteristic
     */
    'sixMonthAverageTotalCreditsLessTotalDebitsLessTransfers'?: number;
    /**
     * 2 Month Average (Total Credits - Total Debits)
     * @type {number}
     * @memberof CashFlowCashFlowCharacteristic
     */
    'twoMonthAverageTotalCreditsLessTotalDebits'?: number;
    /**
     * 2 Month Average (Total Credits - Total Debits) - (Without Transfers)
     * @type {number}
     * @memberof CashFlowCashFlowCharacteristic
     */
    'twoMonthAverageTotalCreditsLessTotalDebitsLessTransfers'?: number;
}

