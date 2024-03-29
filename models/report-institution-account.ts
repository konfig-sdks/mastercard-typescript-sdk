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

import { AccountAnalytics } from './account-analytics';
import { AccountDetailsTxBased } from './account-details-tx-based';
import { AnalyticsReportsAccount } from './analytics-reports-account';
import { CashFlowCashFlowBalance } from './cash-flow-cash-flow-balance';
import { CashFlowCashFlowCharacteristic } from './cash-flow-cash-flow-characteristic';
import { CashFlowCashFlowCredit } from './cash-flow-cash-flow-credit';
import { CashFlowCashFlowDebit } from './cash-flow-cash-flow-debit';
import { CashFlowReportAccount } from './cash-flow-report-account';
import { PrequalificationReportAccount } from './prequalification-report-account';
import { PrequalificationReportAssetSummary } from './prequalification-report-asset-summary';
import { ReportAccountPosition } from './report-account-position';
import { ReportTransaction } from './report-transaction';
import { ReportTransactionNewTxBased } from './report-transaction-new-tx-based';
import { TransactionsReportAccount } from './transactions-report-account';
import { VOAReportAccount } from './voareport-account';
import { VOAWithIncomeReportAccount } from './voawith-income-report-account';
import { VOETransactionsReportAccount } from './voetransactions-report-account';
import { VOIETXVerifyReportAccount } from './voietxverify-report-account';
import { VOIETXVerifyReportIncomeStream } from './voietxverify-report-income-stream';
import { VOIReportAccount } from './voireport-account';

/**
 * @type ReportInstitutionAccount
 * An account record
 * @export
 */
export type ReportInstitutionAccount = AnalyticsReportsAccount & CashFlowReportAccount & PrequalificationReportAccount & TransactionsReportAccount & VOAReportAccount & VOAWithIncomeReportAccount & VOETransactionsReportAccount & VOIETXVerifyReportAccount & VOIReportAccount;


