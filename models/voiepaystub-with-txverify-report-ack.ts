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
import { VOIEPaystubWithTXVerifyReportAckAllOf } from './voiepaystub-with-txverify-report-ack-all-of';
import { VOIEWithTXVerifyReportConstraintsOut } from './voiewith-txverify-report-constraints-out';

/**
 * @type VOIEPaystubWithTXVerifyReportAck
 * A VOIE Paystub With TXVerify report being generated
 * @export
 */
export type VOIEPaystubWithTXVerifyReportAck = BaseReportAckWithPortfolioId & VOIEPaystubWithTXVerifyReportAckAllOf;


