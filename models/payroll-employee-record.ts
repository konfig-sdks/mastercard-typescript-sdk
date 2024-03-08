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

import { PayrollEmployeeAddress } from './payroll-employee-address';

/**
 * 
 * @export
 * @interface PayrollEmployeeRecord
 */
export interface PayrollEmployeeRecord {
    /**
     * Full name of the employee: first, middle (if stated), and last name
     * @type {string}
     * @memberof PayrollEmployeeRecord
     */
    'name': string;
    /**
     * First name of employee
     * @type {string}
     * @memberof PayrollEmployeeRecord
     */
    'givenName'?: string;
    /**
     * Middle name of employee, if stated
     * @type {string}
     * @memberof PayrollEmployeeRecord
     */
    'middleName'?: string;
    /**
     * Last name of employee
     * @type {string}
     * @memberof PayrollEmployeeRecord
     */
    'familyName'?: string;
    /**
     * Array of addresses
     * @type {Array<PayrollEmployeeAddress>}
     * @memberof PayrollEmployeeRecord
     */
    'address'?: Array<PayrollEmployeeAddress>;
}

