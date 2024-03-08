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

import { AccountOwnerDetails } from './account-owner-details';

/**
 * 
 * @export
 * @interface AccountOwnerHolders
 */
export interface AccountOwnerHolders {
    /**
     * List of account owners
     * @type {Array<AccountOwnerDetails>}
     * @memberof AccountOwnerHolders
     */
    'holders': Array<AccountOwnerDetails>;
}

