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

import { ConsumerInfo } from './consumer-info';

/**
 * 
 * @export
 * @interface Borrower
 */
export interface Borrower {
    /**
     * A customer ID. See Add Customer API for how to create a customer ID.
     * @type {string}
     * @memberof Borrower
     */
    'customerId': string;
    /**
     * A consumer ID. See Create Consumer API for how to create a consumer ID.
     * @type {string}
     * @memberof Borrower
     */
    'consumerId': string;
    /**
     * \"primary\" or \"jointBorrower\"
     * @type {string}
     * @memberof Borrower
     */
    'type': string;
    /**
     * 
     * @type {ConsumerInfo}
     * @memberof Borrower
     */
    'optionalConsumerInfo'?: ConsumerInfo;
}

