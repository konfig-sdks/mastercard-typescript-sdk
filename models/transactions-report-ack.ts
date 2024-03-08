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

import { BaseReportAckWithPortfolioId } from './base-report-ack-with-portfolio-id';
import { ErrorMessage } from './error-message';
import { TransactionsReportAckAllOf } from './transactions-report-ack-all-of';
import { TransactionsReportConstraintsOut } from './transactions-report-constraints-out';

/**
 * @type TransactionsReportAck
 * A Transaction report being generated
 * @export
 */
export type TransactionsReportAck = BaseReportAckWithPortfolioId & TransactionsReportAckAllOf;


