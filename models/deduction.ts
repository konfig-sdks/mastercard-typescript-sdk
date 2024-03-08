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
 * @interface Deduction
 */
export interface Deduction {
    /**
     * The deduction line\'s deduction type description
     * @type {string}
     * @memberof Deduction
     */
    'description'?: string;
    /**
     * The normalized category of the deductions in the format [type][number]. The number is the will be the iterating number of the type\'s occurrence starting at one.
     * @type {string}
     * @memberof Deduction
     */
    'name'?: string;
    /**
     * The amount for the deduction line deducted from employee\'s pay for the specified pay period
     * @type {number}
     * @memberof Deduction
     */
    'amountCurrent'?: number;
    /**
     * The amount for the deduction line being deducted from the employee\'s pay for the current pay year
     * @type {number}
     * @memberof Deduction
     */
    'amountYTD'?: number;
    /**
     * Categorization based on the deduction line\'s description
     * @type {string}
     * @memberof Deduction
     */
    'type'?: string;
}
