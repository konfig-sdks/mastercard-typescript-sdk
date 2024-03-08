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

import { ObbWeekOfYear } from './obb-week-of-year';

/**
 * Weeks with zero transactions during the known history of the account
 * @export
 * @interface CashFlowNumWeeksZeros
 */
export interface CashFlowNumWeeksZeros {
    /**
     * Number of weeks during known history of account in which data was available
     * @type {number}
     * @memberof CashFlowNumWeeksZeros
     */
    'historicNumberOfWeeksWithDataAvailable': number;
    /**
     * Number of weeks during known history of account where zero transactions were posted
     * @type {number}
     * @memberof CashFlowNumWeeksZeros
     */
    'historicNumberOfWeeksZeroTransactions': number;
    /**
     * List of weeks with zero reported transactions
     * @type {Array<ObbWeekOfYear>}
     * @memberof CashFlowNumWeeksZeros
     */
    'historicWeeksWithZeroTransactions': Array<ObbWeekOfYear>;
}
