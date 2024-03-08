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

import { ReportCustomField } from './report-custom-field';
import { StatementData } from './statement-data';

/**
 * 
 * @export
 * @interface StatementReportConstraints
 */
export interface StatementReportConstraints {
    /**
     * 
     * @type {StatementData}
     * @memberof StatementReportConstraints
     */
    'statementReportData': StatementData;
    /**
     * The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\'d like associated with the report when it\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \"true\" or \"false\". * \"true\": (default) display the custom field in the PDF report * \"false\": don\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.
     * @type {Array<ReportCustomField>}
     * @memberof StatementReportConstraints
     */
    'reportCustomFields'?: Array<ReportCustomField>;
}

