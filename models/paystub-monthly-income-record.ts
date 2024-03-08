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
 * @interface PaystubMonthlyIncomeRecord
 */
export interface PaystubMonthlyIncomeRecord {
    /**
     * The estimated monthly base pay amount for the employment from the paystub, calculated by Finicity
     * @type {number}
     * @memberof PaystubMonthlyIncomeRecord
     */
    'estimatedMonthlyBasePay'?: number;
    /**
     * The estimated monthly overtime pay amount for the employment from the paystub, calculated by Finicity
     * @type {number}
     * @memberof PaystubMonthlyIncomeRecord
     */
    'estimatedMonthlyOvertimePay'?: number;
    /**
     * The estimated monthly bonus pay amount for the employment from the paystub, calculated by Finicity
     * @type {number}
     * @memberof PaystubMonthlyIncomeRecord
     */
    'estimatedMonthlyBonusPay'?: number;
    /**
     * The estimated commission bonus pay amount for the employment from the paystub, calculated by Finicity
     * @type {number}
     * @memberof PaystubMonthlyIncomeRecord
     */
    'estimatedMonthlyCommissionPay'?: number;
}
