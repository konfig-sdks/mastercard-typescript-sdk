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
 * @interface InitiatedMicroDeposit
 */
export interface InitiatedMicroDeposit {
    /**
     * An account ID
     * @type {string}
     * @memberof InitiatedMicroDeposit
     */
    'accountId'?: string;
    /**
     * Micro entries successful initiation status
     * @type {string}
     * @memberof InitiatedMicroDeposit
     */
    'status'?: string;
    /**
     * Count of micro entries
     * @type {number}
     * @memberof InitiatedMicroDeposit
     */
    'depositCount'?: number;
    /**
     * Micro entries successful initiation description
     * @type {string}
     * @memberof InitiatedMicroDeposit
     */
    'statusDescription'?: string;
}

