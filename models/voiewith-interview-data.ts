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

import { TxVerifyInterview } from './tx-verify-interview';

/**
 * 
 * @export
 * @interface VOIEWithInterviewData
 */
export interface VOIEWithInterviewData {
    /**
     * An array of `TxVerifyInterview` objects
     * @type {Array<TxVerifyInterview>}
     * @memberof VOIEWithInterviewData
     */
    'txVerifyInterview': Array<TxVerifyInterview>;
    /**
     * Field to indicate whether to extract the earnings on all pay statements
     * @type {boolean}
     * @memberof VOIEWithInterviewData
     */
    'extractEarnings'?: boolean;
    /**
     * Field to indicate whether to extract the deductions on all pay statements
     * @type {boolean}
     * @memberof VOIEWithInterviewData
     */
    'extractDeductions'?: boolean;
    /**
     * Field to indicate whether to extract the direct deposits on all pay statements
     * @type {boolean}
     * @memberof VOIEWithInterviewData
     */
    'extractDirectDeposit'?: boolean;
}

