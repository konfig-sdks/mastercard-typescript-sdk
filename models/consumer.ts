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

import { Birthday } from './birthday';

/**
 * A finicity consumer record
 * @export
 * @interface Consumer
 */
export interface Consumer {
    /**
     * A consumer ID. See Create Consumer API for how to create a consumer ID.
     * @type {string}
     * @memberof Consumer
     */
    'id': string;
    /**
     * The first name of the account holder
     * @type {string}
     * @memberof Consumer
     */
    'firstName': string;
    /**
     * The last name of the account holder
     * @type {string}
     * @memberof Consumer
     */
    'lastName': string;
    /**
     * A customer ID represented as a number. See Add Customer API for how to create a customer ID.
     * @type {number}
     * @memberof Consumer
     */
    'customerId': number;
    /**
     * A street address
     * @type {string}
     * @memberof Consumer
     */
    'address': string;
    /**
     * City
     * @type {string}
     * @memberof Consumer
     */
    'city': string;
    /**
     * State
     * @type {string}
     * @memberof Consumer
     */
    'state': string;
    /**
     * A ZIP code
     * @type {string}
     * @memberof Consumer
     */
    'zip': string;
    /**
     * A phone number (max length 15).
     * @type {string}
     * @memberof Consumer
     */
    'phone': string;
    /**
     * Last 4 digits of a SSN
     * @type {string}
     * @memberof Consumer
     */
    'ssn': string;
    /**
     * 
     * @type {Birthday}
     * @memberof Consumer
     */
    'birthday': Birthday;
    /**
     * An email address
     * @type {string}
     * @memberof Consumer
     */
    'email': string;
    /**
     * A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof Consumer
     */
    'createdDate': number;
    /**
     * A generational or academic suffix
     * @type {string}
     * @memberof Consumer
     */
    'suffix'?: string;
}
