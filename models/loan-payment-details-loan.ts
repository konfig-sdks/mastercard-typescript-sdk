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
 * Loan details
 * @export
 * @interface LoanPaymentDetailsLoan
 */
export interface LoanPaymentDetailsLoan {
    /**
     * An account ID
     * @type {string}
     * @memberof LoanPaymentDetailsLoan
     */
    'accountId': string;
    /**
     * Institution\'s ID of the Student Loan
     * @type {string}
     * @memberof LoanPaymentDetailsLoan
     */
    'loanNumber': string;
    /**
     * The payment number given by the institution. This number is typically for manual payments. This is not an ACH payment number.
     * @type {string}
     * @memberof LoanPaymentDetailsLoan
     */
    'loanPaymentNumber': string;
    /**
     * The payment address to which send manual payments should be sent
     * @type {string}
     * @memberof LoanPaymentDetailsLoan
     */
    'loanPaymentAddress': string;
    /**
     * The payoff amount for the loan
     * @type {number}
     * @memberof LoanPaymentDetailsLoan
     */
    'loanFuturePayoffAmount'?: number;
    /**
     * The date to which the \"Future Payoff Amount\" applies
     * @type {string}
     * @memberof LoanPaymentDetailsLoan
     */
    'loanFuturePayoffDate'?: string;
}

