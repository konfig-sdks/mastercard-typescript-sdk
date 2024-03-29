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

import { CashFlowPossibleLoanDepositsInstitutions } from './cash-flow-possible-loan-deposits-institutions';

/**
 * 
 * @export
 * @interface CashFlowPossibleLoanDeposits
 */
export interface CashFlowPossibleLoanDeposits {
    /**
     * A list of loan deposit institutions
     * @type {Array<CashFlowPossibleLoanDepositsInstitutions>}
     * @memberof CashFlowPossibleLoanDeposits
     */
    'institutions': Array<CashFlowPossibleLoanDepositsInstitutions>;
}

