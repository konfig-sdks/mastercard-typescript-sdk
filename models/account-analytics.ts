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

import { StateAttribute } from './state-attribute';
import { StreamModel } from './stream-model';
import { TransactionalAttribute } from './transactional-attribute';

/**
 * Analytics calculated for one account in the report.
 * @export
 * @interface AccountAnalytics
 */
export interface AccountAnalytics {
    /**
     * List of calculated transactional attributes
     * @type {Array<TransactionalAttribute>}
     * @memberof AccountAnalytics
     */
    'transactionalAttributes': Array<TransactionalAttribute>;
    /**
     * List of calculated state attributes
     * @type {Array<StateAttribute>}
     * @memberof AccountAnalytics
     */
    'stateAttributes': Array<StateAttribute>;
    /**
     * List of generated streams
     * @type {Array<StreamModel>}
     * @memberof AccountAnalytics
     */
    'streams': Array<StreamModel>;
}
