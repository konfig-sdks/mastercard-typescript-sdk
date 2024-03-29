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
import { ReportInstitution } from './report-institution';
import { VOIEPaystubWithStatementPayStatement } from './voiepaystub-with-statement-pay-statement';
import { VOIEPaystubWithTXVerifyReportAllOf } from './voiepaystub-with-txverify-report-all-of';

/**
 * @type VOIEPaystubWithTXVerifyReport
 * A VOIE Paystub With TXVerify report
 * @export
 */
export type VOIEPaystubWithTXVerifyReport = BaseReportAckWithPortfolioId & VOIEPaystubWithTXVerifyReportAllOf;


