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
 * 
 * @export
 * @interface RegisteredApplication
 */
export interface RegisteredApplication {
    /**
     * Identifier to track the application registration from the App Registration and Get App Registration Status APIs, represented as a number
     * @type {number}
     * @memberof RegisteredApplication
     */
    'preAppId': number;
    /**
     * The status of an app registration request. \"A\" means approved. \"P\" means pending which is the status when initially submitted or when the app is modified and awaiting approval. \"R\" means rejected. If it is rejected there will be a note with the rejected reason.
     * @type {string}
     * @memberof RegisteredApplication
     */
    'status': string;
}
