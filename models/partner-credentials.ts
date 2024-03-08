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
 * @interface PartnerCredentials
 */
export interface PartnerCredentials {
    /**
     * Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)
     * @type {string}
     * @memberof PartnerCredentials
     */
    'partnerId': string;
    /**
     * Your Partner Secret displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)
     * @type {string}
     * @memberof PartnerCredentials
     */
    'partnerSecret': string;
}
