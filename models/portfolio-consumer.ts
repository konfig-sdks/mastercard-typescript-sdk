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
 * @interface PortfolioConsumer
 */
export interface PortfolioConsumer {
    /**
     * A consumer ID. See Create Consumer API for how to create a consumer ID.
     * @type {string}
     * @memberof PortfolioConsumer
     */
    'id': string;
    /**
     * The first name of the account holder
     * @type {string}
     * @memberof PortfolioConsumer
     */
    'firstName': string;
    /**
     * The last name of the account holder
     * @type {string}
     * @memberof PortfolioConsumer
     */
    'lastName': string;
    /**
     * A customer ID represented as a number. See Add Customer API for how to create a customer ID.
     * @type {number}
     * @memberof PortfolioConsumer
     */
    'customerId': number;
    /**
     * A full SSN with or without hyphens
     * @type {string}
     * @memberof PortfolioConsumer
     */
    'ssn': string;
    /**
     * 
     * @type {Birthday}
     * @memberof PortfolioConsumer
     */
    'birthday': Birthday;
    /**
     * A generational or academic suffix
     * @type {string}
     * @memberof PortfolioConsumer
     */
    'suffix'?: string;
}

