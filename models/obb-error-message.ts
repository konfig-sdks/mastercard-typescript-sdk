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
 * OBB Error response message
 * @export
 * @interface ObbErrorMessage
 */
export interface ObbErrorMessage {
    /**
     * Error code
     * @type {number}
     * @memberof ObbErrorMessage
     */
    'errorCode': number;
    /**
     * Detailed reason about the source of the error
     * @type {string}
     * @memberof ObbErrorMessage
     */
    'message': string;
}
