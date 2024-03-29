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
 * A temporary access token to be passed in the `Finicity-App-Token` HTTP header of all subsequent API requests
 * @export
 * @interface AccessToken
 */
export interface AccessToken {
    /**
     * The access token value
     * @type {string}
     * @memberof AccessToken
     */
    'token': string;
}

