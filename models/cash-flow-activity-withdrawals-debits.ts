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
 * @interface CashFlowActivityWithdrawalsDebits
 */
export interface CashFlowActivityWithdrawalsDebits {
    /**
     * Date the withdrawal transaction was posted
     * @type {string}
     * @memberof CashFlowActivityWithdrawalsDebits
     */
    'date': string;
    /**
     * Description of transaction
     * @type {string}
     * @memberof CashFlowActivityWithdrawalsDebits
     */
    'transactionDescription'?: string;
    /**
     * Amount of the withdrawal
     * @type {number}
     * @memberof CashFlowActivityWithdrawalsDebits
     */
    'withdrawalsDebits': number;
}

