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
import { ReportIncomeStreamSummary } from './report-income-stream-summary';
import { ReportInstitution } from './report-institution';
import { VOIReportAllOf } from './voireport-all-of';

/**
 * @type VOIReport
 * A VOI report
 * @export
 */
export type VOIReport = BaseReportAckWithPortfolioId & VOIReportAllOf;


