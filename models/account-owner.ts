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
 * Owner of a customer account
 * @export
 * @interface AccountOwner
 */
export interface AccountOwner {
    /**
     * The name of the account owner. Can be multiple account owners in one string. This is how the source data is returned from the institution.
     * @type {string}
     * @memberof AccountOwner
     */
    'ownerName': string;
    /**
     * A street address
     * @type {string}
     * @memberof AccountOwner
     */
    'ownerAddress': string;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof AccountOwner
     */
    'asOfDate'?: number;
}
