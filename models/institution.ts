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

import { Branding } from './branding';
import { InstitutionAddress } from './institution-address';

/**
 * A financial institution
 * @export
 * @interface Institution
 */
export interface Institution {
    /**
     * The ID of a financial institution, represented as a number
     * @type {number}
     * @memberof Institution
     */
    'id': number;
    /**
     * The name of the institution
     * @type {string}
     * @memberof Institution
     */
    'name'?: string;
    /**
     * \"true\": The institution is certified for the Transaction Aggregation product \"false\": The institution is decertified for the Transaction Aggregation product
     * @type {boolean}
     * @memberof Institution
     */
    'transAgg': boolean;
    /**
     * \"true\": The institution is certified for the ACH product \"false\": The institution is decertified for the ACH product
     * @type {boolean}
     * @memberof Institution
     */
    'ach': boolean;
    /**
     * \"true\": The institution is certified for the Statement Aggregation product \"false\": The institution is decertified for the Statement Aggregation product
     * @type {boolean}
     * @memberof Institution
     */
    'stateAgg': boolean;
    /**
     * \"true\": The institution is certified for the VOI product \"false\": The institution is decertified for the VOI product
     * @type {boolean}
     * @memberof Institution
     */
    'voi': boolean;
    /**
     * \"true\": The institution is certified for the VOA product \"false\": The institution is decertified for the VOA product
     * @type {boolean}
     * @memberof Institution
     */
    'voa': boolean;
    /**
     * \"true\": The institution is certified for the Account History Aggregation product \"false\": The institution is decertified for the Account History Aggregation product
     * @type {boolean}
     * @memberof Institution
     */
    'aha': boolean;
    /**
     * \"true\": The institution is certified for the Account Balance Check (ABC) product \"false\": The institution is decertified for the Account Balance Check (ABC) product
     * @type {boolean}
     * @memberof Institution
     */
    'availBalance': boolean;
    /**
     * \"true\": The institution is certified for the Account Owner product \"false\": The institution is decertified for the Account Owner product
     * @type {boolean}
     * @memberof Institution
     */
    'accountOwner': boolean;
    /**
     * \"true\": The institution is certified for the Student Loan Data product  \"false\": The institution is decertified for the Student Loan Data product
     * @type {boolean}
     * @memberof Institution
     */
    'studentLoanData'?: boolean;
    /**
     * \"true\": The institution is certified for the Loan Payment Detail product  \"false\": The institution is decertified for the Loan Payment Detail product
     * @type {boolean}
     * @memberof Institution
     */
    'loanPaymentDetails'?: boolean;
    /**
     * Values: Banking, Investments, Credit Cards/Accounts, Workplace Retirement, Mortgages and Loans, Insurance
     * @type {string}
     * @memberof Institution
     */
    'accountTypeDescription'?: string;
    /**
     * A phone number (max length 15).
     * @type {string}
     * @memberof Institution
     */
    'phone'?: string;
    /**
     * The URL of the institution\'s primary home page
     * @type {string}
     * @memberof Institution
     */
    'urlHomeApp'?: string;
    /**
     * The URL of the institution\'s login page
     * @type {string}
     * @memberof Institution
     */
    'urlLogonApp'?: string;
    /**
     * \"true\": The institution is an OAuth connection  \"false\": The institution isn\'t an OAuth connection
     * @type {boolean}
     * @memberof Institution
     */
    'oauthEnabled': boolean;
    /**
     * Institution\'s forgot password page
     * @type {string}
     * @memberof Institution
     */
    'urlForgotPassword'?: string;
    /**
     * Institution\'s signup page
     * @type {string}
     * @memberof Institution
     */
    'urlOnlineRegistration'?: string;
    /**
     * Institution\'s class
     * @type {string}
     * @memberof Institution
     */
    'class'?: string;
    /**
     * Special instructions given to customers for login
     * @type {string}
     * @memberof Institution
     */
    'specialText'?: string;
    /**
     * The time zone of the institution.
     * @type {string}
     * @memberof Institution
     */
    'timeZone'?: string;
    /**
     * Instructions given to the customer before they are sent to the institution website to login for OAuth institutions.  Note: this helps the customer to provide the proper permission for data needed for the application.
     * @type {Array<string>}
     * @memberof Institution
     */
    'specialInstructions'?: Array<string>;
    /**
     * The title of the special instructions, if one exists or is required.
     * @type {string}
     * @memberof Institution
     */
    'specialInstutionsTitle'?: string;
    /**
     * 
     * @type {InstitutionAddress}
     * @memberof Institution
     */
    'address'?: InstitutionAddress;
    /**
     * A currency code
     * @type {string}
     * @memberof Institution
     */
    'currency': string;
    /**
     * An email address
     * @type {string}
     * @memberof Institution
     */
    'email'?: string;
    /**
     * Status for the institution: \"online\", \"offline\", \"maintenance\", \"testing\"
     * @type {string}
     * @memberof Institution
     */
    'status': string;
    /**
     * The ID of a financial institution, represented as a number
     * @type {number}
     * @memberof Institution
     */
    'newInstitutionId'?: number;
    /**
     * 
     * @type {Branding}
     * @memberof Institution
     */
    'branding'?: Branding;
    /**
     * The ID of a financial institution, represented as a number
     * @type {number}
     * @memberof Institution
     */
    'oauthInstitutionId'?: number;
}

