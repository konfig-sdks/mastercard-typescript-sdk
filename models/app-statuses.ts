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

import { AppStatus } from './app-status';

/**
 * The response for the Get App Registration Status API which returns an array of status objects
 * @export
 * @interface AppStatuses
 */
export interface AppStatuses {
    /**
     * The total number of results
     * @type {number}
     * @memberof AppStatuses
     */
    'totalRecords': number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof AppStatuses
     */
    'totalPages': number;
    /**
     * The current page number
     * @type {number}
     * @memberof AppStatuses
     */
    'pageNumber': number;
    /**
     * The number of results per page
     * @type {number}
     * @memberof AppStatuses
     */
    'numberOfRecordsPerPage': number;
    /**
     * A list of applications with their statuses
     * @type {Array<AppStatus>}
     * @memberof AppStatuses
     */
    'applications': Array<AppStatus>;
}

