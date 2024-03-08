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

import { ThirdPartyAccessProduct } from './third-party-access-product';
import { ThirdPartyAccessProvenance } from './third-party-access-provenance';

/**
 * An object representing consent receipt
 * @export
 * @interface ThirdPartyAccessReceipt
 */
export interface ThirdPartyAccessReceipt {
    /**
     * A schema version of receipt
     * @type {string}
     * @memberof ThirdPartyAccessReceipt
     */
    'version'?: string;
    /**
     * Representation of the type of consent receipt
     * @type {number}
     * @memberof ThirdPartyAccessReceipt
     */
    'profile'?: number;
    /**
     * This is officially the Consent Receipt ID, but is aliased as the Access Key ID. This is a unique identifier managed by Finicity that points to the contents of this JSON document.
     * @type {string}
     * @memberof ThirdPartyAccessReceipt
     */
    'receiptId'?: string;
    /**
     * This is recipient\'s customerId represented as a pseudo identifier
     * @type {string}
     * @memberof ThirdPartyAccessReceipt
     */
    'customerId'?: string;
    /**
     * Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)
     * @type {string}
     * @memberof ThirdPartyAccessReceipt
     */
    'partnerId'?: string;
    /**
     * 
     * @type {Array<ThirdPartyAccessProduct>}
     * @memberof ThirdPartyAccessReceipt
     */
    'products'?: Array<ThirdPartyAccessProduct>;
    /**
     * 
     * @type {ThirdPartyAccessProvenance}
     * @memberof ThirdPartyAccessReceipt
     */
    'provenance'?: ThirdPartyAccessProvenance;
    /**
     * A date-time with time zone
     * @type {string}
     * @memberof ThirdPartyAccessReceipt
     */
    'timestamp'?: string;
}

