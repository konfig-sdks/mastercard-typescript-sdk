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

import { InsufficientFundsTransaction } from './insufficient-funds-transaction';

/**
 * Non-Sufficient Fund Fees
 * @export
 * @interface CashFlowInsufficientFundsFees
 */
export interface CashFlowInsufficientFundsFees {
    /**
     * Count of all NSF transactions during the report
     * @type {number}
     * @memberof CashFlowInsufficientFundsFees
     */
    'countOfTransactionsForTheReportTimePeriod'?: number;
    /**
     * Sum of all NSF transactions during the report
     * @type {number}
     * @memberof CashFlowInsufficientFundsFees
     */
    'sumOfTransactionsForTheReportTimePeriod'?: number;
    /**
     * Transactions categorized as NSF
     * @type {Array<InsufficientFundsTransaction>}
     * @memberof CashFlowInsufficientFundsFees
     */
    'transactions'?: Array<InsufficientFundsTransaction>;
}

