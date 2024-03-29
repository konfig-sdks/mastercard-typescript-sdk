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

import { ObbAverageWeeklyBalance } from './obb-average-weekly-balance';

/**
 * Report of average account balance week over week and count of weeks where the average balance increased
 * @export
 * @interface ObbNumWeeksAverageBalanceIncreasing
 */
export interface ObbNumWeeksAverageBalanceIncreasing {
    /**
     * Average weekly balances over the known history
     * @type {Array<ObbAverageWeeklyBalance>}
     * @memberof ObbNumWeeksAverageBalanceIncreasing
     */
    'historicAverageWeeklyBalances': Array<ObbAverageWeeklyBalance>;
    /**
     * Number of weeks during the known history where the average balance of the account increased week over week
     * @type {number}
     * @memberof ObbNumWeeksAverageBalanceIncreasing
     */
    'historicNumberOfWeeksAverageBalanceIncreasing': number;
    /**
     * Number of weeks during the history in which data was available
     * @type {number}
     * @memberof ObbNumWeeksAverageBalanceIncreasing
     */
    'historicNumberOfWeeksWithDataAvailable': number;
}

