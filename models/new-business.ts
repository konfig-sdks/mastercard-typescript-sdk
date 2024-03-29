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

import { NewAddress } from './new-address';
import { PhoneNumberFormat } from './phone-number-format';

/**
 * 
 * @export
 * @interface NewBusiness
 */
export interface NewBusiness {
    /**
     * The legal name of the business
     * @type {string}
     * @memberof NewBusiness
     */
    'name': string;
    /**
     * Indicates whether a business owner is personally liable for a loan
     * @type {boolean}
     * @memberof NewBusiness
     */
    'personallyLiable': boolean;
    /**
     * 
     * @type {NewAddress}
     * @memberof NewBusiness
     */
    'address': NewAddress;
    /**
     * 
     * @type {PhoneNumberFormat}
     * @memberof NewBusiness
     */
    'phoneNumber': PhoneNumberFormat;
    /**
     * A URL for the business website
     * @type {string}
     * @memberof NewBusiness
     */
    'url'?: string;
    /**
     * An email address
     * @type {string}
     * @memberof NewBusiness
     */
    'email'?: string;
    /**
     * The business type eg LLC, Corp, S Corp, C Corp, B Corp, Sole Propriertorship, Nonprofit, etc.
     * @type {string}
     * @memberof NewBusiness
     */
    'type'?: string;
    /**
     * Provide details of the tax id for the business
     * @type {string}
     * @memberof NewBusiness
     */
    'taxId'?: string;
}

