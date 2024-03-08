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
 * Details of the financial institution this account is home to
 * @export
 * @interface ObbInstitution
 */
export interface ObbInstitution {
    /**
     * URL of the institution logo icon for reporting
     * @type {string}
     * @memberof ObbInstitution
     */
    'institutionIconUrl'?: string;
    /**
     * ID of the financial institution
     * @type {number}
     * @memberof ObbInstitution
     */
    'institutionId': number;
    /**
     * Name of the financial institution
     * @type {string}
     * @memberof ObbInstitution
     */
    'institutionName'?: string;
    /**
     * Primary branding color of the institution, in hex color format
     * @type {string}
     * @memberof ObbInstitution
     */
    'institutionPrimaryColor'?: string;
}
