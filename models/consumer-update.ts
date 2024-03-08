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
 * 
 * @export
 * @interface ConsumerUpdate
 */
export interface ConsumerUpdate {
    /**
     * The first name of the account holder
     * @type {string}
     * @memberof ConsumerUpdate
     */
    'firstName'?: string;
    /**
     * The last name of the account holder
     * @type {string}
     * @memberof ConsumerUpdate
     */
    'lastName'?: string;
    /**
     * A street address
     * @type {string}
     * @memberof ConsumerUpdate
     */
    'address'?: string;
    /**
     * City
     * @type {string}
     * @memberof ConsumerUpdate
     */
    'city'?: string;
    /**
     * State
     * @type {string}
     * @memberof ConsumerUpdate
     */
    'state'?: string;
    /**
     * A ZIP code
     * @type {string}
     * @memberof ConsumerUpdate
     */
    'zip'?: string;
    /**
     * A phone number (max length 15).
     * @type {string}
     * @memberof ConsumerUpdate
     */
    'phone'?: string;
    /**
     * A full SSN with or without hyphens
     * @type {string}
     * @memberof ConsumerUpdate
     */
    'ssn'?: string;
    /**
     * 
     * @type {Birthday}
     * @memberof ConsumerUpdate
     */
    'birthday'?: Birthday;
    /**
     * An email address
     * @type {string}
     * @memberof ConsumerUpdate
     */
    'email'?: string;
    /**
     * A generational or academic suffix
     * @type {string}
     * @memberof ConsumerUpdate
     */
    'suffix'?: string;
}
