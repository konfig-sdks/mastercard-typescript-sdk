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


/**
 * Additional customer account details. Not all data points will return for each account type. You can see the account type that each data point will return for in descriptions. The data point are also subject to availability by the institution.
 * @export
 * @interface CustomerAccountDetail
 */
export interface CustomerAccountDetail {
    /**
     * (Mortgage/Loan) Description of loan
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'description'?: string;
    /**
     * (All Account Types) Most recent date of the following information. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'dateAsOf'?: number;
    /**
     * (Checking/Savings/CD/MoneyMarket) and (Mortgage/Loan) The available balance (typically the current balance with adjustments for any pending transactions)
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'availableBalanceAmount'?: number;
    /**
     * (Checking/Savings/CD/MoneyMarket) Date when account was opened. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'openDate'?: number;
    /**
     * (Checking/Savings/CD/MoneyMarket) Start date of period. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'periodStartDate'?: number;
    /**
     * End date of period. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'periodEndDate'?: number;
    /**
     * (Checking/Savings/CD/MoneyMarket) The APY for the current period interest rate
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'periodInterestRate'?: number;
    /**
     * (Checking/Savings/CD/MoneyMarket) Amount deposited in period
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'periodDepositAmount'?: number;
    /**
     * (Checking/Savings/CD/MoneyMarket) Interest accrued during the current period
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'periodInterestAmount'?: number;
    /**
     * (Checking/Savings/CD/MoneyMarket) Interest accrued year-to-date
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'interestYtdAmount'?: number;
    /**
     * (Checking/Savings/CD/MoneyMarket) Interest earned in prior year
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'interestPriorYtdAmount'?: number;
    /**
     * (Checking/Savings/CD/MoneyMarket) Maturity date of account type. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'maturityDate'?: number;
    /**
     * (Credit Card/Line Of Credit) and (Mortgage/Loan) The account\'s current interest rate
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'interestRate'?: string;
    /**
     * (Credit Card/Line Of Credit) The available credit (typically the credit limit minus the current balance)
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'creditAvailableAmount'?: number;
    /**
     * (Credit Card/Line Of Credit) The account\'s credit limit
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'creditMaxAmount'?: number;
    /**
     * (Credit Card/Line Of Credit) Currently available cash advance
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'cashAdvanceAvailableAmount'?: number;
    /**
     * (Credit Card/Line Of Credit) Maximum cash advance amount
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'cashAdvanceMaxAmount'?: number;
    /**
     * (Credit Card/Line Of Credit) Balance of current cash advance
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'cashAdvanceBalance'?: number;
    /**
     * (Credit Card/Line Of Credit) Interest rate for cash advances
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'cashAdvanceInterestRate'?: number;
    /**
     * (Credit Card/Line Of Credit) and (Investment) Current balance
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'currentBalance'?: number;
    /**
     * (Credit Card/Line Of Credit) and (Mortgage/Loan) Minimum payment due
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'paymentMinAmount'?: number;
    /**
     * (Credit Card/Line Of Credit) Due date for the next payment. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'paymentDueDate'?: number;
    /**
     * (Credit Card/Line Of Credit) Prior balance in last statement
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'previousBalance'?: number;
    /**
     * (Credit Card/Line Of Credit) Start date of statement period. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'statementStartDate'?: number;
    /**
     * (Credit Card/Line Of Credit) End date of statement period. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'statementEndDate'?: number;
    /**
     * (Credit Card/Line Of Credit) Purchase amount of statement period
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'statementPurchaseAmount'?: number;
    /**
     * (Credit Card/Line Of Credit) Finance amount of statement period
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'statementFinanceAmount'?: number;
    /**
     * (Credit Card/Line Of Credit) Credit amount applied in statement period
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'statementCreditAmount'?: number;
    /**
     * (Credit Card/Line Of Credit) Earned reward balance
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'rewardEarnedBalance'?: number;
    /**
     * (Credit Card/Line Of Credit) Balance past due
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'pastDueAmount'?: number;
    /**
     * (Credit Card/Line Of Credit) and (Mortgage/Loan) The amount received in the last payment
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'lastPaymentAmount'?: number;
    /**
     * (Credit Card/Line Of Credit) The date of the last payment. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'lastPaymentDate'?: number;
    /**
     * (Credit Card/Line Of Credit) Balance of statement at close
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'statementCloseBalance'?: number;
    /**
     * (Mortgage/Loan) Length of loan in months
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'termOfMl'?: string;
    /**
     * (Mortgage/Loan) Holder of the mortgage or loan
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'mlHolderName'?: string;
    /**
     * (Mortgage/Loan) Late fee charged
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'lateFeeAmount'?: number;
    /**
     * (Mortgage/Loan) The amount required to payoff the loan
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'payoffAmount'?: number;
    /**
     * (Mortgage/Loan) Date of final payment. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'payoffAmountDate'?: number;
    /**
     * (Mortgage/Loan) Original date of loan maturity. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'originalMaturityDate'?: number;
    /**
     * (Mortgage/Loan) The principal balance
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'principalBalance'?: number;
    /**
     * (Mortgage/Loan) The escrow balance
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'escrowBalance'?: number;
    /**
     * (Mortgage/Loan) Period of interest
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'interestPeriod'?: string;
    /**
     * (Mortgage/Loan) Original loan amount
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'initialMlAmount'?: number;
    /**
     * (Mortgage/Loan) Original date of loan. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'initialMlDate'?: number;
    /**
     * (Mortgage/Loan) Amount towards principal in next payment
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'nextPaymentPrincipalAmount'?: number;
    /**
     * (Mortgage/Loan) Amount of interest in next payment
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'nextPaymentInterestAmount'?: number;
    /**
     * (Mortgage/Loan) Minimum payment due
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'nextPayment'?: number;
    /**
     * (Mortgage/Loan) Due date for the next payment. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'nextPaymentDate'?: number;
    /**
     * (Mortgage/Loan) Due date of last payment. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'lastPaymentDueDate'?: number;
    /**
     * (Mortgage/Loan) The date of the last payment. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'lastPaymentReceiveDate'?: number;
    /**
     * (Mortgage/Loan) Amount towards principal in last payment
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'lastPaymentPrincipalAmount'?: number;
    /**
     * (Mortgage/Loan) Amount of interest in last payment
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'lastPaymentInterestAmount'?: number;
    /**
     * (Mortgage/Loan) Amount towards escrow in last payment
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'lastPaymentEscrowAmount'?: number;
    /**
     * (Mortgage/Loan) Amount of last fee in last payment
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'lastPaymentLastFeeAmount'?: number;
    /**
     * (Mortgage/Loan) Amount of late charge in last payment
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'lastPaymentLateCharge'?: number;
    /**
     * (Mortgage/Loan) Principal paid year-to-date
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'ytdPrincipalPaid'?: number;
    /**
     * (Mortgage/Loan) Interest paid year-to-date
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'ytdInterestPaid'?: number;
    /**
     * (Mortgage/Loan) Insurance paid year-to-date
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'ytdInsurancePaid'?: number;
    /**
     * (Mortgage/Loan) Tax paid year-to-date
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'ytdTaxPaid'?: number;
    /**
     * (Mortgage/Loan) Enrolled in autopay (F/Y)
     * @type {boolean}
     * @memberof CustomerAccountDetail
     */
    'autoPayEnrolled'?: boolean;
    /**
     * Margin trading indicator (true / false)
     * @type {boolean}
     * @memberof CustomerAccountDetail
     */
    'marginAllowed'?: boolean;
    /**
     * Cash account allowed indicator (true / false)
     * @type {boolean}
     * @memberof CustomerAccountDetail
     */
    'cashAccountAllowed'?: boolean;
    /**
     * (Mortgage/Loan) Collateral on loan
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'collateral'?: string;
    /**
     * (Mortgage/Loan) Current school
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'currentSchool'?: string;
    /**
     * (Mortgage/Loan) First payment due date. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'firstPaymentDate'?: number;
    /**
     * (Mortgage/Loan) First mortgage (F/Y)
     * @type {boolean}
     * @memberof CustomerAccountDetail
     */
    'firstMortgage'?: boolean;
    /**
     * (Mortgage/Loan) Frequency of payments (monthly, etc.)
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'loanPaymentFreq'?: string;
    /**
     * (Mortgage/Loan) Original school
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'originalSchool'?: string;
    /**
     * (Mortgage/Loan) Recurring payment amount
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'recurringPaymentAmount'?: number;
    /**
     * (Mortgage/Loan) Owner of loan
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'lender'?: string;
    /**
     * (Mortgage/Loan) Ending balance
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'endingBalanceAmount'?: number;
    /**
     * (Mortgage/Loan) Type of loan term
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'loanTermType'?: string;
    /**
     * (Mortgage/Loan) Number of payments made
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'paymentsMade'?: number;
    /**
     * (Mortgage/Loan) Balloon payment amount
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'balloonAmount'?: number;
    /**
     * (Mortgage/Loan) Projected interest on the loan
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'projectedInterest'?: number;
    /**
     * (Mortgage/Loan) Interest paid since inception of loan (life to date)
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'interestPaidLtd'?: number;
    /**
     * (Mortgage/Loan) Type of interest rate
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'interestRateType'?: string;
    /**
     * (Mortgage/Loan) Type of loan payment
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'loanPaymentType'?: string;
    /**
     * (Mortgage/Loan) Type of repayment plan for the student loan
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'repaymentPlan'?: string;
    /**
     * (Mortgage/Loan) Number of payments remaining before loan is paid off
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'paymentsRemaining'?: number;
    /**
     * (Investment) Net interest earned after deducting interest paid out
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'marginBalance'?: number;
    /**
     * (Investment) Sum of short balance
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'shortBalance'?: number;
    /**
     * (Investment) Amount available for cash withdrawal
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'availableCashBalance'?: number;
    /**
     * (Investment) amount payable to an investor at maturity
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'maturityValueAmount'?: number;
    /**
     * (Investment) Vested amount in account
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'vestedBalance'?: number;
    /**
     * (Investment) Employer matched contributions
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'empMatchAmount'?: number;
    /**
     * (Investment) Employer pretax contribution amount
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'empPretaxContribAmount'?: number;
    /**
     * (Investment) Employer pretax contribution amount year to date
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'empPretaxContribAmountYtd'?: number;
    /**
     * (Investment) Total year to date contributions
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'contribTotalYtd'?: number;
    /**
     * (Investment) Cash balance of account
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'cashBalanceAmount'?: number;
    /**
     * (Investment) Pre-tax amount of total balance
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'preTaxAmount'?: number;
    /**
     * (Investment) After-tax amount of total balance
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'afterTaxAmount'?: number;
    /**
     * (Investment) Amount matched
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'matchAmount'?: number;
    /**
     * (Investment) Amount of balance for profit sharing
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'profitSharingAmount'?: number;
    /**
     * (Investment) Amount of balance rolled over from original account (401k, etc.)
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'rolloverAmount'?: number;
    /**
     * (Investment) Other vested amount
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'otherVestAmount'?: number;
    /**
     * (Investment) Other nonvested amount
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'otherNonvestAmount'?: number;
    /**
     * (Investment) Current loan balance
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'currentLoanBalance'?: number;
    /**
     * (Investment) Interest rate of loan
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'loanRate'?: number;
    /**
     * (Investment) Money available to buy securities
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'buyPower'?: number;
    /**
     * (Investment) Life to date of money rolled over
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'rolloverLtd'?: number;
    /**
     * (Student Loan) The federal unique loan identifying number
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'loanAwardId'?: string;
    /**
     * (Student Loan) The original interest rate to which the loan was disbursed, in APY
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'originalInterestRate'?: number;
    /**
     * (Student Loan) The financial institution guarantor of the loan (who will pay the loan amount to the owner if the borrower defaults)
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'guarantor'?: string;
    /**
     * (Student Loan) Owner of the loan
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'owner'?: string;
    /**
     * (Student Loan) The indication of the presence of an interest subsidy (i.e. subsidized)
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'interestSubsidyType'?: string;
    /**
     * (Student Loan) The total outstanding interest balance
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'interestBalance'?: number;
    /**
     * (Student Loan) The number of months still outstanding on a loan
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'remainingTermOfMl'?: number;
    /**
     * (Student Loan) Initial interest rate of loan
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'initialInterestRate'?: number;
    /**
     * (Student Loan) The total outstanding fees balance
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'feesBalance'?: number;
    /**
     * (Student Loan) Loan interest paid year-to-date
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'loanYtdInterestPaid'?: number;
    /**
     * (Student Loan) Loan fees paid year-to-date
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'loanYtdFeesPaid'?: number;
    /**
     * (Student Loan) Loan principal paid year-to-date
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'loanYtdPrincipalPaid'?: number;
    /**
     * (Student Loan) The repayment status phase (i.e. In School, Grace, Repayment, Deferment, Forbearance)
     * @type {string}
     * @memberof CustomerAccountDetail
     */
    'loanStatus'?: string;
    /**
     * (Student Loan) The start date of the current status. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'loanStatusStartDate'?: number;
    /**
     * (Student Loan) The end date of the current status. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'loanStatusEndDate'?: number;
    /**
     * (Student Loan) The interest rate of multiple interest rates and balances at the group level, in APY
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'weightedInterestRate'?: number;
    /**
     * (Student Loan) The start date of the current repayment plan. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'repaymentPlanStartDate'?: number;
    /**
     * (Student Loan) The end date of the current repayment plan. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'repaymentPlanEndDate'?: number;
    /**
     * (Student Loan) The expected date of the payoff date. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'expectedPayoffDate'?: number;
    /**
     * (Student Loan) The date the borrower graduated or dropped below half-time enrollment in school. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'outOfSchoolDate'?: number;
    /**
     * (Student Loan) The date the loan enters into repayment. A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'convertToRepayment'?: number;
    /**
     * (Student Loan) The number of days past a due date that a payment should have been made
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'daysDelinquent'?: number;
    /**
     * (Student Loan) The total amount paid towards the principal balance
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'totalPrincipalPaid'?: number;
    /**
     * (Student Loan) The total amount paid towards interest
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'totalInterestPaid'?: number;
    /**
     * (Student Loan) The total amount paid
     * @type {number}
     * @memberof CustomerAccountDetail
     */
    'totalAmountPaid'?: number;
}

