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

import { ThirdPartyAccessReceiptData } from './third-party-access-receipt-data';

/**
 * An object representing the third party access key receipt    * `customerId`: This is recipient\'s customerId represented as a   pseudo identifier.   * `accountId`: This is the value provided to recipient   represented as a pseudo identifier for the accountId.
 * @export
 * @interface ThirdPartyAccessKeyReceiptData
 */
export interface ThirdPartyAccessKeyReceiptData {
    /**
     * 
     * @type {Array<ThirdPartyAccessReceiptData>}
     * @memberof ThirdPartyAccessKeyReceiptData
     */
    'data'?: Array<ThirdPartyAccessReceiptData>;
}
