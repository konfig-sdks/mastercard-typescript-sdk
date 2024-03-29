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

import { CustomerAccount } from './customer-account';

/**
 * A list of customer accounts
 * @export
 * @interface CustomerAccounts
 */
export interface CustomerAccounts {
    /**
     * List of customer accounts
     * @type {Array<CustomerAccount>}
     * @memberof CustomerAccounts
     */
    'accounts': Array<CustomerAccount>;
}

