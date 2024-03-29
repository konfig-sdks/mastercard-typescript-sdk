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
 * Configuration for the Connect email\'s sent to customers
 * @export
 * @interface EmailOptions
 */
export interface EmailOptions {
    /**
     * The email address for the customer receiving the Connect email
     * @type {string}
     * @memberof EmailOptions
     */
    'to': string;
    /**
     * The name of a person or business sending the Connect email
     * @type {string}
     * @memberof EmailOptions
     */
    'from'?: string;
    /**
     * The support phone number listed in the email
     * @type {string}
     * @memberof EmailOptions
     */
    'supportPhone'?: string;
    /**
     * The subject line of the email. The default is \"Verify your Financial Information\".
     * @type {string}
     * @memberof EmailOptions
     */
    'subject'?: string;
    /**
     * The first name of the customer or both names of the customers for joint borrowers. Example: \"Marvin and Jenny\".
     * @type {string}
     * @memberof EmailOptions
     */
    'firstName'?: string;
    /**
     * The name of your company
     * @type {string}
     * @memberof EmailOptions
     */
    'institutionName'?: string;
    /**
     * The institution address to appear in the footer of the email
     * @type {string}
     * @memberof EmailOptions
     */
    'institutionAddress'?: string;
    /**
     * A signature for the email
     * @type {Array<string>}
     * @memberof EmailOptions
     */
    'signature'?: Array<string>;
}

