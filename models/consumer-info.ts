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
 * The SSN and date of birth of a consumer
 * @export
 * @interface ConsumerInfo
 */
export interface ConsumerInfo {
    /**
     * The consumer\'s full SSN without hyphens
     * @type {string}
     * @memberof ConsumerInfo
     */
    'ssn': string;
    /**
     * The consumer\'s date of birth in Unix epoch time (in seconds). See: Handling Epoch Dates and Times. The timestamp should be set at the start of day of birth.
     * @type {number}
     * @memberof ConsumerInfo
     */
    'dob'?: number;
}

