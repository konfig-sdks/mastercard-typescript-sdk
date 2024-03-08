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

import { CadenceDetails } from './cadence-details';
import { ReportTransaction } from './report-transaction';

/**
 * 
 * @export
 * @interface VOETransactionsReportIncomeStream
 */
export interface VOETransactionsReportIncomeStream {
    /**
     * Income stream ID
     * @type {string}
     * @memberof VOETransactionsReportIncomeStream
     */
    'id': string;
    /**
     * A human-readable name based on the `normalizedPayee` name of the transactions for this income stream
     * @type {string}
     * @memberof VOETransactionsReportIncomeStream
     */
    'name': string;
    /**
     * Possible values: \"ACTIVE\", \"INACTIVE\"
     * @type {string}
     * @memberof VOETransactionsReportIncomeStream
     */
    'status': string;
    /**
     * Possible values: \"HIGH\", \"MODERATE\", \"LOW\", \"NO\"
     * @type {string}
     * @memberof VOETransactionsReportIncomeStream
     */
    'estimateInclusion': string;
    /**
     * Level of confidence that the deposit stream represents income (example: 85%)
     * @type {number}
     * @memberof VOETransactionsReportIncomeStream
     */
    'confidence': number;
    /**
     * 
     * @type {CadenceDetails}
     * @memberof VOETransactionsReportIncomeStream
     */
    'cadence': CadenceDetails;
    /**
     * The number of days since the last credit transaction for the particular income stream
     * @type {number}
     * @memberof VOETransactionsReportIncomeStream
     */
    'daysSinceLastTransaction': number;
    /**
     * The next expected credit transaction date for the particular income stream, based on the cadence
     * @type {number}
     * @memberof VOETransactionsReportIncomeStream
     */
    'nextExpectedTransactionDate': number;
    /**
     * The number of months the income transactions are observed
     * @type {number}
     * @memberof VOETransactionsReportIncomeStream
     */
    'incomeStreamMonths'?: number;
    /**
     * A list of transaction records
     * @type {Array<ReportTransaction>}
     * @memberof VOETransactionsReportIncomeStream
     */
    'transactions': Array<ReportTransaction>;
}

