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
import { CashFlowCashFlowBalanceSummary } from './cash-flow-cash-flow-balance-summary';
import { CashFlowCashFlowCharacteristicsSummary } from './cash-flow-cash-flow-characteristics-summary';
import { CashFlowCashFlowCreditSummary } from './cash-flow-cash-flow-credit-summary';
import { CashFlowCashFlowDebitSummary } from './cash-flow-cash-flow-debit-summary';
import { CashFlowPossibleLoanDeposits } from './cash-flow-possible-loan-deposits';
import { CashFlowReportAllOf } from './cash-flow-report-all-of';
import { ErrorMessage } from './error-message';
import { ReportInstitution } from './report-institution';

/**
 * @type CashFlowReport
 * A Cash Flow report
 * @export
 */
export type CashFlowReport = BaseReportAckWithPortfolioId & CashFlowReportAllOf;


