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
 * @interface PaystubTxVerifyMonthlyIncomeRecord
 */
export interface PaystubTxVerifyMonthlyIncomeRecord {
    /**
     * The estimated monthly base pay amount for the employment from the paystub, calculated by Finicity
     * @type {number}
     * @memberof PaystubTxVerifyMonthlyIncomeRecord
     */
    'estimatedMonthlyBasePay'?: number;
    /**
     * The estimated monthly overtime pay amount for the employment from the paystub, calculated by Finicity
     * @type {number}
     * @memberof PaystubTxVerifyMonthlyIncomeRecord
     */
    'estimatedMonthlyOvertimePay'?: number;
    /**
     * The estimated monthly bonus pay amount for the employment from the paystub, calculated by Finicity
     * @type {number}
     * @memberof PaystubTxVerifyMonthlyIncomeRecord
     */
    'estimatedMonthlyBonusPay'?: number;
    /**
     * The estimated commission bonus pay amount for the employment from the paystub, calculated by Finicity
     * @type {number}
     * @memberof PaystubTxVerifyMonthlyIncomeRecord
     */
    'estimatedMonthlyCommissionPay'?: number;
    /**
     * The estimated monthly other pay amount for the employment from the paystub, calculated by Finicity
     * @type {number}
     * @memberof PaystubTxVerifyMonthlyIncomeRecord
     */
    'estimatedMonthlyOtherPay'?: number;
    /**
     * The estimated monthly total pay amount for the employment from the paystub, calculated by Finicity
     * @type {number}
     * @memberof PaystubTxVerifyMonthlyIncomeRecord
     */
    'estimatedMonthlyTotalPay'?: number;
}

