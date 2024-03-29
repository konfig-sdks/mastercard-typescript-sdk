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

import { DirectDeposit } from './direct-deposit';
import { Employee } from './employee';
import { Employer } from './employer';
import { PayStat } from './pay-stat';
import { PayStatementForVoie } from './pay-statement-for-voie';
import { PaystubTxVerifyMonthlyIncomeRecord } from './paystub-tx-verify-monthly-income-record';
import { VOIEPaystubWithStatementPayStatementAllOf } from './voiepaystub-with-statement-pay-statement-all-of';

/**
 * @type VOIEPaystubWithStatementPayStatement
 * @export
 */
export type VOIEPaystubWithStatementPayStatement = PayStatementForVoie & VOIEPaystubWithStatementPayStatementAllOf;


