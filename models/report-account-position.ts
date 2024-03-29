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
 * @interface ReportAccountPosition
 */
export interface ReportAccountPosition {
    /**
     * The id of the investment position
     * @type {number}
     * @memberof ReportAccountPosition
     */
    'id'?: number;
    /**
     * What currency the account operates in
     * @type {string}
     * @memberof ReportAccountPosition
     */
    'currency'?: string;
    /**
     * The investment position’s market ticker symbol
     * @type {string}
     * @memberof ReportAccountPosition
     */
    'symbol'?: string;
    /**
     * The security name for the investment holding
     * @type {string}
     * @memberof ReportAccountPosition
     */
    'securityName'?: string;
    /**
     * The number of units of the holding
     * @type {number}
     * @memberof ReportAccountPosition
     */
    'units'?: number;
    /**
     * Market value of an investment position at the time of retrieval
     * @type {number}
     * @memberof ReportAccountPosition
     */
    'marketValue'?: number;
    /**
     * The current price of the investment holding
     * @type {number}
     * @memberof ReportAccountPosition
     */
    'currentPrice'?: number;
    /**
     * Type of security of the investment position
     * @type {number}
     * @memberof ReportAccountPosition
     */
    'securityType'?: number;
}

