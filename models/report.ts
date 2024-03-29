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

import { AFBalanceAnalyticsReport } from './afbalance-analytics-report';
import { AFCashFlowAnalyticsReport } from './afcash-flow-analytics-report';
import { AnalyticsReportConstraintsOut } from './analytics-report-constraints-out';
import { BusinessDetails } from './business-details';
import { CashFlowCashFlowBalanceSummary } from './cash-flow-cash-flow-balance-summary';
import { CashFlowCashFlowCharacteristicsSummary } from './cash-flow-cash-flow-characteristics-summary';
import { CashFlowCashFlowCreditSummary } from './cash-flow-cash-flow-credit-summary';
import { CashFlowCashFlowDebitSummary } from './cash-flow-cash-flow-debit-summary';
import { CashFlowPossibleLoanDeposits } from './cash-flow-possible-loan-deposits';
import { CashFlowReport } from './cash-flow-report';
import { CustomerAnalytics } from './customer-analytics';
import { ErrorMessage } from './error-message';
import { PayStatementReport } from './pay-statement-report';
import { PayrollEmploymentHistoryVOIE } from './payroll-employment-history-voie';
import { PrequalificationReport } from './prequalification-report';
import { PrequalificationReportAssetSummary } from './prequalification-report-asset-summary';
import { ReportIncomeStreamSummary } from './report-income-stream-summary';
import { ReportInstitution } from './report-institution';
import { StatementReport } from './statement-report';
import { TransactionsReport } from './transactions-report';
import { VOAReport } from './voareport';
import { VOAWithIncomeReport } from './voawith-income-report';
import { VOEPayrollReport } from './voepayroll-report';
import { VOETransactionsReport } from './voetransactions-report';
import { VOIEPayrollReport } from './voiepayroll-report';
import { VOIEPaystubReport } from './voiepaystub-report';
import { VOIEPaystubWithStatementPayStatement } from './voiepaystub-with-statement-pay-statement';
import { VOIEPaystubWithTXVerifyReport } from './voiepaystub-with-txverify-report';
import { VOIReport } from './voireport';

/**
 * @type Report
 * A report
 * @export
 */
export type Report = AFBalanceAnalyticsReport & AFCashFlowAnalyticsReport & CashFlowReport & PayStatementReport & PrequalificationReport & StatementReport & TransactionsReport & VOAReport & VOAWithIncomeReport & VOEPayrollReport & VOETransactionsReport & VOIEPayrollReport & VOIEPaystubReport & VOIEPaystubWithTXVerifyReport & VOIReport;


