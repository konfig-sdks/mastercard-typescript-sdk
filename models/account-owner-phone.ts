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
 * Consumer phone
 * @export
 * @interface AccountOwnerPhone
 */
export interface AccountOwnerPhone {
    /**
     * The account owner\'s phone type:  * \"HOME\"  * \"BUSINESS\"  * \"CELL\"  * \"FAX\"
     * @type {string}
     * @memberof AccountOwnerPhone
     */
    'type'?: string;
    /**
     * Country calling code of the phone number as defined by ITU-T E.123 and E.164 international standards (max length 3)\".
     * @type {string}
     * @memberof AccountOwnerPhone
     */
    'country'?: string;
    /**
     * A phone number (max length 15).
     * @type {string}
     * @memberof AccountOwnerPhone
     */
    'phone'?: string;
}

