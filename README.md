<div align="left">

[![Visit Mastercard](./header.png)](https://finicity.com)

# [Mastercard](https://finicity.com)<a id="mastercard"></a>

OpenAPI specification for Finicity APIs.

Open Banking solutions in the US are provided by Finicity, a Mastercard
company.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`mastercard.accountValidationAssistance.getMicroEntriesDetails`](#mastercardaccountvalidationassistancegetmicroentriesdetails)
  * [`mastercard.accountValidationAssistance.initiateMicroEntries`](#mastercardaccountvalidationassistanceinitiatemicroentries)
  * [`mastercard.accountValidationAssistance.verifyMicroEntries`](#mastercardaccountvalidationassistanceverifymicroentries)
  * [`mastercard.accounts.getById`](#mastercardaccountsgetbyid)
  * [`mastercard.accounts.getByInstitutionLogin`](#mastercardaccountsgetbyinstitutionlogin)
  * [`mastercard.accounts.getCustomerAccounts`](#mastercardaccountsgetcustomeraccounts)
  * [`mastercard.accounts.getCustomerInstitutionAccounts`](#mastercardaccountsgetcustomerinstitutionaccounts)
  * [`mastercard.accounts.refreshCustomerAccountByInstitutionLogin`](#mastercardaccountsrefreshcustomeraccountbyinstitutionlogin)
  * [`mastercard.accounts.refreshCustomerAggregation`](#mastercardaccountsrefreshcustomeraggregation)
  * [`mastercard.accounts.refreshCustomerByInstitutionLogin`](#mastercardaccountsrefreshcustomerbyinstitutionlogin)
  * [`mastercard.accounts.refreshCustomerData`](#mastercardaccountsrefreshcustomerdata)
  * [`mastercard.accounts.removeByCustomerIdAndAccountId`](#mastercardaccountsremovebycustomeridandaccountid)
  * [`mastercard.accounts.removeByInstitutionLogin`](#mastercardaccountsremovebyinstitutionlogin)
  * [`mastercard.accountsSimple.getBasicInfo`](#mastercardaccountssimplegetbasicinfo)
  * [`mastercard.accountsSimple.getBasicInfo_0`](#mastercardaccountssimplegetbasicinfo_0)
  * [`mastercard.accountsSimple.getBasicInfo_1`](#mastercardaccountssimplegetbasicinfo_1)
  * [`mastercard.accountsSimple.getBasicInfo_2`](#mastercardaccountssimplegetbasicinfo_2)
  * [`mastercard.appRegistration.assignApplications`](#mastercardappregistrationassignapplications)
  * [`mastercard.appRegistration.createNewApplication`](#mastercardappregistrationcreatenewapplication)
  * [`mastercard.appRegistration.getApplicationStatus`](#mastercardappregistrationgetapplicationstatus)
  * [`mastercard.appRegistration.migrateInstitutionLoginAccounts`](#mastercardappregistrationmigrateinstitutionloginaccounts)
  * [`mastercard.appRegistration.updateRegistration`](#mastercardappregistrationupdateregistration)
  * [`mastercard.assets.getBinaryFile`](#mastercardassetsgetbinaryfile)
  * [`mastercard.authentication.createAccessToken`](#mastercardauthenticationcreateaccesstoken)
  * [`mastercard.authentication.modifyPartnerSecret`](#mastercardauthenticationmodifypartnersecret)
  * [`mastercard.balanceAnalytics.generateAnalyticsReport`](#mastercardbalanceanalyticsgenerateanalyticsreport)
  * [`mastercard.balanceAnalytics.generateFcraAnalyticsReport`](#mastercardbalanceanalyticsgeneratefcraanalyticsreport)
  * [`mastercard.balanceAnalytics.generateReport`](#mastercardbalanceanalyticsgeneratereport)
  * [`mastercard.balanceAnalytics.getReportData`](#mastercardbalanceanalyticsgetreportdata)
  * [`mastercard.balanceAnalytics.getReportDataFcra`](#mastercardbalanceanalyticsgetreportdatafcra)
  * [`mastercard.bankStatements.generateReport`](#mastercardbankstatementsgeneratereport)
  * [`mastercard.bankStatements.getCustomerStatementInPdf`](#mastercardbankstatementsgetcustomerstatementinpdf)
  * [`mastercard.bankStatements.getMultipleStatements`](#mastercardbankstatementsgetmultiplestatements)
  * [`mastercard.businessesApi.createNewBusiness`](#mastercardbusinessesapicreatenewbusiness)
  * [`mastercard.businessesApi.getDetailsByCustomerId`](#mastercardbusinessesapigetdetailsbycustomerid)
  * [`mastercard.businessesApi.getDetailsById`](#mastercardbusinessesapigetdetailsbyid)
  * [`mastercard.businessesApi.updateById`](#mastercardbusinessesapiupdatebyid)
  * [`mastercard.cashFlow.generatePersonalReport`](#mastercardcashflowgeneratepersonalreport)
  * [`mastercard.cashFlow.generateReportBusiness`](#mastercardcashflowgeneratereportbusiness)
  * [`mastercard.cashFlowAnalytics.generateAnalytics`](#mastercardcashflowanalyticsgenerateanalytics)
  * [`mastercard.cashFlowAnalytics.generateFcraAnalyticsReport`](#mastercardcashflowanalyticsgeneratefcraanalyticsreport)
  * [`mastercard.cashFlowAnalytics.generateReport`](#mastercardcashflowanalyticsgeneratereport)
  * [`mastercard.cashFlowAnalytics.getReportData`](#mastercardcashflowanalyticsgetreportdata)
  * [`mastercard.cashFlowAnalytics.getReportDataFcra`](#mastercardcashflowanalyticsgetreportdatafcra)
  * [`mastercard.connect.fixUrlGeneration`](#mastercardconnectfixurlgeneration)
  * [`mastercard.connect.generateJointBorrowerUrl`](#mastercardconnectgeneratejointborrowerurl)
  * [`mastercard.connect.generateLiteUrl`](#mastercardconnectgenerateliteurl)
  * [`mastercard.connect.generateUrl`](#mastercardconnectgenerateurl)
  * [`mastercard.connect.sendConnectEmail`](#mastercardconnectsendconnectemail)
  * [`mastercard.connect.sendEmailJointBorrower`](#mastercardconnectsendemailjointborrower)
  * [`mastercard.connect.verifyMicroEntryMicrodeposits`](#mastercardconnectverifymicroentrymicrodeposits)
  * [`mastercard.consumers.createConsumerRecord`](#mastercardconsumerscreateconsumerrecord)
  * [`mastercard.consumers.getByCustomerId`](#mastercardconsumersgetbycustomerid)
  * [`mastercard.consumers.getById`](#mastercardconsumersgetbyid)
  * [`mastercard.consumers.modifyById`](#mastercardconsumersmodifybyid)
  * [`mastercard.customerAuthorizationDetails.getAuthorizationDetails`](#mastercardcustomerauthorizationdetailsgetauthorizationdetails)
  * [`mastercard.customers.enrollActiveCustomer`](#mastercardcustomersenrollactivecustomer)
  * [`mastercard.customers.enrollTestingCustomer`](#mastercardcustomersenrolltestingcustomer)
  * [`mastercard.customers.findEnrolledUsers`](#mastercardcustomersfindenrolledusers)
  * [`mastercard.customers.getById`](#mastercardcustomersgetbyid)
  * [`mastercard.customers.getWithAppDataById`](#mastercardcustomersgetwithappdatabyid)
  * [`mastercard.customers.modifyById`](#mastercardcustomersmodifybyid)
  * [`mastercard.customers.removeById`](#mastercardcustomersremovebyid)
  * [`mastercard.institutions.getBrandingById`](#mastercardinstitutionsgetbrandingbyid)
  * [`mastercard.institutions.getByIdDetails`](#mastercardinstitutionsgetbyiddetails)
  * [`mastercard.institutions.getCertifiedInstitutionsWithRssd`](#mastercardinstitutionsgetcertifiedinstitutionswithrssd)
  * [`mastercard.institutions.listCertifiedInstitutions`](#mastercardinstitutionslistcertifiedinstitutions)
  * [`mastercard.institutions.searchFinancialInstitutions`](#mastercardinstitutionssearchfinancialinstitutions)
  * [`mastercard.payStatements.uploadForCustomer`](#mastercardpaystatementsuploadforcustomer)
  * [`mastercard.paymentHistory.generateCustomerPaymentReport`](#mastercardpaymenthistorygeneratecustomerpaymentreport)
  * [`mastercard.paymentHistory.generateFcraPaymentReport`](#mastercardpaymenthistorygeneratefcrapaymentreport)
  * [`mastercard.paymentHistory.getReportData`](#mastercardpaymenthistorygetreportdata)
  * [`mastercard.paymentHistory.getReportDataFcra`](#mastercardpaymenthistorygetreportdatafcra)
  * [`mastercard.payments.getAccountOwnerDetails`](#mastercardpaymentsgetaccountownerdetails)
  * [`mastercard.payments.getAccountOwnerDetails_0`](#mastercardpaymentsgetaccountownerdetails_0)
  * [`mastercard.payments.getAchDetails`](#mastercardpaymentsgetachdetails)
  * [`mastercard.payments.getAvailableBalanceLive`](#mastercardpaymentsgetavailablebalancelive)
  * [`mastercard.payments.getLatestCachedBalance`](#mastercardpaymentsgetlatestcachedbalance)
  * [`mastercard.payments.getLoanPaymentDetails`](#mastercardpaymentsgetloanpaymentdetails)
  * [`mastercard.portfolios.getMostRecentReports`](#mastercardportfoliosgetmostrecentreports)
  * [`mastercard.portfolios.getPortfolioByConsumer`](#mastercardportfoliosgetportfoliobyconsumer)
  * [`mastercard.reports.byConsumerId`](#mastercardreportsbyconsumerid)
  * [`mastercard.reports.byCustomerId`](#mastercardreportsbycustomerid)
  * [`mastercard.reports.getByConsumerAndId`](#mastercardreportsgetbyconsumerandid)
  * [`mastercard.reports.getStatus`](#mastercardreportsgetstatus)
  * [`mastercard.thirdPartyAccess.generateKey`](#mastercardthirdpartyaccessgeneratekey)
  * [`mastercard.thirdPartyAccess.revokePartnersAccess`](#mastercardthirdpartyaccessrevokepartnersaccess)
  * [`mastercard.thirdPartyAccess.updateAccess`](#mastercardthirdpartyaccessupdateaccess)
  * [`mastercard.transactions.get24MonthsHistoryAndGenerateReport`](#mastercardtransactionsget24monthshistoryandgeneratereport)
  * [`mastercard.transactions.getAllCustomerTransactions`](#mastercardtransactionsgetallcustomertransactions)
  * [`mastercard.transactions.getById`](#mastercardtransactionsgetbyid)
  * [`mastercard.transactions.getCustomerAccountTransactions`](#mastercardtransactionsgetcustomeraccounttransactions)
  * [`mastercard.transactions.loadHistoricTransactionsForCustomerAccount`](#mastercardtransactionsloadhistorictransactionsforcustomeraccount)
  * [`mastercard.txPush.deleteSubscription`](#mastercardtxpushdeletesubscription)
  * [`mastercard.txPush.disableNotifications`](#mastercardtxpushdisablenotifications)
  * [`mastercard.txPush.injectTestTransaction`](#mastercardtxpushinjecttesttransaction)
  * [`mastercard.txPush.subscribeNotifications`](#mastercardtxpushsubscribenotifications)
  * [`mastercard.verifyAssets.customerVOAReport`](#mastercardverifyassetscustomervoareport)
  * [`mastercard.verifyAssets.generateVOAWithIncomeReport`](#mastercardverifyassetsgeneratevoawithincomereport)
  * [`mastercard.verifyAssets.getAssetSummary`](#mastercardverifyassetsgetassetsummary)
  * [`mastercard.verifyAssets.getCheckingSavingsInvestmentAccounts`](#mastercardverifyassetsgetcheckingsavingsinvestmentaccounts)
  * [`mastercard.verifyIncomeAndEmployment.createVOIReport`](#mastercardverifyincomeandemploymentcreatevoireport)
  * [`mastercard.verifyIncomeAndEmployment.generatePayStatementReport`](#mastercardverifyincomeandemploymentgeneratepaystatementreport)
  * [`mastercard.verifyIncomeAndEmployment.generateVOETransactionsReport`](#mastercardverifyincomeandemploymentgeneratevoetransactionsreport)
  * [`mastercard.verifyIncomeAndEmployment.generateVOIEPaystubWithTxVerifyReport`](#mastercardverifyincomeandemploymentgeneratevoiepaystubwithtxverifyreport)
  * [`mastercard.verifyIncomeAndEmployment.generateVoePayrollReport`](#mastercardverifyincomeandemploymentgeneratevoepayrollreport)
  * [`mastercard.verifyIncomeAndEmployment.generateVoiePaystubReport`](#mastercardverifyincomeandemploymentgeneratevoiepaystubreport)
  * [`mastercard.verifyIncomeAndEmployment.refreshVOIEPayrollReport`](#mastercardverifyincomeandemploymentrefreshvoiepayrollreport)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Mastercard&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Mastercard } from "mastercard-typescript-sdk";

const mastercard = new Mastercard({
  // Defining the base path is optional and defaults to https://api.finicity.com
  // basePath: "https://api.finicity.com",
  finicityAppKey: "API_KEY",
  finicityAppToken: "API_KEY",
});

const getMicroEntriesDetailsResponse =
  await mastercard.accountValidationAssistance.getMicroEntriesDetails({
    customerId: "1005061234",
    accountId: "5011648377",
  });

console.log(getMicroEntriesDetailsResponse);
```

## Reference<a id="reference"></a>


### `mastercard.accountValidationAssistance.getMicroEntriesDetails`<a id="mastercardaccountvalidationassistancegetmicroentriesdetails"></a>

Fetch the micro entries details.
`customerId` and `accountId` are the identifiers of the customer and account receiving the micro entries.

  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMicroEntriesDetailsResponse =
  await mastercard.accountValidationAssistance.getMicroEntriesDetails({
    customerId: "1005061234",
    accountId: "5011648377",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

#### 🔄 Return<a id="🔄-return"></a>

[MicroDepositDetails](./models/micro-deposit-details.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/microentry/v1/customers/{customerId}/accounts/{accountId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.accountValidationAssistance.initiateMicroEntries`<a id="mastercardaccountvalidationassistanceinitiatemicroentries"></a>

Initiate the micro entries to customer's account.

Two random micro amounts less than a dollar each will be deposited to provided customer's account.

  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const initiateMicroEntriesResponse =
  await mastercard.accountValidationAssistance.initiateMicroEntries({
    customerId: "1005061234",
    institutionLoginId: "1007302745",
    receiver: {
      routingNumber: "123456789",
      accountNumber: "123456",
      accountType: "checking",
      name: "Bob Smith",
      memo: "micro deposit transfer",
    },
    callbackUrl: "https://www.mydomain.com/listener",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### receiver: [`Receiver`](./models/receiver.ts)<a id="receiver-receivermodelsreceiverts"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### institutionLoginId: `string`<a id="institutionloginid-string"></a>

An institution login ID (from the account record)

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A callback URL where to receive micro deposit notifications

#### 🔄 Return<a id="🔄-return"></a>

[InitiatedMicroDeposit](./models/initiated-micro-deposit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/microentry/v1/customers/{customerId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.accountValidationAssistance.verifyMicroEntries`<a id="mastercardaccountvalidationassistanceverifymicroentries"></a>

Verify the micro entries as received by customer in customer's account.
Customer needs to verify the micro amounts received in customer's account. `customerId` and `accountId` are the identifiers of the customer and account  receiving the micro entries.

  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyMicroEntriesResponse =
  await mastercard.accountValidationAssistance.verifyMicroEntries({
    customerId: "1005061234",
    accountId: "5011648377",
    amounts: [0.12, 0.15],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amounts: `number`[]<a id="amounts-number"></a>

The list of amounts to be verified

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

#### 🔄 Return<a id="🔄-return"></a>

[VerifiedMicroDeposit](./models/verified-micro-deposit.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/microentry/v1/customers/{customerId}/accounts/{accountId}/amounts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.accounts.getById`<a id="mastercardaccountsgetbyid"></a>

Get a customer account by ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await mastercard.accounts.getById({
  customerId: "1005061234",
  accountId: "5011648377",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

#### 🔄 Return<a id="🔄-return"></a>

[CustomerAccount](./models/customer-account.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v2/customers/{customerId}/accounts/{accountId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.accounts.getByInstitutionLogin`<a id="mastercardaccountsgetbyinstitutionlogin"></a>

Get all accounts associated with the given institution login. All accounts returned are accessible by a single set of credentials on a single institution.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByInstitutionLoginResponse =
  await mastercard.accounts.getByInstitutionLogin({
    customerId: "1005061234",
    institutionLoginId: "1007302745",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### institutionLoginId: `string`<a id="institutionloginid-string"></a>

The institution login ID

#### 🔄 Return<a id="🔄-return"></a>

[CustomerAccounts](./models/customer-accounts.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.accounts.getCustomerAccounts`<a id="mastercardaccountsgetcustomeraccounts"></a>

Get all accounts owned by the given customer.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomerAccountsResponse =
  await mastercard.accounts.getCustomerAccounts({
    customerId: "1005061234",
    status: "pending",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### status: `string`<a id="status-string"></a>

A filter to fetch account in the given status

##### accountType: `string`<a id="accounttype-string"></a>

A filter to fetch accounts for the given type. Currently supported types: \"ava\"

#### 🔄 Return<a id="🔄-return"></a>

[CustomerAccounts](./models/customer-accounts.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.accounts.getCustomerInstitutionAccounts`<a id="mastercardaccountsgetcustomerinstitutionaccounts"></a>

Get all active accounts owned by the given customer at the given institution.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomerInstitutionAccountsResponse =
  await mastercard.accounts.getCustomerInstitutionAccounts({
    customerId: "1005061234",
    institutionId: 4222,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### institutionId: `number`<a id="institutionid-number"></a>

The institution ID

#### 🔄 Return<a id="🔄-return"></a>

[CustomerAccounts](./models/customer-accounts.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/institutions/{institutionId}/accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.accounts.refreshCustomerAccountByInstitutionLogin`<a id="mastercardaccountsrefreshcustomeraccountbyinstitutionlogin"></a>

Refresh account and transaction data for all accounts associated with a given 'institutionLoginId` with a connection to the institution. Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day.

Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.

Note: This service will be used for dynamic billing tiers ASD, AFD and ATD.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const refreshCustomerAccountByInstitutionLoginResponse =
  await mastercard.accounts.refreshCustomerAccountByInstitutionLogin({
    customerId: "1005061234",
    institutionLoginId: "1007302745",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### institutionLoginId: `string`<a id="institutionloginid-string"></a>

The institution login ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v2/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.accounts.refreshCustomerAggregation`<a id="mastercardaccountsrefreshcustomeraggregation"></a>

Refresh account and transaction data for all accounts associated with the  given `customerId` with a connection to the institution.

Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day. Because many financial institutions only post transactions once per day, calling Refresh services repeatedly is usually a waste of resources and is not recommended.

Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.

The recommended timeout setting for this request is 120 seconds in order to receive a response. However, you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.

Note: This service is not available for all tiers of dynamic billing.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const refreshCustomerAggregationResponse =
  await mastercard.accounts.refreshCustomerAggregation({
    customerId: "1005061234",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

#### 🔄 Return<a id="🔄-return"></a>

[CustomerAccounts](./models/customer-accounts.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/accounts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.accounts.refreshCustomerByInstitutionLogin`<a id="mastercardaccountsrefreshcustomerbyinstitutionlogin"></a>

Refresh account and transaction data for all accounts associated with a given `institutionLoginId` with a connection to the institution.

Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day. Because many financial institutions only post transactions once per day, calling Refresh repeatedly is usually a waste of resources and is not recommended.

Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.

The recommended timeout setting for this request is 120 seconds in order to receive a response. However, you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.

Note: This service is not available for all tiers of dynamic billing.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const refreshCustomerByInstitutionLoginResponse =
  await mastercard.accounts.refreshCustomerByInstitutionLogin({
    customerId: "1005061234",
    institutionLoginId: "1007302745",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### institutionLoginId: `string`<a id="institutionloginid-string"></a>

The institution login ID

#### 🔄 Return<a id="🔄-return"></a>

[CustomerAccounts](./models/customer-accounts.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.accounts.refreshCustomerData`<a id="mastercardaccountsrefreshcustomerdata"></a>

Refresh account and transaction data for all accounts associated with the  given `customerId` with a connection to the institution.

Client apps are not permitted to automate calls to the Refresh services. Active accounts are automatically refreshed by Finicity once per day.
Apps may call Refresh services for a specific customer when there is a specific business case for the need of data that is up to date as of the moment. Please discuss with your account manager and systems engineer for further clarification.

Note: This service will be used for dynamic billing tiers ASD, AFD and ATD.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const refreshCustomerDataResponse =
  await mastercard.accounts.refreshCustomerData({
    customerId: "1005061234",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v2/customers/{customerId}/accounts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.accounts.removeByCustomerIdAndAccountId`<a id="mastercardaccountsremovebycustomeridandaccountid"></a>

Remove the given account from Finicity aggregation.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByCustomerIdAndAccountIdResponse =
  await mastercard.accounts.removeByCustomerIdAndAccountId({
    customerId: "1005061234",
    accountId: "5011648377",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/accounts/{accountId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.accounts.removeByInstitutionLogin`<a id="mastercardaccountsremovebyinstitutionlogin"></a>

Remove from Finicity aggregation the set of accounts matching the institution login ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByInstitutionLoginResponse =
  await mastercard.accounts.removeByInstitutionLogin({
    customerId: "1005061234",
    institutionLoginId: "1007302745",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### institutionLoginId: `string`<a id="institutionloginid-string"></a>

The institution login ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.accountsSimple.getBasicInfo`<a id="mastercardaccountssimplegetbasicinfo"></a>

This API is a lighter version of Get Customer Accounts by Institution ID, returning only basic information of active accounts owned by the given customer at the given institution.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBasicInfoResponse = await mastercard.accountsSimple.getBasicInfo({
  customerId: "1005061234",
  institutionId: 4222,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### institutionId: `number`<a id="institutionid-number"></a>

The institution ID

#### 🔄 Return<a id="🔄-return"></a>

[CustomerAccountsSimple](./models/customer-accounts-simple.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/institutions/{institutionId}/accounts/simple` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.accountsSimple.getBasicInfo_0`<a id="mastercardaccountssimplegetbasicinfo_0"></a>

This API is a lighter version of Get Customer Accounts by Institution Login ID, returning only basic information of all active accounts owned by the given customer at the given institution login ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBasicInfo_0Response = await mastercard.accountsSimple.getBasicInfo_0({
  customerId: "1005061234",
  institutionLoginId: "1007302745",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### institutionLoginId: `string`<a id="institutionloginid-string"></a>

The institution login ID

#### 🔄 Return<a id="🔄-return"></a>

[CustomerAccountsSimple](./models/customer-accounts-simple.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts/simple` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.accountsSimple.getBasicInfo_1`<a id="mastercardaccountssimplegetbasicinfo_1"></a>

This API is a lighter version of Get Customer Accounts by ID, returning only basic information of a customer account.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBasicInfo_1Response = await mastercard.accountsSimple.getBasicInfo_1({
  customerId: "1005061234",
  accountId: "5011648377",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

#### 🔄 Return<a id="🔄-return"></a>

[CustomerAccountSimple](./models/customer-account-simple.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/accounts/{accountId}/simple` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.accountsSimple.getBasicInfo_2`<a id="mastercardaccountssimplegetbasicinfo_2"></a>

This API is a lighter version of Get Customer Accounts, returning only basic information of all active customer accounts.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBasicInfo_2Response = await mastercard.accountsSimple.getBasicInfo_2({
  customerId: "1005061234",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

#### 🔄 Return<a id="🔄-return"></a>

[CustomerAccountsSimple](./models/customer-accounts-simple.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/accounts/simple` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.appRegistration.assignApplications`<a id="mastercardappregistrationassignapplications"></a>

If you have multiple applications for a single client, and you want to register their applications to access financial institutions using OAuth connections, then use this API to assign applications to an existing customer.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const assignApplicationsResponse =
  await mastercard.appRegistration.assignApplications({
    customerId: "1005061234",
    applicationId: "123456789",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### applicationId: `string`<a id="applicationid-string"></a>

The application ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/applications/{applicationId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.appRegistration.createNewApplication`<a id="mastercardappregistrationcreatenewapplication"></a>

Register a new application to access financial institutions using OAuth connections.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewApplicationResponse =
  await mastercard.appRegistration.createNewApplication({
    appDescription: "The app that makes your budgeting experience awesome",
    appName: "Awesome Budget App",
    appUrl: "https://www.finicity.com/",
    ownerAddressLine1: "434 W Ascension Way",
    ownerAddressLine2: "Suite #200",
    ownerCity: "Murray",
    ownerCountry: "USA",
    ownerName: "Finicity",
    ownerPostalCode: "84123",
    ownerState: "UT",
    image:
      "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgICAKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCAwIDAiCiAgIGhlaWdodD0iMCIKICAgd2lkdGg9IjAiPgogICAgPGcvPgo8L3N2Zz4K",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### appDescription: `string`<a id="appdescription-string"></a>

A short description of the app. This will be visible to end users in the FI interface.

##### appName: `string`<a id="appname-string"></a>

The name of the application assigned to the customer

##### appUrl: `string`<a id="appurl-string"></a>

An URL for the app. This will be visible to end users in the FI interface.

##### ownerAddressLine1: `string`<a id="owneraddressline1-string"></a>

Address line 1

##### ownerAddressLine2: `string`<a id="owneraddressline2-string"></a>

Address line 2

##### ownerCity: `string`<a id="ownercity-string"></a>

City for the business entity that owns the app. Information for registration purposes only and not given to the end user.

##### ownerCountry: `string`<a id="ownercountry-string"></a>

Country for the  business entity that owns the app. Information for registration purposes only and not given to the end user.

##### ownerName: `string`<a id="ownername-string"></a>

Business name for the business entity that owns the app. Information for registration purposes only and not given to the end user.

##### ownerPostalCode: `string`<a id="ownerpostalcode-string"></a>

Zip code for the business entity that owns the app. Information for registration purposes only and not given to the end user.

##### ownerState: `string`<a id="ownerstate-string"></a>

State for the business entity that owns the app. Information for registration purposes only and not given to the end user.

##### image: `string`<a id="image-string"></a>

An app logo passed as a Base64 encoded image (1:1 SVG file, must be less than 50KB)

#### 🔄 Return<a id="🔄-return"></a>

[RegisteredApplication](./models/registered-application.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/partners/applications` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.appRegistration.getApplicationStatus`<a id="mastercardappregistrationgetapplicationstatus"></a>

Get the status of your application registration(s).

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getApplicationStatusResponse =
  await mastercard.appRegistration.getApplicationStatus({
    preAppId: "2581",
    applicationId: "123456789",
    status: "P",
    appName: "Awesome Budget App",
    submittedDate: 1607450357,
    modifiedDate: 1607450357,
    page: 1,
    pageSize: 20,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### preAppId: `string`<a id="preappid-string"></a>

The application registration tracking ID

##### applicationId: `string`<a id="applicationid-string"></a>

The application ID

##### status: `string`<a id="status-string"></a>

Look up app registration requests by status

##### appName: `string`<a id="appname-string"></a>

Look up app registration requests by app name

##### submittedDate: `number`<a id="submitteddate-number"></a>

Look up app registration requests by the date they were submitted

##### modifiedDate: `number`<a id="modifieddate-number"></a>

Look up app registration requests by the date the request was updated. This can be used to determine when a request was updated to \"A\" or \"R\".

##### page: `number`<a id="page-number"></a>

Index of the page of results to return

##### pageSize: `number`<a id="pagesize-number"></a>

Maximum number of results per page

#### 🔄 Return<a id="🔄-return"></a>

[AppStatuses](./models/app-statuses.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v2/partners/applications` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.appRegistration.migrateInstitutionLoginAccounts`<a id="mastercardappregistrationmigrateinstitutionloginaccounts"></a>

The `institutionLoginId` parameter uses Finicity's internal FI mapping to move accounts from the current FI legacy connection to the new OAuth FI connection.

This API returns a list of accounts for the given institution login ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const migrateInstitutionLoginAccountsResponse =
  await mastercard.appRegistration.migrateInstitutionLoginAccounts({
    customerId: "1005061234",
    institutionLoginId: "1007302745",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### institutionLoginId: `string`<a id="institutionloginid-string"></a>

The institution login ID

#### 🔄 Return<a id="🔄-return"></a>

[CustomerAccounts](./models/customer-accounts.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v2/customers/{customerId}/institutionLogins/{institutionLoginId}/migration` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.appRegistration.updateRegistration`<a id="mastercardappregistrationupdateregistration"></a>

Update a registered application.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRegistrationResponse =
  await mastercard.appRegistration.updateRegistration({
    preAppId: "2581",
    appDescription: "The app that makes your budgeting experience awesome",
    appName: "Awesome Budget App",
    appUrl: "https://www.finicity.com/",
    ownerAddressLine1: "434 W Ascension Way",
    ownerAddressLine2: "Suite #200",
    ownerCity: "Murray",
    ownerCountry: "USA",
    ownerName: "Finicity",
    ownerPostalCode: "84123",
    ownerState: "UT",
    image:
      "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgICAKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCAwIDAiCiAgIGhlaWdodD0iMCIKICAgd2lkdGg9IjAiPgogICAgPGcvPgo8L3N2Zz4K",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### appDescription: `string`<a id="appdescription-string"></a>

A short description of the app. This will be visible to end users in the FI interface.

##### appName: `string`<a id="appname-string"></a>

The name of the application assigned to the customer

##### appUrl: `string`<a id="appurl-string"></a>

An URL for the app. This will be visible to end users in the FI interface.

##### ownerAddressLine1: `string`<a id="owneraddressline1-string"></a>

Address line 1

##### ownerAddressLine2: `string`<a id="owneraddressline2-string"></a>

Address line 2

##### ownerCity: `string`<a id="ownercity-string"></a>

City for the business entity that owns the app. Information for registration purposes only and not given to the end user.

##### ownerCountry: `string`<a id="ownercountry-string"></a>

Country for the  business entity that owns the app. Information for registration purposes only and not given to the end user.

##### ownerName: `string`<a id="ownername-string"></a>

Business name for the business entity that owns the app. Information for registration purposes only and not given to the end user.

##### ownerPostalCode: `string`<a id="ownerpostalcode-string"></a>

Zip code for the business entity that owns the app. Information for registration purposes only and not given to the end user.

##### ownerState: `string`<a id="ownerstate-string"></a>

State for the business entity that owns the app. Information for registration purposes only and not given to the end user.

##### image: `string`<a id="image-string"></a>

An app logo passed as a Base64 encoded image (1:1 SVG file, must be less than 50KB)

##### preAppId: `string`<a id="preappid-string"></a>

The application registration tracking ID

#### 🔄 Return<a id="🔄-return"></a>

[RegisteredApplication](./models/registered-application.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/partners/applications/{preAppId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.assets.getBinaryFile`<a id="mastercardassetsgetbinaryfile"></a>

Retrieve a binary file for the given asset ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBinaryFileResponse = await mastercard.assets.getBinaryFile({
  customerId: "1005061234",
  assetId: "097545c5-1c2a-4f20-a5ef-77f0820344c9-2018601178",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### assetId: `string`<a id="assetid-string"></a>

The asset ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/assets/{assetId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.authentication.createAccessToken`<a id="mastercardauthenticationcreateaccesstoken"></a>

Send Partner ID and Partner Secret to the Partner Authentication service to obtain a token for accessing Finicity APIs.
* The token is valid for two hours and is required on all calls to the Finicity APIs
* As a best practice, use a single token for all calls. Assign a timestamp for each token, and then check the current timestamp before making any calls. If the token is greater than 90 minutes, generate a new one.
* ⚠️ After five failed attempts to authenticate, your account will be locked. Contact [support@finicity.com](mailto:support@finicity.com) to get help resetting your account.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAccessTokenResponse =
  await mastercard.authentication.createAccessToken({
    partnerId: "1234583871234",
    partnerSecret: "aqJ5Ic4SEVx2IgDQ6oR4",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partnerId: `string`<a id="partnerid-string"></a>

Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)

##### partnerSecret: `string`<a id="partnersecret-string"></a>

Your Partner Secret displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)

#### 🔄 Return<a id="🔄-return"></a>

[AccessToken](./models/access-token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v2/partners/authentication` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.authentication.modifyPartnerSecret`<a id="mastercardauthenticationmodifypartnersecret"></a>

Change the Partner Secret used to authenticate this partner.

The secret does not expire, but can be changed by calling this API. A valid Partner Secret may contain upper and lowercase characters, numbers, and the characters !, @, #, $, %, &, *, _, -, +. It must include at least one number and at least one letter, and its length should be between 12 and 255 characters.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const modifyPartnerSecretResponse =
  await mastercard.authentication.modifyPartnerSecret({
    partnerId: "1234583871234",
    partnerSecret: "aqJ5Ic4SEVx2IgDQ6oR4",
    newPartnerSecret: "OrU7tjiA3tIspCgb85xV",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partnerId: `string`<a id="partnerid-string"></a>

Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)

##### partnerSecret: `string`<a id="partnersecret-string"></a>

Your Partner Secret displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)

##### newPartnerSecret: `string`<a id="newpartnersecret-string"></a>

A new value for the Partner Secret

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v2/partners/authentication` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.balanceAnalytics.generateAnalyticsReport`<a id="mastercardbalanceanalyticsgenerateanalyticsreport"></a>

Balance Analytics for Business analyzes bank balances over time to report metrics and identify behavior that may indicate risk.

Calculated metrics include:
* Current/available account balances
* Minimum/maximum/average account balances over the requested time
  period and broken down by month

* Daily ending balance of accounts for each day in the requested time
  period

* Propensity of the customer's account balances to increase week over
  week

* Number of days in the requested time period ending with a negative
  balance


This version of the API is intended for piloting and integration testing your application with the Balance Analytics product. It does not adhere to FCRA requirements, and should not be used for production/lending purposes. See _Generate Balance Analytics - FCRA_ for the FCRA compliant version of this API.

A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get Balance Analytics Report_ (operation: _GetObbAnalyticsReport_).

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateAnalyticsReportResponse =
  await mastercard.balanceAnalytics.generateAnalyticsReport({
    customerId: "1005061234",
    referenceNumber: "abc123",
    lengthOfReport: 730,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountIds: `number`[]<a id="accountids-number"></a>

The list of account IDs to include in the report. If omitted, all accounts on record for the customer will be used.

##### lengthOfReport: `number`<a id="lengthofreport-number"></a>

Number of days to search for transactions. Must be one of 30, 90, 180, 270, 365, or 730. If omitted, defaults to 2 years from current time at which the request was received (730 days).

##### referenceNumber: `string`<a id="referencenumber-string"></a>

Partner-provided reference number to correlate reports.

#### 🔄 Return<a id="🔄-return"></a>

[ObbAnalyticsReportAck](./models/obb-analytics-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/balance/v1/customer/{customerId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.balanceAnalytics.generateFcraAnalyticsReport`<a id="mastercardbalanceanalyticsgeneratefcraanalyticsreport"></a>

Balance Analytics for Business analyzes bank balances over time to report metrics and identify behavior that may indicate risk.

Calculated metrics include:
* Current/available account balances
* Minimum/maximum/average account balances over the requested time
  period and broken down by month

* Daily ending balance of accounts for each day in the requested time
  period

* Propensity of the customer's account balances to increase week over
  week

* Number of days in the requested time period ending with a negative
  balance


This version of the API is intended for production use. It maintains and enforces all compliance with FCRA rules and requirements.

*Note:* this is a premium service, billable per every successful API call for non-testing customers.

A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get Balance Analytics Report - FCRA_ (operation: _GetObbAnalyticsReportFCRA_).

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateFcraAnalyticsReportResponse =
  await mastercard.balanceAnalytics.generateFcraAnalyticsReport({
    customerId: "1005061234",
    referenceNumber: "abc123",
    lengthOfReport: 730,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountIds: `number`[]<a id="accountids-number"></a>

The list of account IDs to include in the report. If omitted, all accounts on record for the customer will be used.

##### lengthOfReport: `number`<a id="lengthofreport-number"></a>

Number of days to search for transactions. Must be one of 30, 90, 180, 270, 365, or 730. If omitted, defaults to 2 years from current time at which the request was received (730 days).

##### referenceNumber: `string`<a id="referencenumber-string"></a>

Partner-provided reference number to correlate reports.

#### 🔄 Return<a id="🔄-return"></a>

[ObbAnalyticsReportAck](./models/obb-analytics-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/balance/v1/customer/{customerId}/fcra` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.balanceAnalytics.generateReport`<a id="mastercardbalanceanalyticsgeneratereport"></a>

Generate a Balance Analytics Report for a given customer. This service retrieves up to two years of transaction history from connected accounts.

Balance  Analytics analyzes bank balances over time to report metrics and identify behavior that may indicate risk.

Before calling this API, A consumer or business may need to be created for the given customer ID based on the user type (see Consumer/Business APIs).

If no account type of checking or savings is found, the service will return HTTP 400 Bad Request.

This is a premium service, billable per every successful API call for non-testing customers. A successful call to this API will generate analytics report which can be retrieved via Get Report by Customer or Get Report by Consumer.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateReportResponse = await mastercard.balanceAnalytics.generateReport(
  {
    customerId: "1005061234",
    userType: "business",
    callbackUrl: "https://finicity-test/webhook",
    accountIds: "5011648377 5011648378 5011648379",
    fromDate: 1607450357,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### userType: `string`<a id="usertype-string"></a>

UserType indicates if the request is for a business or personal use case, Allowed values: business/personal.

##### analyticsReportData: [`AnalyticsReportData`](./models/analytics-report-data.ts)<a id="analyticsreportdata-analyticsreportdatamodelsanalytics-report-datats"></a>

##### accountIds: `string`<a id="accountids-string"></a>

A whitespace-separated list of account IDs to be included in the report (all accounts will be included if not set)

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### fromDate: `number`<a id="fromdate-number"></a>

A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

#### 🔄 Return<a id="🔄-return"></a>

[AnalyticsReportAck](./models/analytics-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/reports/balance-analytics/userTypes/{userType}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.balanceAnalytics.getReportData`<a id="mastercardbalanceanalyticsgetreportdata"></a>

Retrieve the report saved by _Generate Balance Analytics_, _Generate Cash Flow Analytics_, or _Generate Payment History_. Requires the report ID generated by the previous call.

Report data can either be retrieved as a JSON document or PDF file.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getReportDataResponse = await mastercard.balanceAnalytics.getReportData({
  obbReportId: "obbReportId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### obbReportId: `string`<a id="obbreportid-string"></a>

Report ID generated and returned by OBB products

#### 🔄 Return<a id="🔄-return"></a>

[ObbAnalyticsReport](./models/obb-analytics-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/data/v1/{obb_report_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.balanceAnalytics.getReportDataFcra`<a id="mastercardbalanceanalyticsgetreportdatafcra"></a>

Retrieve the report saved by _Generate Balance Analytics - FCRA_, _Generate Cash Flow Analytics - FCRA_, or _Generate Payment History - FCRA_. Requires the report ID generated by the previous call.

Report data can either be retrieved as a JSON document or PDF file.

*Note:* this is a premium service, billable per every successful API call for non-testing customers.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getReportDataFcraResponse =
  await mastercard.balanceAnalytics.getReportDataFcra({
    obbReportId: "obbReportId_example",
    purpose: "purpose_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### obbReportId: `string`<a id="obbreportid-string"></a>

Report ID generated and returned by OBB products

##### purpose: `string`<a id="purpose-string"></a>

2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports.

#### 🔄 Return<a id="🔄-return"></a>

[ObbAnalyticsReport](./models/obb-analytics-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/data/v1/{obb_report_id}/fcra` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.bankStatements.generateReport`<a id="mastercardbankstatementsgeneratereport"></a>

Generate a Statement Report for the given accounts under the given customer.

This is a premium service. A billable event will be created upon the successful generation of the Statement Report.

Before calling this API, a consumer must be created for the given customer ID (see Consumers APIs).

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateReportResponse = await mastercard.bankStatements.generateReport({
  customerId: "1005061234",
  callbackUrl: "https://finicity-test/webhook",
  statementReportData: {
    accountId: 5011648377,
    statementIndex: 1,
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### statementReportData: [`StatementData`](./models/statement-data.ts)<a id="statementreportdata-statementdatamodelsstatement-datats"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

#### 🔄 Return<a id="🔄-return"></a>

[StatementReportAck](./models/statement-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/statement` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.bankStatements.getCustomerStatementInPdf`<a id="mastercardbankstatementsgetcustomerstatementinpdf"></a>

Retrieve the customer's bank statements in PDF format. Up to 24 months of history is available depending on the financial institution. Since this is a premium service, charges incur per each successful statement retrieved.

For certified financial institutions, statements are available for the following account types:
* Checking
* Savings
* Money market
* CDs
* Investments
* Mortgage
* Credit cards
* Loans
* Line of credit
* Student Loans

Note: setting the timeout to 180 seconds is recommended to allow enough time for a response.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomerStatementInPdfResponse =
  await mastercard.bankStatements.getCustomerStatementInPdf({
    customerId: "1005061234",
    accountId: "5011648377",
    index: 1,
    type: "taxStatement",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

##### index: `number`<a id="index-number"></a>

Request statements from 1-24. By default, 1 is the most recent statement. Increase the index value to count back (by month) and retrieve its most recent statement.

##### type: `string`<a id="type-string"></a>

The type of statement to retrieve

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/accounts/{accountId}/statement` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.bankStatements.getMultipleStatements`<a id="mastercardbankstatementsgetmultiplestatements"></a>

This endpoint is retrieving the account statement for a given customer. The maximum number of indexes it will fetch for a single login is 24.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMultipleStatementsResponse =
  await mastercard.bankStatements.getMultipleStatements({
    customerId: "1005061234",
    accountId: "5011648377",
    index: "1,2,3,4,5,6",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

##### index: `string`<a id="index-string"></a>

Request statements with comma-separated indexes ranged between 1-24. The default value is 1 and it will return the most recent statement. Increasing the index will return older statements, for example, setting the index value to 6 will return a statement from six months ago.

#### 🔄 Return<a id="🔄-return"></a>

[CustomerAccountMultipleStatements](./models/customer-account-multiple-statements.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v3/customers/{customerId}/accounts/{accountId}/statement` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.businessesApi.createNewBusiness`<a id="mastercardbusinessesapicreatenewbusiness"></a>

Create a new business record for the associated customer.
A customer can have one business record associated.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewBusinessResponse =
  await mastercard.businessesApi.createNewBusiness({
    customerId: "1005061234",
    name: "ABC Tires Inc",
    personallyLiable: true,
    address: {
      addressLine1: "434 W Ascension Way",
      addressLine2: "Suite #200",
      city: "Murray",
      state: "UT",
      country: "US",
      postalCode: "84123",
    },
    phoneNumber: {
      countryCode: "1",
      phoneNo: "8042221111",
    },
    url: "https://www.finicity.com/",
    email: "myname@mycompany.com",
    type: "Nonprofit",
    taxId: "A1234561Z",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The legal name of the business

##### personallyLiable: `boolean`<a id="personallyliable-boolean"></a>

Indicates whether a business owner is personally liable for a loan

##### address: [`NewAddress`](./models/new-address.ts)<a id="address-newaddressmodelsnew-addressts"></a>

##### phoneNumber: [`PhoneNumberFormat`](./models/phone-number-format.ts)<a id="phonenumber-phonenumberformatmodelsphone-number-formatts"></a>

##### customerId: `string`<a id="customerid-string"></a>

Unique identifier of the customer

##### url: `string`<a id="url-string"></a>

A URL for the business website

##### email: `string`<a id="email-string"></a>

An email address

##### type: `string`<a id="type-string"></a>

The business type eg LLC, Corp, S Corp, C Corp, B Corp, Sole Propriertorship, Nonprofit, etc.

##### taxId: `string`<a id="taxid-string"></a>

Provide details of the tax id for the business

#### 🔄 Return<a id="🔄-return"></a>

[Business](./models/business.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business-services/customers/{customer_id}/businesses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.businessesApi.getDetailsByCustomerId`<a id="mastercardbusinessesapigetdetailsbycustomerid"></a>

Retrieve business details associated with a specific customer. By providing the unique customer identifier, details about the associated business can be accessed.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsByCustomerIdResponse =
  await mastercard.businessesApi.getDetailsByCustomerId({
    customerId: "1005061234",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

Unique identifier of the customer

#### 🔄 Return<a id="🔄-return"></a>

[Business](./models/business.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business-services/customers/{customer_id}/businesses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.businessesApi.getDetailsById`<a id="mastercardbusinessesapigetdetailsbyid"></a>

Retrieve business details.

_Supported regions_: ![\U0001F1FA\U0001F1F8](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsByIdResponse = await mastercard.businessesApi.getDetailsById({
  customerId: "1005061234",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

Unique identifier of the customer

#### 🔄 Return<a id="🔄-return"></a>

[Business](./models/business.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business-services/businesses/{business_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.businessesApi.updateById`<a id="mastercardbusinessesapiupdatebyid"></a>

Update the details of a business based on its unique identifier. By providing the specific business ID and the updated information in the request, modifications can be made to the business's profile.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await mastercard.businessesApi.updateById({
  customerId: "1005061234",
  name: "ABC Tires Inc",
  personallyLiable: true,
  address: {
    addressLine1: "434 W Ascension Way",
    addressLine2: "Suite #200",
    city: "Murray",
    state: "UT",
    country: "US",
    postalCode: "84123",
  },
  phoneNumber: {
    countryCode: "1",
    phoneNo: "8042221111",
  },
  url: "https://www.finicity.com/",
  email: "myname@mycompany.com",
  type: "Nonprofit",
  taxId: "A1234561Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The legal name of the business

##### personallyLiable: `boolean`<a id="personallyliable-boolean"></a>

Indicates whether a business owner is personally liable for a loan

##### address: [`NewAddress`](./models/new-address.ts)<a id="address-newaddressmodelsnew-addressts"></a>

##### phoneNumber: [`PhoneNumberFormat`](./models/phone-number-format.ts)<a id="phonenumber-phonenumberformatmodelsphone-number-formatts"></a>

##### customerId: `string`<a id="customerid-string"></a>

Unique identifier of the customer

##### url: `string`<a id="url-string"></a>

A URL for the business website

##### email: `string`<a id="email-string"></a>

An email address

##### type: `string`<a id="type-string"></a>

The business type eg LLC, Corp, S Corp, C Corp, B Corp, Sole Propriertorship, Nonprofit, etc.

##### taxId: `string`<a id="taxid-string"></a>

Provide details of the tax id for the business

#### 🔄 Return<a id="🔄-return"></a>

[Business](./models/business.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business-services/businesses/{business_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.cashFlow.generatePersonalReport`<a id="mastercardcashflowgeneratepersonalreport"></a>

Generate a Cash Flow Report (Personal) report for all checking and savings under the given customer. This service retrieves up to two years of transaction history for the given account. It then uses this information to generate the CFR report.

This report is provided under FCRA rules, with Finicity acting as the CRA (Consumer Reporting Agency). If an individual account is included in the report - for example, with an individual acting as an personal guarantor on the loan - then this version of the report should be used. In case of an adverse action on the loan where the decision was based on this report, then the borrower can be referred to the [Finicity Consumer Portal](https://consumer.finicityreports.com) where they can view this report and submit a dispute if they feel any information in this report is inaccurate.

Before calling this API, a consumer must be created for the given customer ID (see Consumers APIs).

If no account type of checking or savings is found, the service will return HTTP 400 Bad Request.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generatePersonalReportResponse =
  await mastercard.cashFlow.generatePersonalReport({
    customerId: "1005061234",
    callbackUrl: "https://finicity-test/webhook",
    accountIds: "5011648377 5011648378 5011648379",
    showNsf: false,
    fromDate: 1607450357,
    incomeStreamConfidenceMinimum: 50,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountIds: `string`<a id="accountids-string"></a>

A whitespace-separated list of account IDs to be included in the report (all accounts will be included if not set)

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### showNsf: `boolean`<a id="shownsf-boolean"></a>

Include the non-sufficient funds (NSF) summary JSON and the NSF summary PDF section in the report. Data included: * Account  * Total number of NSF funds  * Days since the most recent NFS funds fee

##### fromDate: `number`<a id="fromdate-number"></a>

A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).

##### incomeStreamConfidenceMinimum: `number`<a id="incomestreamconfidenceminimum-number"></a>

Include income streams in the report, based on the income stream\\\'s confidence score. For example, Use the value 50 to include only income streams with a confidence score of 50 or higher.

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

#### 🔄 Return<a id="🔄-return"></a>

[CashFlowReportAck](./models/cash-flow-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/cashFlowPersonal` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.cashFlow.generateReportBusiness`<a id="mastercardcashflowgeneratereportbusiness"></a>

Generate a Cash Flow Report (Business) report for all checking and savings under the given customer. This service retrieves up to two years of transaction history for the given account. It then uses this information to generate the CFR report. A consumer is not required to generate this report.

This report is not provided under FCRA rules, and this report is not available in the Finicity Consumer Portal for the borrower to view.

If no account type of checking or savings is found, the service will return HTTP 400 Bad Request.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateReportBusinessResponse =
  await mastercard.cashFlow.generateReportBusiness({
    customerId: "1005061234",
    callbackUrl: "https://finicity-test/webhook",
    accountIds: "5011648377 5011648378 5011648379",
    showNsf: false,
    fromDate: 1607450357,
    incomeStreamConfidenceMinimum: 50,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountIds: `string`<a id="accountids-string"></a>

A whitespace-separated list of account IDs to be included in the report (all accounts will be included if not set)

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### showNsf: `boolean`<a id="shownsf-boolean"></a>

Include the non-sufficient funds (NSF) summary JSON and the NSF summary PDF section in the report. Data included: * Account  * Total number of NSF funds  * Days since the most recent NFS funds fee

##### fromDate: `number`<a id="fromdate-number"></a>

A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).

##### incomeStreamConfidenceMinimum: `number`<a id="incomestreamconfidenceminimum-number"></a>

Include income streams in the report, based on the income stream\\\'s confidence score. For example, Use the value 50 to include only income streams with a confidence score of 50 or higher.

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

#### 🔄 Return<a id="🔄-return"></a>

[CashFlowReportAck](./models/cash-flow-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/cashFlowBusiness` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.cashFlowAnalytics.generateAnalytics`<a id="mastercardcashflowanalyticsgenerateanalytics"></a>

Cash Flow Analytics for Business analyzes cash flow over time to report metrics and identify behavior that may indicate risk.

Calculated metrics include:
* Average transaction value by month over the requested time period
* Net cash flow over the requested time period and broken down by month
* Count and report of weeks in the requested time period where there
  were zero transactions posted to the customer's accounts

* Minimum/maximum/average/sum/count of deposits by month
* Minimum/maximum/average/sum/count of withdrawals by month
* Estimated amount of deposits that can be classified as business
  revenue

* Number of transactions posted incurring a non-sufficient funds (NSF)
  fee, and net amount charged in NSF fees


This version of the API is intended for piloting and integration testing your application with the Cash Flow Analytics product. It does not adhere to FCRA requirements, and should not be used for production/lending purposes. See _Generate Cash Flow Analytics - FCRA_ for the FCRA compliant version of this API.

A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get Cash Flow Analytics Report_ (operation: _GetCashFlowAnalyticsReport_).

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateAnalyticsResponse =
  await mastercard.cashFlowAnalytics.generateAnalytics({
    customerId: "1005061234",
    referenceNumber: "abc123",
    lengthOfReport: 730,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountIds: `number`[]<a id="accountids-number"></a>

The list of account IDs to include in the report. If omitted, all accounts on record for the customer will be used.

##### lengthOfReport: `number`<a id="lengthofreport-number"></a>

Number of days to search for transactions. Must be one of 30, 90, 180, 270, 365, or 730. If omitted, defaults to 2 years from current time at which the request was received (730 days).

##### referenceNumber: `string`<a id="referencenumber-string"></a>

Partner-provided reference number to correlate reports.

#### 🔄 Return<a id="🔄-return"></a>

[ObbAnalyticsReportAck](./models/obb-analytics-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/cashflow/v1/customer/{customerId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.cashFlowAnalytics.generateFcraAnalyticsReport`<a id="mastercardcashflowanalyticsgeneratefcraanalyticsreport"></a>

Cash Flow Analytics for Business analyzes cash flow over time to report metrics and identify behavior that may indicate risk.

Calculated metrics include:
* Average transaction value by month over the requested time period
* Net cash flow over the requested time period and broken down by month
* Count and report of weeks in the requested time period where there
  were zero transactions posted to the customer's accounts

* Minimum/maximum/average/sum/count of deposits by month
* Minimum/maximum/average/sum/count of withdrawals by month
* Estimated amount of deposits that can be classified as business
  revenue

* Number of transactions posted incurring a non-sufficient funds (NSF)
  fee, and net amount charged in NSF fees


This version of the API is intended for production use. It maintains and enforces all compliance with FCRA rules and requirements.

*Note:* this is a premium service, billable per every successful API call for non-testing customers.

A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get Cash Flow Analytics Report - FCRA_ (operation: _GetCashFlowAnalyticsReportFCRA_).

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateFcraAnalyticsReportResponse =
  await mastercard.cashFlowAnalytics.generateFcraAnalyticsReport({
    customerId: "1005061234",
    referenceNumber: "abc123",
    lengthOfReport: 730,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountIds: `number`[]<a id="accountids-number"></a>

The list of account IDs to include in the report. If omitted, all accounts on record for the customer will be used.

##### lengthOfReport: `number`<a id="lengthofreport-number"></a>

Number of days to search for transactions. Must be one of 30, 90, 180, 270, 365, or 730. If omitted, defaults to 2 years from current time at which the request was received (730 days).

##### referenceNumber: `string`<a id="referencenumber-string"></a>

Partner-provided reference number to correlate reports.

#### 🔄 Return<a id="🔄-return"></a>

[ObbAnalyticsReportAck](./models/obb-analytics-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/cashflow/v1/customer/{customerId}/fcra` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.cashFlowAnalytics.generateReport`<a id="mastercardcashflowanalyticsgeneratereport"></a>

Generate a Cashflow Analytics Report for a given customer. This service retrieves up to two years of transaction history from connected accounts.

Cashflow Analytics analyzes transaction over time to report metrics and identify behavior that may indicate risk.

Before calling this API, A consumer or business may need to be created for the given customer ID based on the user type (see Consumer/Business APIs).

If no account type of checking or savings is found, the service will return HTTP 400 Bad Request.

This is a premium service, billable per every successful API call for non-testing customers. A successful call to this API will generate analytics report which can be retrieved via Get Report by Customer or Get Report by Consumer.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateReportResponse =
  await mastercard.cashFlowAnalytics.generateReport({
    customerId: "1005061234",
    userType: "business",
    callbackUrl: "https://finicity-test/webhook",
    accountIds: "5011648377 5011648378 5011648379",
    fromDate: 1607450357,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### userType: `string`<a id="usertype-string"></a>

UserType indicates if the request is for a business or personal use case, Allowed values: business/personal.

##### analyticsReportData: [`AnalyticsReportData`](./models/analytics-report-data.ts)<a id="analyticsreportdata-analyticsreportdatamodelsanalytics-report-datats"></a>

##### accountIds: `string`<a id="accountids-string"></a>

A whitespace-separated list of account IDs to be included in the report (all accounts will be included if not set)

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### fromDate: `number`<a id="fromdate-number"></a>

A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

#### 🔄 Return<a id="🔄-return"></a>

[AnalyticsReportAck](./models/analytics-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/reports/cashflow-analytics/userTypes/{userType}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.cashFlowAnalytics.getReportData`<a id="mastercardcashflowanalyticsgetreportdata"></a>

Retrieve the report saved by _Generate Balance Analytics_, _Generate Cash Flow Analytics_, or _Generate Payment History_. Requires the report ID generated by the previous call.

Report data can either be retrieved as a JSON document or PDF file.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getReportDataResponse = await mastercard.cashFlowAnalytics.getReportData({
  obbReportId: "obbReportId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### obbReportId: `string`<a id="obbreportid-string"></a>

Report ID generated and returned by OBB products

#### 🔄 Return<a id="🔄-return"></a>

[ObbAnalyticsReport](./models/obb-analytics-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/data/v1/{obb_report_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.cashFlowAnalytics.getReportDataFcra`<a id="mastercardcashflowanalyticsgetreportdatafcra"></a>

Retrieve the report saved by _Generate Balance Analytics - FCRA_, _Generate Cash Flow Analytics - FCRA_, or _Generate Payment History - FCRA_. Requires the report ID generated by the previous call.

Report data can either be retrieved as a JSON document or PDF file.

*Note:* this is a premium service, billable per every successful API call for non-testing customers.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getReportDataFcraResponse =
  await mastercard.cashFlowAnalytics.getReportDataFcra({
    obbReportId: "obbReportId_example",
    purpose: "purpose_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### obbReportId: `string`<a id="obbreportid-string"></a>

Report ID generated and returned by OBB products

##### purpose: `string`<a id="purpose-string"></a>

2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports.

#### 🔄 Return<a id="🔄-return"></a>

[ObbAnalyticsReport](./models/obb-analytics-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/data/v1/{obb_report_id}/fcra` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.connect.fixUrlGeneration`<a id="mastercardconnectfixurlgeneration"></a>

Use the Connect Fix API when the following conditions occur:
* The connection to the user's financial institution is lost
* The user's credentials were updated (for any number of reasons)
* The user's MFA challenge has expired

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const fixUrlGenerationResponse = await mastercard.connect.fixUrlGeneration({
  language: "es",
  partnerId: "1234583871234",
  customerId: "1005061234",
  institutionLoginId: "1007302745",
  redirectUri: "https://www.finicity.com/connect/",
  webhook: "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b",
  webhookContentType: "application/json",
  experience: "default",
  singleUseUrl: true,
  isWebView: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partnerId: `string`<a id="partnerid-string"></a>

Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)

##### customerId: `string`<a id="customerid-string"></a>

A customer ID. See Add Customer API for how to create a customer ID.

##### institutionLoginId: `string`<a id="institutionloginid-string"></a>

An institution login ID (from the account record)

##### language: `string`<a id="language-string"></a>

By default, the Connect application is in English. You don\\\'t need to pass this parameter unless you want to translate Connect into one of our supported languages.  * Spanish (United States): `es` * French (Canada): `fr` 

##### redirectUri: `string`<a id="redirecturi-string"></a>

The URL that customers will be redirected to after completing Finicity Connect. Required unless Connect is embedded inside our application (iframe).

##### webhook: `string`<a id="webhook-string"></a>

The publicly available URL you want to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-connect/) for event details.

##### webhookContentType: `string`<a id="webhookcontenttype-string"></a>

The content type the webhook events will be sent in. Supported types: \\\"application/json\\\" and \\\"application/xml\\\".

##### webhookData: `object`<a id="webhookdata-object"></a>

Allows additional identifiable information to be inserted into the payload of connect webhook events. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).

##### webhookHeaders: `object`<a id="webhookheaders-object"></a>

Allows additional identifiable information to be included as headers of connect webhook event. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).

##### experience: `string`<a id="experience-string"></a>

The `experience` field allows you to customize: * Brand: color and logo * Icon: displayed on the \\\"Share your data\\\" page * Popular institutions: displayed on the Bank Search page * Report: the credit decisioning report to send when Connect completes. * MVS modules: financial, payroll, paystub  Note: the Finicity sales engineers (SE) help you set up a default experience for your company when you migrate to Connect 2.0. For each additional experience you create thereafter, they\\\'ll give you a unique ID. See [Generate Connect URL](https://developer.mastercard.com/open-banking-us/documentation/connect/generate-2-connect-url-apis/).  Experience values options: * \\\"default\\\": your default experience (must be defined) * GUID: the code for a different experience * Not defined: If you don\\\'t pass the experience parameter, then Connect\\\'s out of the box default experience (add accounts but no branding) is used, and the MVS modules will not run.

##### singleUseUrl: `boolean`<a id="singleuseurl-boolean"></a>

\\\"true\\\": The URL link expires after a Connect session successfully completes.  Note: when the `singleUseUrl` and the `experience` parameters are passed in the same call, the `singleUseUrl` value overrides the `singleUseUrl` value configured in the `experience` parameter.

##### isWebView: `boolean`<a id="iswebview-boolean"></a>

\\\"true\\\": Indicates that the Connect Session will be displayed within a WebView. Note: when the `isWebView` parameter is `true` the `redirectUri` parameter is required.

#### 🔄 Return<a id="🔄-return"></a>

[ConnectUrl](./models/connect-url.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connect/v2/generate/fix` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.connect.generateJointBorrowerUrl`<a id="mastercardconnectgeneratejointborrowerurl"></a>

Same as Connect Full (`POST /connect/v2/generate`) but for joint borrowers.

MVS prompts both the primary and joint borrower to enter each of their financial, payroll, and paystub information in the same Connect session.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateJointBorrowerUrlResponse =
  await mastercard.connect.generateJointBorrowerUrl({
    language: "es",
    partnerId: "1234583871234",
    borrowers: [
      {
        customerId: "1005061234",
        consumerId: "0bf46322c167b562e6cbed9d40e19a4c",
        type: "primary",
      },
    ],
    redirectUri: "https://www.finicity.com/connect/",
    webhook: "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b",
    webhookContentType: "application/json",
    experience: "default",
    fromDate: 1607450357,
    singleUseUrl: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partnerId: `string`<a id="partnerid-string"></a>

Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)

##### borrowers: [`Borrower`](./models/borrower.ts)[]<a id="borrowers-borrowermodelsborrowerts"></a>

(MVS) Array of borrowers to pass the primary and joint borrower\\\'s customer and consumer IDs

##### language: `string`<a id="language-string"></a>

By default, the Connect application is in English. You don\\\'t need to pass this parameter unless you want to translate Connect into one of our supported languages.  * Spanish (United States): `es` * French (Canada): `fr` 

##### redirectUri: `string`<a id="redirecturi-string"></a>

The URL that customers will be redirected to after completing Finicity Connect. Required unless Connect is embedded inside our application (iframe).

##### webhook: `string`<a id="webhook-string"></a>

The publicly available URL you want to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-connect/) for event details.

##### webhookContentType: `string`<a id="webhookcontenttype-string"></a>

The content type the webhook events will be sent in. Supported types: \\\"application/json\\\" and \\\"application/xml\\\".

##### webhookData: `object`<a id="webhookdata-object"></a>

Allows additional identifiable information to be inserted into the payload of connect webhook events. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).

##### webhookHeaders: `object`<a id="webhookheaders-object"></a>

Allows additional identifiable information to be included as headers of connect webhook event. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).

##### institutionSettings: `object`<a id="institutionsettings-object"></a>

Advanced options for configuration of which institutions to display in. See [Institution Settings](https://developer.mastercard.com/open-banking-us/documentation/connect/connect-institutions-settings/).

##### experience: `string`<a id="experience-string"></a>

The `experience` field allows you to customize: * Brand: color and logo * Icon: displayed on the \\\"Share your data\\\" page * Popular institutions: displayed on the Bank Search page * Report: the credit decisioning report to send when Connect completes. * MVS modules: financial, payroll, paystub  Note: the Finicity sales engineers (SE) help you set up a default experience for your company when you migrate to Connect 2.0. For each additional experience you create thereafter, they\\\'ll give you a unique ID. See [Generate Connect URL](https://developer.mastercard.com/open-banking-us/documentation/connect/generate-2-connect-url-apis/).  Experience values options: * \\\"default\\\": your default experience (must be defined) * GUID: the code for a different experience * Not defined: If you don\\\'t pass the experience parameter, then Connect\\\'s out of the box default experience (add accounts but no branding) is used, and the MVS modules will not run.

##### fromDate: `number`<a id="fromdate-number"></a>

The `fromDate` parameter is used when experiences are associated with a credit decisioning report and any other reports with transaction data. The value is in epoch time and must be 10 digits. Example: 1494449017. If it\\\'s greater than 10 digits, then the `fromDate` is set to the credit decisioning report\\\'s default `fromDate`.  For an experience that generates multiple reports, the `fromDate` gets passed to the reports that support it.  However, Connect doesn\\\'t pass this parameter to the following reports: * Pay Statement Extraction Report * VOIE - Paystub (with TXVerify) Report * Statement Report * Verification of Income Report * VOIE - Payroll Report  Note: this field isn\\\'t used if you\\\'re only collecting transaction data without a report.

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### singleUseUrl: `boolean`<a id="singleuseurl-boolean"></a>

\\\"true\\\": The URL link expires after a Connect session successfully completes.  Note: when the `singleUseUrl` and the `experience` parameters are passed in the same call, the `singleUseUrl` value overrides the `singleUseUrl` value configured in the `experience` parameter.

#### 🔄 Return<a id="🔄-return"></a>

[ConnectUrl](./models/connect-url.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connect/v2/generate/jointBorrower` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.connect.generateLiteUrl`<a id="mastercardconnectgenerateliteurl"></a>

Connect Lite is a variation of Connect Full (`POST /connect/v2/generate`), which has a limited set of features.
* Sign in, user's credentials, and Multi-Factor Authentication (MFA)
* No user account management

The Connect Web SDK isn't a requirement when using Connect lite. However, if you want to use the SDK events, routes, and user events, then you must integrate with the Connect Web SDK.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateLiteUrlResponse = await mastercard.connect.generateLiteUrl({
  language: "es",
  partnerId: "1234583871234",
  customerId: "1005061234",
  institutionId: 4222,
  redirectUri: "https://www.finicity.com/connect/",
  webhook: "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b",
  webhookContentType: "application/json",
  experience: "default",
  singleUseUrl: true,
  isWebView: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partnerId: `string`<a id="partnerid-string"></a>

Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)

##### customerId: `string`<a id="customerid-string"></a>

A customer ID. See Add Customer API for how to create a customer ID.

##### institutionId: `number`<a id="institutionid-number"></a>

The ID of a financial institution, represented as a number

##### language: `string`<a id="language-string"></a>

By default, the Connect application is in English. You don\\\'t need to pass this parameter unless you want to translate Connect into one of our supported languages.  * Spanish (United States): `es` * French (Canada): `fr` 

##### redirectUri: `string`<a id="redirecturi-string"></a>

The URL that customers will be redirected to after completing Finicity Connect. Required unless Connect is embedded inside our application (iframe).

##### webhook: `string`<a id="webhook-string"></a>

The publicly available URL you want to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-connect/) for event details.

##### webhookContentType: `string`<a id="webhookcontenttype-string"></a>

The content type the webhook events will be sent in. Supported types: \\\"application/json\\\" and \\\"application/xml\\\".

##### webhookData: `object`<a id="webhookdata-object"></a>

Allows additional identifiable information to be inserted into the payload of connect webhook events. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).

##### webhookHeaders: `object`<a id="webhookheaders-object"></a>

Allows additional identifiable information to be included as headers of connect webhook event. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).

##### experience: `string`<a id="experience-string"></a>

The `experience` field allows you to customize: * Brand: color and logo * Icon: displayed on the \\\"Share your data\\\" page * Popular institutions: displayed on the Bank Search page * Report: the credit decisioning report to send when Connect completes. * MVS modules: financial, payroll, paystub  Note: the Finicity sales engineers (SE) help you set up a default experience for your company when you migrate to Connect 2.0. For each additional experience you create thereafter, they\\\'ll give you a unique ID. See [Generate Connect URL](https://developer.mastercard.com/open-banking-us/documentation/connect/generate-2-connect-url-apis/).  Experience values options: * \\\"default\\\": your default experience (must be defined) * GUID: the code for a different experience * Not defined: If you don\\\'t pass the experience parameter, then Connect\\\'s out of the box default experience (add accounts but no branding) is used, and the MVS modules will not run.

##### singleUseUrl: `boolean`<a id="singleuseurl-boolean"></a>

\\\"true\\\": The URL link expires after a Connect session successfully completes.  Note: when the `singleUseUrl` and the `experience` parameters are passed in the same call, the `singleUseUrl` value overrides the `singleUseUrl` value configured in the `experience` parameter.

##### isWebView: `boolean`<a id="iswebview-boolean"></a>

\\\"true\\\": Indicates that the Connect Session will be displayed within a WebView. Note: when the `isWebView` parameter is `true` the `redirectUri` parameter is required.

#### 🔄 Return<a id="🔄-return"></a>

[ConnectUrl](./models/connect-url.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connect/v2/generate/lite` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.connect.generateUrl`<a id="mastercardconnectgenerateurl"></a>

Generate a Connect 2.0 URL link to add within your own applications.

Optional Parameters:
* `experience`: Configure different customer experiences per Connect session by changing the brand, color, logo, icon, the type of credit decisioning report to generate after the session ends, and more.
* `language`: By default, the Connect application is in English. You don't need to pass  this parameter unless you want to translate Connect into one of our supported languages.

  * Spanish (United States)
  * French (Canada)


MVS Developers: You can pre-populate the consumer's SSN on the Find employment records page at the beginning of the MVS payroll app. Pass the SSN value for the consumer in the body of the request call.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateUrlResponse = await mastercard.connect.generateUrl({
  language: "es",
  partnerId: "1234583871234",
  customerId: "1005061234",
  consumerId: "0bf46322c167b562e6cbed9d40e19a4c",
  redirectUri: "https://www.finicity.com/connect/",
  webhook: "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b",
  webhookContentType: "application/json",
  singleUseUrl: true,
  experience: "default",
  fromDate: 1607450357,
  isWebView: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partnerId: `string`<a id="partnerid-string"></a>

Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)

##### customerId: `string`<a id="customerid-string"></a>

A customer ID. See Add Customer API for how to create a customer ID.

##### language: `string`<a id="language-string"></a>

By default, the Connect application is in English. You don\\\'t need to pass this parameter unless you want to translate Connect into one of our supported languages.  * Spanish (United States): `es` * French (Canada): `fr` 

##### consumerId: `string`<a id="consumerid-string"></a>

A consumer ID. See Create Consumer API for how to create a consumer ID.

##### redirectUri: `string`<a id="redirecturi-string"></a>

The URL that customers will be redirected to after completing Finicity Connect. Required unless Connect is embedded inside our application (iframe).

##### webhook: `string`<a id="webhook-string"></a>

The publicly available URL you want to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-connect/) for event details.

##### webhookContentType: `string`<a id="webhookcontenttype-string"></a>

The content type the webhook events will be sent in. Supported types: \\\"application/json\\\" and \\\"application/xml\\\".

##### webhookData: `object`<a id="webhookdata-object"></a>

Allows additional identifiable information to be inserted into the payload of connect webhook events. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).

##### webhookHeaders: `object`<a id="webhookheaders-object"></a>

Allows additional identifiable information to be included as headers of connect webhook event. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).

##### optionalConsumerInfo: [`ConsumerInfo`](./models/consumer-info.ts)<a id="optionalconsumerinfo-consumerinfomodelsconsumer-infots"></a>

##### singleUseUrl: `boolean`<a id="singleuseurl-boolean"></a>

\\\"true\\\": The URL link expires after a Connect session successfully completes.  Note: when the `singleUseUrl` and the `experience` parameters are passed in the same call, the `singleUseUrl` value overrides the `singleUseUrl` value configured in the `experience` parameter.

##### experience: `string`<a id="experience-string"></a>

The `experience` field allows you to customize: * Brand: color and logo * Icon: displayed on the \\\"Share your data\\\" page * Popular institutions: displayed on the Bank Search page * Report: the credit decisioning report to send when Connect completes. * MVS modules: financial, payroll, paystub  Note: the Finicity sales engineers (SE) help you set up a default experience for your company when you migrate to Connect 2.0. For each additional experience you create thereafter, they\\\'ll give you a unique ID. See [Generate Connect URL](https://developer.mastercard.com/open-banking-us/documentation/connect/generate-2-connect-url-apis/).  Experience values options: * \\\"default\\\": your default experience (must be defined) * GUID: the code for a different experience * Not defined: If you don\\\'t pass the experience parameter, then Connect\\\'s out of the box default experience (add accounts but no branding) is used, and the MVS modules will not run.

##### institutionSettings: `object`<a id="institutionsettings-object"></a>

Advanced options for configuration of which institutions to display in. See [Institution Settings](https://developer.mastercard.com/open-banking-us/documentation/connect/connect-institutions-settings/).

##### fromDate: `number`<a id="fromdate-number"></a>

The `fromDate` parameter is used when experiences are associated with a credit decisioning report and any other reports with transaction data. The value is in epoch time and must be 10 digits. Example: 1494449017. If it\\\'s greater than 10 digits, then the `fromDate` is set to the credit decisioning report\\\'s default `fromDate`.  For an experience that generates multiple reports, the `fromDate` gets passed to the reports that support it.  However, Connect doesn\\\'t pass this parameter to the following reports: * Pay Statement Extraction Report * VOIE - Paystub (with TXVerify) Report * Statement Report * Verification of Income Report * VOIE - Payroll Report  Note: this field isn\\\'t used if you\\\'re only collecting transaction data without a report.

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### isWebView: `boolean`<a id="iswebview-boolean"></a>

\\\"true\\\": Indicates that the Connect Session will be displayed within a WebView. Note: when the `isWebView` parameter is `true` the `redirectUri` parameter is required.

#### 🔄 Return<a id="🔄-return"></a>

[ConnectUrl](./models/connect-url.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connect/v2/generate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.connect.sendConnectEmail`<a id="mastercardconnectsendconnectemail"></a>

Same as Connect Full (`POST /connect/v2/generate`) but send a Connect email to a consumer.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendConnectEmailResponse = await mastercard.connect.sendConnectEmail({
  language: "es",
  partnerId: "1234583871234",
  customerId: "1005061234",
  consumerId: "0bf46322c167b562e6cbed9d40e19a4c",
  redirectUri: "https://www.finicity.com/connect/",
  webhook: "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b",
  webhookContentType: "application/json",
  email: {
    to: "bob@example.com",
    from: "test.lender@test.com",
    supportPhone: "800-555-5555",
    subject: "Verify your income",
    firstName: "Bob",
    institutionName: "Acme Lending",
    institutionAddress: "222 Winnipeg Drive SLC UT, 84109",
    signature: ["Cindy Mayfield", "Senior Loan Officer", "Direct 123-456-7890"],
  },
  experience: "default",
  singleUseUrl: true,
  fromDate: 1607450357,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partnerId: `string`<a id="partnerid-string"></a>

Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)

##### customerId: `string`<a id="customerid-string"></a>

A customer ID. See Add Customer API for how to create a customer ID.

##### consumerId: `string`<a id="consumerid-string"></a>

A consumer ID. See Create Consumer API for how to create a consumer ID.

##### email: [`EmailOptions`](./models/email-options.ts)<a id="email-emailoptionsmodelsemail-optionsts"></a>

##### language: `string`<a id="language-string"></a>

By default, the Connect application is in English. You don\\\'t need to pass this parameter unless you want to translate Connect into one of our supported languages.  * Spanish (United States): `es` * French (Canada): `fr` 

##### redirectUri: `string`<a id="redirecturi-string"></a>

The URL that customers will be redirected to after completing Finicity Connect. Required unless Connect is embedded inside our application (iframe).

##### webhook: `string`<a id="webhook-string"></a>

The publicly available URL you want to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-connect/) for event details.

##### webhookContentType: `string`<a id="webhookcontenttype-string"></a>

The content type the webhook events will be sent in. Supported types: \\\"application/json\\\" and \\\"application/xml\\\".

##### webhookData: `object`<a id="webhookdata-object"></a>

Allows additional identifiable information to be inserted into the payload of connect webhook events. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).

##### webhookHeaders: `object`<a id="webhookheaders-object"></a>

Allows additional identifiable information to be included as headers of connect webhook event. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).

##### institutionSettings: `object`<a id="institutionsettings-object"></a>

Advanced options for configuration of which institutions to display in. See [Institution Settings](https://developer.mastercard.com/open-banking-us/documentation/connect/connect-institutions-settings/).

##### experience: `string`<a id="experience-string"></a>

The `experience` field allows you to customize: * Brand: color and logo * Icon: displayed on the \\\"Share your data\\\" page * Popular institutions: displayed on the Bank Search page * Report: the credit decisioning report to send when Connect completes. * MVS modules: financial, payroll, paystub  Note: the Finicity sales engineers (SE) help you set up a default experience for your company when you migrate to Connect 2.0. For each additional experience you create thereafter, they\\\'ll give you a unique ID. See [Generate Connect URL](https://developer.mastercard.com/open-banking-us/documentation/connect/generate-2-connect-url-apis/).  Experience values options: * \\\"default\\\": your default experience (must be defined) * GUID: the code for a different experience * Not defined: If you don\\\'t pass the experience parameter, then Connect\\\'s out of the box default experience (add accounts but no branding) is used, and the MVS modules will not run.

##### singleUseUrl: `boolean`<a id="singleuseurl-boolean"></a>

\\\"true\\\": The URL link expires after a Connect session successfully completes.  Note: when the `singleUseUrl` and the `experience` parameters are passed in the same call, the `singleUseUrl` value overrides the `singleUseUrl` value configured in the `experience` parameter.

##### fromDate: `number`<a id="fromdate-number"></a>

The `fromDate` parameter is used when experiences are associated with a credit decisioning report and any other reports with transaction data. The value is in epoch time and must be 10 digits. Example: 1494449017. If it\\\'s greater than 10 digits, then the `fromDate` is set to the credit decisioning report\\\'s default `fromDate`.  For an experience that generates multiple reports, the `fromDate` gets passed to the reports that support it.  However, Connect doesn\\\'t pass this parameter to the following reports: * Pay Statement Extraction Report * VOIE - Paystub (with TXVerify) Report * Statement Report * Verification of Income Report * VOIE - Payroll Report  Note: this field isn\\\'t used if you\\\'re only collecting transaction data without a report.

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### optionalConsumerInfo: [`ConsumerInfo`](./models/consumer-info.ts)<a id="optionalconsumerinfo-consumerinfomodelsconsumer-infots"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ConnectEmailUrl](./models/connect-email-url.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connect/v2/send/email` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.connect.sendEmailJointBorrower`<a id="mastercardconnectsendemailjointborrower"></a>

Same as Connect Joint Borrower (`POST /connect/v2/generate/jointBorrower`) but send a Connect email  to at least one of the joint borrower's email addresses.

When the consumer opens the email, MVS prompts both the primary and joint borrower to enter each of their financial, payroll, and paystub information in the same Connect session.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendEmailJointBorrowerResponse =
  await mastercard.connect.sendEmailJointBorrower({
    language: "es",
    partnerId: "1234583871234",
    borrowers: [
      {
        customerId: "1005061234",
        consumerId: "0bf46322c167b562e6cbed9d40e19a4c",
        type: "primary",
      },
    ],
    redirectUri: "https://www.finicity.com/connect/",
    webhook: "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b",
    webhookContentType: "application/json",
    email: {
      to: "bob@example.com",
      from: "test.lender@test.com",
      supportPhone: "800-555-5555",
      subject: "Verify your income",
      firstName: "Bob",
      institutionName: "Acme Lending",
      institutionAddress: "222 Winnipeg Drive SLC UT, 84109",
      signature: [
        "Cindy Mayfield",
        "Senior Loan Officer",
        "Direct 123-456-7890",
      ],
    },
    experience: "default",
    fromDate: 1607450357,
    singleUseUrl: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partnerId: `string`<a id="partnerid-string"></a>

Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)

##### borrowers: [`Borrower`](./models/borrower.ts)[]<a id="borrowers-borrowermodelsborrowerts"></a>

(MVS) Array of borrowers to pass the primary and joint borrower\\\'s customer and consumer IDs

##### email: [`EmailOptions`](./models/email-options.ts)<a id="email-emailoptionsmodelsemail-optionsts"></a>

##### experience: `string`<a id="experience-string"></a>

The `experience` field allows you to customize: * Brand: color and logo * Icon: displayed on the \\\"Share your data\\\" page * Popular institutions: displayed on the Bank Search page * Report: the credit decisioning report to send when Connect completes. * MVS modules: financial, payroll, paystub  Note: the Finicity sales engineers (SE) help you set up a default experience for your company when you migrate to Connect 2.0. For each additional experience you create thereafter, they\\\'ll give you a unique ID. See [Generate Connect URL](https://developer.mastercard.com/open-banking-us/documentation/connect/generate-2-connect-url-apis/).  Experience values options: * \\\"default\\\": your default experience (must be defined) * GUID: the code for a different experience * Not defined: If you don\\\'t pass the experience parameter, then Connect\\\'s out of the box default experience (add accounts but no branding) is used, and the MVS modules will not run.

##### language: `string`<a id="language-string"></a>

By default, the Connect application is in English. You don\\\'t need to pass this parameter unless you want to translate Connect into one of our supported languages.  * Spanish (United States): `es` * French (Canada): `fr` 

##### redirectUri: `string`<a id="redirecturi-string"></a>

The URL that customers will be redirected to after completing Finicity Connect. Required unless Connect is embedded inside our application (iframe).

##### webhook: `string`<a id="webhook-string"></a>

The publicly available URL you want to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-connect/) for event details.

##### webhookContentType: `string`<a id="webhookcontenttype-string"></a>

The content type the webhook events will be sent in. Supported types: \\\"application/json\\\" and \\\"application/xml\\\".

##### webhookData: `object`<a id="webhookdata-object"></a>

Allows additional identifiable information to be inserted into the payload of connect webhook events. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).

##### webhookHeaders: `object`<a id="webhookheaders-object"></a>

Allows additional identifiable information to be included as headers of connect webhook event. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).

##### institutionSettings: `object`<a id="institutionsettings-object"></a>

Advanced options for configuration of which institutions to display in. See [Institution Settings](https://developer.mastercard.com/open-banking-us/documentation/connect/connect-institutions-settings/).

##### fromDate: `number`<a id="fromdate-number"></a>

The `fromDate` parameter is used when experiences are associated with a credit decisioning report and any other reports with transaction data. The value is in epoch time and must be 10 digits. Example: 1494449017. If it\\\'s greater than 10 digits, then the `fromDate` is set to the credit decisioning report\\\'s default `fromDate`.  For an experience that generates multiple reports, the `fromDate` gets passed to the reports that support it.  However, Connect doesn\\\'t pass this parameter to the following reports: * Pay Statement Extraction Report * VOIE - Paystub (with TXVerify) Report * Statement Report * Verification of Income Report * VOIE - Payroll Report  Note: this field isn\\\'t used if you\\\'re only collecting transaction data without a report.

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### singleUseUrl: `boolean`<a id="singleuseurl-boolean"></a>

\\\"true\\\": The URL link expires after a Connect session successfully completes.  Note: when the `singleUseUrl` and the `experience` parameters are passed in the same call, the `singleUseUrl` value overrides the `singleUseUrl` value configured in the `experience` parameter.

#### 🔄 Return<a id="🔄-return"></a>

[ConnectEmailUrl](./models/connect-email-url.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connect/v2/send/email/jointBorrower` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.connect.verifyMicroEntryMicrodeposits`<a id="mastercardconnectverifymicroentrymicrodeposits"></a>

The UI re-engages the consumer to enter two microdeposit amounts found in their account and validates them.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyMicroEntryMicrodepositsResponse =
  await mastercard.connect.verifyMicroEntryMicrodeposits({
    partnerId: "1234583871234",
    customerId: "1005061234",
    redirectUri: "https://www.finicity.com/connect/",
    webhook: "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b",
    webhookContentType: "application/json",
    experience: "default",
    accountId: "5011648377",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partnerId: `string`<a id="partnerid-string"></a>

Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)

##### customerId: `string`<a id="customerid-string"></a>

A customer ID. See Add Customer API for how to create a customer ID.

##### redirectUri: `string`<a id="redirecturi-string"></a>

The URL that customers will be redirected to after completing Finicity Connect. Required unless Connect is embedded inside our application (iframe).

##### webhook: `string`<a id="webhook-string"></a>

The publicly available URL you want to be notified with events as the user progresses through the application. See [Connect Webhook Event](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-connect/) for event details.

##### webhookContentType: `string`<a id="webhookcontenttype-string"></a>

The content type the webhook events will be sent in. Supported types: \\\"application/json\\\" and \\\"application/xml\\\".

##### webhookData: `object`<a id="webhookdata-object"></a>

Allows additional identifiable information to be inserted into the payload of connect webhook events. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).

##### webhookHeaders: `object`<a id="webhookheaders-object"></a>

Allows additional identifiable information to be included as headers of connect webhook event. See: [Custom Webhooks](https://developer.mastercard.com/open-banking-us/documentation/webhooks/webhooks-custom/).

##### experience: `string`<a id="experience-string"></a>

The `experience` field allows you to customize: * Brand: color and logo * Icon: displayed on the \\\"Share your data\\\" page * Popular institutions: displayed on the Bank Search page * Report: the credit decisioning report to send when Connect completes. * MVS modules: financial, payroll, paystub  Note: the Finicity sales engineers (SE) help you set up a default experience for your company when you migrate to Connect 2.0. For each additional experience you create thereafter, they\\\'ll give you a unique ID. See [Generate Connect URL](https://developer.mastercard.com/open-banking-us/documentation/connect/generate-2-connect-url-apis/).  Experience values options: * \\\"default\\\": your default experience (must be defined) * GUID: the code for a different experience * Not defined: If you don\\\'t pass the experience parameter, then Connect\\\'s out of the box default experience (add accounts but no branding) is used, and the MVS modules will not run.

##### accountId: `string`<a id="accountid-string"></a>

An account ID

#### 🔄 Return<a id="🔄-return"></a>

[ConnectUrl](./models/connect-url.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connect/v2/generate/microentry/verify` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.consumers.createConsumerRecord`<a id="mastercardconsumerscreateconsumerrecord"></a>

Create a consumer record associated with the given customer. A consumer persists as the owner of any reports that are generated, even after the original customer is deleted from the system.

A consumer must be created for the given customer before calling any of the Generate Report services.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createConsumerRecordResponse =
  await mastercard.consumers.createConsumerRecord({
    customerId: "1005061234",
    firstName: "John",
    lastName: "Smith",
    address: "434 W Ascension Way",
    city: "Murray",
    state: "UT",
    zip: "84123",
    phone: "1-801-984-4200",
    ssn: "999-99-9999",
    birthday: {
      year: 1989,
      month: 8,
      dayOfMonth: 13,
    },
    email: "myname@mycompany.com",
    suffix: "PhD",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### firstName: `string`<a id="firstname-string"></a>

The first name of the account holder

##### lastName: `string`<a id="lastname-string"></a>

The last name of the account holder

##### address: `string`<a id="address-string"></a>

A street address

##### city: `string`<a id="city-string"></a>

City

##### state: `string`<a id="state-string"></a>

State

##### zip: `string`<a id="zip-string"></a>

A ZIP code

##### phone: `string`<a id="phone-string"></a>

A phone number (max length 15).

##### ssn: `string`<a id="ssn-string"></a>

A full SSN with or without hyphens

##### birthday: [`Birthday`](./models/birthday.ts)<a id="birthday-birthdaymodelsbirthdayts"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### email: `string`<a id="email-string"></a>

An email address

##### suffix: `string`<a id="suffix-string"></a>

A generational or academic suffix

#### 🔄 Return<a id="🔄-return"></a>

[CreatedConsumer](./models/created-consumer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v1/customers/{customerId}/consumer` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.consumers.getByCustomerId`<a id="mastercardconsumersgetbycustomerid"></a>

Get the details of a consumer record by customer ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByCustomerIdResponse = await mastercard.consumers.getByCustomerId({
  customerId: "1005061234",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

#### 🔄 Return<a id="🔄-return"></a>

[Consumer](./models/consumer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v1/customers/{customerId}/consumer` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.consumers.getById`<a id="mastercardconsumersgetbyid"></a>

Get the details of a consumer record by consumer ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await mastercard.consumers.getById({
  consumerId: "0bf46322c167b562e6cbed9d40e19a4c",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consumerId: `string`<a id="consumerid-string"></a>

The consumer ID

#### 🔄 Return<a id="🔄-return"></a>

[Consumer](./models/consumer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v1/consumers/{consumerId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.consumers.modifyById`<a id="mastercardconsumersmodifybyid"></a>

Modify an existing consumer. All fields are required for a consumer record, but individual fields for this call are optional because fields that are not specified will be left unchanged.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const modifyByIdResponse = await mastercard.consumers.modifyById({
  consumerId: "0bf46322c167b562e6cbed9d40e19a4c",
  firstName: "John",
  lastName: "Smith",
  address: "434 W Ascension Way",
  city: "Murray",
  state: "UT",
  zip: "84123",
  phone: "1-801-984-4200",
  ssn: "999-99-9999",
  email: "myname@mycompany.com",
  suffix: "PhD",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consumerId: `string`<a id="consumerid-string"></a>

The consumer ID

##### firstName: `string`<a id="firstname-string"></a>

The first name of the account holder

##### lastName: `string`<a id="lastname-string"></a>

The last name of the account holder

##### address: `string`<a id="address-string"></a>

A street address

##### city: `string`<a id="city-string"></a>

City

##### state: `string`<a id="state-string"></a>

State

##### zip: `string`<a id="zip-string"></a>

A ZIP code

##### phone: `string`<a id="phone-string"></a>

A phone number (max length 15).

##### ssn: `string`<a id="ssn-string"></a>

A full SSN with or without hyphens

##### birthday: [`Birthday`](./models/birthday.ts)<a id="birthday-birthdaymodelsbirthdayts"></a>

##### email: `string`<a id="email-string"></a>

An email address

##### suffix: `string`<a id="suffix-string"></a>

A generational or academic suffix

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v1/consumers/{consumerId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.customerAuthorizationDetails.getAuthorizationDetails`<a id="mastercardcustomerauthorizationdetailsgetauthorizationdetails"></a>

The endpoint provides customer authorization details like authorization start date, authorization end date against the requested institution login id

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAuthorizationDetailsResponse =
  await mastercard.customerAuthorizationDetails.getAuthorizationDetails({
    institutionLoginId: 7008461438,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### institutionLoginId: `number`<a id="institutionloginid-number"></a>

Institution login id of the customer.

#### 🔄 Return<a id="🔄-return"></a>

[CustomerAuthorizationDetails](./models/customer-authorization-details.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/customers/institution-logins/{institution_login_id}/authorization-details` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.customers.enrollActiveCustomer`<a id="mastercardcustomersenrollactivecustomer"></a>

Enroll an active customer, which is the actual owner of one or more real-world accounts. This is a billable customer.

Active customers must use the "FinBank Billable" profiles for testing purposes.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const enrollActiveCustomerResponse =
  await mastercard.customers.enrollActiveCustomer({
    username: "customerusername1",
    firstName: "John",
    lastName: "Smith",
    applicationId: "123456789",
    phone: "1-801-984-4200",
    email: "myname@mycompany.com",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

The customer\\\'s username, assigned by the partner (a unique identifier), following these rules: minimum 6 characters maximum 255 characters any mix of uppercase, lowercase, numeric, and non-alphabet special characters ! @ . # $ % & * _ - + the use of email in this field is discouraged it is recommended to use a unique non-email identifier. Use of special characters may result in an error (e.g. í, ü, etc.). Usernames are unique. A username used in Test Drive can\\\'t be reused in other plans.

##### firstName: `string`<a id="firstname-string"></a>

The first name of the account holder

##### lastName: `string`<a id="lastname-string"></a>

The last name of the account holder

##### applicationId: `string`<a id="applicationid-string"></a>

`applicationId` value returned from the Get App Registration Status API and the partner assign the customers to. This cannot be changed once set. Only applicable in cases of partners with multiple registered applications. If the partner only has one app, this can usually be omitted. This field is populated after the app is in a status approved.

##### phone: `string`<a id="phone-string"></a>

A phone number (max length 15).

##### email: `string`<a id="email-string"></a>

An email address

#### 🔄 Return<a id="🔄-return"></a>

[CreatedCustomer](./models/created-customer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v2/customers/active` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.customers.enrollTestingCustomer`<a id="mastercardcustomersenrolltestingcustomer"></a>

Enroll a testing customer (Test Drive accounts).

For using testing customers with FinBank OAuth, you must register a test application with your systems engineer or account manager. Then, use that testing `applicationId` when creating testing customers.

Testing Customers can access FinBank profiles (except "FinBank Billable" profiles), and cannot access live financial institutions.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const enrollTestingCustomerResponse =
  await mastercard.customers.enrollTestingCustomer({
    username: "customerusername1",
    firstName: "John",
    lastName: "Smith",
    applicationId: "123456789",
    phone: "1-801-984-4200",
    email: "myname@mycompany.com",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

The customer\\\'s username, assigned by the partner (a unique identifier), following these rules: minimum 6 characters maximum 255 characters any mix of uppercase, lowercase, numeric, and non-alphabet special characters ! @ . # $ % & * _ - + the use of email in this field is discouraged it is recommended to use a unique non-email identifier. Use of special characters may result in an error (e.g. í, ü, etc.). Usernames are unique. A username used in Test Drive can\\\'t be reused in other plans.

##### firstName: `string`<a id="firstname-string"></a>

The first name of the account holder

##### lastName: `string`<a id="lastname-string"></a>

The last name of the account holder

##### applicationId: `string`<a id="applicationid-string"></a>

`applicationId` value returned from the Get App Registration Status API and the partner assign the customers to. This cannot be changed once set. Only applicable in cases of partners with multiple registered applications. If the partner only has one app, this can usually be omitted. This field is populated after the app is in a status approved.

##### phone: `string`<a id="phone-string"></a>

A phone number (max length 15).

##### email: `string`<a id="email-string"></a>

An email address

#### 🔄 Return<a id="🔄-return"></a>

[CreatedCustomer](./models/created-customer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v2/customers/testing` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.customers.findEnrolledUsers`<a id="mastercardcustomersfindenrolledusers"></a>

Find all customers enrolled by the current partner, where the search text is found in the customer's username or any combination of `firstName` and `lastName` fields. If no search text is provided, all customers will be returned.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findEnrolledUsersResponse = await mastercard.customers.findEnrolledUsers({
  username: "customerusername1",
  type: "active",
  search: "Search Value",
  start: 1,
  limit: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

Username for exact match (will return 0 or 1 record)

##### type: `string`<a id="type-string"></a>

\"testing\" or \"active\" to return only customers of that type, or leave empty to return all customers

##### search: `string`<a id="search-string"></a>

The text you wish to match. Leave this empty if you wish to return all customers. Must be URL-encoded (see: [Handling Spaces in Queries](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/)).

##### start: `number`<a id="start-number"></a>

Index of the page of results to return

##### limit: `number`<a id="limit-number"></a>

Maximum number of results per page

#### 🔄 Return<a id="🔄-return"></a>

[Customers](./models/customers.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.customers.getById`<a id="mastercardcustomersgetbyid"></a>

Retrieve a customer by ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await mastercard.customers.getById({
  customerId: "1005061234",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

#### 🔄 Return<a id="🔄-return"></a>

[Customer](./models/customer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.customers.getWithAppDataById`<a id="mastercardcustomersgetwithappdatabyid"></a>

Retrieve a customer along with additional details about the OAuth application.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWithAppDataByIdResponse =
  await mastercard.customers.getWithAppDataById({
    customerId: "1005061234",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

#### 🔄 Return<a id="🔄-return"></a>

[CustomerWithAppData](./models/customer-with-app-data.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/application` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.customers.modifyById`<a id="mastercardcustomersmodifybyid"></a>

Modify an enrolled customer by ID.

You must specify either `firstName`, `lastName`, or both in the request.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const modifyByIdResponse = await mastercard.customers.modifyById({
  customerId: "1005061234",
  firstName: "John",
  lastName: "Smith",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### firstName: `string`<a id="firstname-string"></a>

The first name of the account holder

##### lastName: `string`<a id="lastname-string"></a>

The last name of the account holder

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.customers.removeById`<a id="mastercardcustomersremovebyid"></a>

Completely remove a customer from the system. This will remove the customer and all associated accounts and transactions.

⚠️ Use this service carefully! It will not pause for confirmation before performing the operation!

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await mastercard.customers.removeById({
  customerId: "1005061234",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.institutions.getBrandingById`<a id="mastercardinstitutionsgetbrandingbyid"></a>

Return the branding information for a financial institution.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBrandingByIdResponse = await mastercard.institutions.getBrandingById({
  institutionId: 4222,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### institutionId: `number`<a id="institutionid-number"></a>

The institution ID

#### 🔄 Return<a id="🔄-return"></a>

[BrandingWrapper](./models/branding-wrapper.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/institution/v2/institutions/{institutionId}/branding` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.institutions.getByIdDetails`<a id="mastercardinstitutionsgetbyiddetails"></a>

Get financial institution details by ID.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdDetailsResponse = await mastercard.institutions.getByIdDetails({
  institutionId: 4222,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### institutionId: `number`<a id="institutionid-number"></a>

The institution ID

#### 🔄 Return<a id="🔄-return"></a>

[InstitutionWrapper](./models/institution-wrapper.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/institution/v2/institutions/{institutionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.institutions.getCertifiedInstitutionsWithRssd`<a id="mastercardinstitutionsgetcertifiedinstitutionswithrssd"></a>

Search for certified financial institutions w/RSSD.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCertifiedInstitutionsWithRssdResponse =
  await mastercard.institutions.getCertifiedInstitutionsWithRssd({
    search: "finbank",
    start: 1,
    limit: 1,
    type: "voa",
    supportedCountries: ["us"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### search: `string`<a id="search-string"></a>

Search term (financial institution `name` field). Leave empty for all FIs.

##### start: `number`<a id="start-number"></a>

Index of the page of results to return

##### limit: `number`<a id="limit-number"></a>

Maximum number of results per page

##### type: `string`<a id="type-string"></a>

A product type: \"transAgg\", \"ach\", \"stateAgg\", \"voi\", \"voa\", \"aha\", \"availBalance\", \"accountOwner\"

##### supportedCountries: `string`[]<a id="supportedcountries-string"></a>

A list of country codes, \'*\' for all countries.

#### 🔄 Return<a id="🔄-return"></a>

[CertifiedInstitutions](./models/certified-institutions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/institution/v2/certifiedInstitutions/rssd` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.institutions.listCertifiedInstitutions`<a id="mastercardinstitutionslistcertifiedinstitutions"></a>

Search for financial institutions by certified product.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCertifiedInstitutionsResponse =
  await mastercard.institutions.listCertifiedInstitutions({
    search: "finbank",
    start: 1,
    limit: 1,
    type: "voa",
    supportedCountries: ["us"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### search: `string`<a id="search-string"></a>

Search term (financial institution `name` field). Leave empty for all FIs.

##### start: `number`<a id="start-number"></a>

Index of the page of results to return

##### limit: `number`<a id="limit-number"></a>

Maximum number of results per page

##### type: `string`<a id="type-string"></a>

A product type: \"transAgg\", \"ach\", \"stateAgg\", \"voi\", \"voa\", \"aha\", \"availBalance\", \"accountOwner\"

##### supportedCountries: `string`[]<a id="supportedcountries-string"></a>

A list of country codes, \'*\' for all countries.

#### 🔄 Return<a id="🔄-return"></a>

[CertifiedInstitutions](./models/certified-institutions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/institution/v2/certifiedInstitutions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.institutions.searchFinancialInstitutions`<a id="mastercardinstitutionssearchfinancialinstitutions"></a>

Search for financial institutions.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchFinancialInstitutionsResponse =
  await mastercard.institutions.searchFinancialInstitutions({
    search: "finbank",
    start: 1,
    limit: 1,
    type: "voa",
    supportedCountries: ["us"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### search: `string`<a id="search-string"></a>

Search term (financial institution `name` field). Leave empty for all FIs.

##### start: `number`<a id="start-number"></a>

Index of the page of results to return

##### limit: `number`<a id="limit-number"></a>

Maximum number of results per page

##### type: `string`<a id="type-string"></a>

A product type: \"transAgg\", \"ach\", \"stateAgg\", \"voi\", \"voa\", \"aha\", \"availBalance\", \"accountOwner\"

##### supportedCountries: `string`[]<a id="supportedcountries-string"></a>

A list of country codes, \'*\' for all countries.

#### 🔄 Return<a id="🔄-return"></a>

[Institutions](./models/institutions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/institution/v2/institutions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.payStatements.uploadForCustomer`<a id="mastercardpaystatementsuploadforcustomer"></a>

Upload pay statements for a customer.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadForCustomerResponse =
  await mastercard.payStatements.uploadForCustomer({
    customerId: "1005061234",
    label: "lastPayPeriod",
    statement: "VGhpcyBtdXN0IGJlIGFuIGltYWdl",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### label: `string`<a id="label-string"></a>

The label to be associated with the pay statement. This label will allow the paystub to go through data extraction. * `lastPayPeriod`: default label that should be used for the VOIE - Paystub products * `lastPayPeriodMinusOne`: the second most recent pay statement * `lastPayPeriodMinusTwo`: the third most recent pay statement * `previousYearLastPayPeriod` Last pay statement of the previous calendar year * `previousYear2LastPayPeriod`: last pay statement of the calendar year 2 years prior * `earliestPayPeriod`: the earliest pay statement

##### statement: `string`<a id="statement-string"></a>

A Base64 encoded pay statement file. Finicity supports PDF, JPG, or PNG files.

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

#### 🔄 Return<a id="🔄-return"></a>

[Asset](./models/asset.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/payStatements` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.paymentHistory.generateCustomerPaymentReport`<a id="mastercardpaymenthistorygeneratecustomerpaymentreport"></a>

Payment history report analyzes up to 12-months of transactions and predicts the probability that a SMB will experience a payment risk event, such as NSF/Overdraft or missed recurring payments, in the near future when making a payment. The Risk Score provided in the report is a 2-digit ranking with four levels of risk going from low to high.

Some of the highlights of calculated risk present in the report include:
* Risk Score representing the likelihood of a missed payment
  based on analysis of permissioned open-banking data

* Monthly average balance for all accounts by month in the requested
  time period

* Total deposit amount by month for all accounts in the requested time
  period

* Total withdrawal amounts by month for all accounts in the requested
  time period

* Number of NSF counts and aggregate amount per month in the requested
  time period

* Recurring loan payment amounts per month in the requested time period
* Insurance payment amount per month in the requested time period
* Tax payment amounts per month in the requested time period

This version of the API is intended for piloting and integration testing your application with the Payment History product. It does not adhere to FCRA requirements, and should not be used for production/lending purposes. See _Generate Payment History - FCRA_ for the FCRA compliant version of this API.

*Note:* this is a premium service, billable per every successful API call for non-testing customers.

A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get OBB Analytics Report_ (operation: _GetObbAnalyticsReport_).
*Note:* this is a premium service, billable per every successful API call for non-testing customers.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateCustomerPaymentReportResponse =
  await mastercard.paymentHistory.generateCustomerPaymentReport({
    customerId: "1005061234",
    referenceNumber: "abc123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### referenceNumber: `string`<a id="referencenumber-string"></a>

Partner-provided reference number to correlate reports.

#### 🔄 Return<a id="🔄-return"></a>

[ObbAnalyticsReportAck](./models/obb-analytics-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/payment-history/v1/customer/{customerId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.paymentHistory.generateFcraPaymentReport`<a id="mastercardpaymenthistorygeneratefcrapaymentreport"></a>

Payment history report analyzes up to 12-months of transactions and predicts the probability that a SMB will experience a payment risk event, such as NSF/Overdraft or missed recurring payments, in the near future when making a payment. The Risk Score provided in the report is a 2-digit ranking with four levels of risk going from low to high.

Some of the highlights of calculated risk present in the report include:
* Risk Score representing the likelihood of a missed payment
  based on analysis of permissioned open-banking data

* Monthly average balance for all accounts by month in the requested
  time period

* Total deposit amount by month for all accounts in the requested time
  period

* Total withdrawal amounts by month for all accounts in the requested
  time period

* Number of NSF counts and aggregate amount per month in the requested
  time period

* Recurring loan payment amounts per month in the requested time period
* Insurance payment amount per month in the requested time period
* Tax payment amounts per month in the requested time period

This version of the API is intended for production use. It maintains and
 enforces all compliance with FCRA rules and requirements.


*Note:* this is a premium service, billable per every successful API call for non-testing customers.

A successful call to this API will generate analytics and store a report within Finicity. The report can be retrieved via _Get OBB Analytics Report - FCRA_  (operation: _GetObbAnalyticsReportFcra_).

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateFcraPaymentReportResponse =
  await mastercard.paymentHistory.generateFcraPaymentReport({
    customerId: "1005061234",
    referenceNumber: "abc123",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### referenceNumber: `string`<a id="referencenumber-string"></a>

Partner-provided reference number to correlate reports.

#### 🔄 Return<a id="🔄-return"></a>

[ObbAnalyticsReportAck](./models/obb-analytics-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/payment-history/v1/customer/{customerId}/fcra` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.paymentHistory.getReportData`<a id="mastercardpaymenthistorygetreportdata"></a>

Retrieve the report saved by _Generate Balance Analytics_, _Generate Cash Flow Analytics_, or _Generate Payment History_. Requires the report ID generated by the previous call.

Report data can either be retrieved as a JSON document or PDF file.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getReportDataResponse = await mastercard.paymentHistory.getReportData({
  obbReportId: "obbReportId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### obbReportId: `string`<a id="obbreportid-string"></a>

Report ID generated and returned by OBB products

#### 🔄 Return<a id="🔄-return"></a>

[ObbAnalyticsReport](./models/obb-analytics-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/data/v1/{obb_report_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.paymentHistory.getReportDataFcra`<a id="mastercardpaymenthistorygetreportdatafcra"></a>

Retrieve the report saved by _Generate Balance Analytics - FCRA_, _Generate Cash Flow Analytics - FCRA_, or _Generate Payment History - FCRA_. Requires the report ID generated by the previous call.

Report data can either be retrieved as a JSON document or PDF file.

*Note:* this is a premium service, billable per every successful API call for non-testing customers.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getReportDataFcraResponse =
  await mastercard.paymentHistory.getReportDataFcra({
    obbReportId: "obbReportId_example",
    purpose: "purpose_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### obbReportId: `string`<a id="obbreportid-string"></a>

Report ID generated and returned by OBB products

##### purpose: `string`<a id="purpose-string"></a>

2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports.

#### 🔄 Return<a id="🔄-return"></a>

[ObbAnalyticsReport](./models/obb-analytics-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/analytics/data/v1/{obb_report_id}/fcra` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.payments.getAccountOwnerDetails`<a id="mastercardpaymentsgetaccountownerdetails"></a>

Retrieve the names and addresses of the account owner from a financial institution.

Note: this is a premium service, billable per every successful API call.

This service retrieves account data from the institution. This usually returns quickly, but in some scenarios may take a few minutes to complete. In the event of a timeout condition, retry the call.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAccountOwnerDetailsResponse =
  await mastercard.payments.getAccountOwnerDetails({
    customerId: "1005061234",
    accountId: "5011648377",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

#### 🔄 Return<a id="🔄-return"></a>

[AccountOwner](./models/account-owner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/accounts/{accountId}/owner` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.payments.getAccountOwnerDetails_0`<a id="mastercardpaymentsgetaccountownerdetails_0"></a>

This service retrieves the account details for an account holder from an institution. The following data objects are available.

* Account holders

* Addresses

* Emails

* Phones

* Documentations

* Identity Insights


Note: The data returned varies from institution to institution as not all of them make the same data available. This is a premium service, billable per each successful API call.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAccountOwnerDetails_0Response =
  await mastercard.payments.getAccountOwnerDetails_0({
    customerId: "1005061234",
    accountId: "5011648377",
    withInsights: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

##### withInsights: `boolean`<a id="withinsights-boolean"></a>

If this parameter is true, Identity Insights data will be returned along with the account owner information

#### 🔄 Return<a id="🔄-return"></a>

[AccountOwnerHolders](./models/account-owner-holders.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v3/customers/{customerId}/accounts/{accountId}/owner` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.payments.getAchDetails`<a id="mastercardpaymentsgetachdetails"></a>

Return the real account number and routing number details for an ACH payment.

Note: this is a premium service, billable per every successful API call.

_Supported account types_: "checking", "savings", "moneyMarket", "cd"

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAchDetailsResponse = await mastercard.payments.getAchDetails({
  customerId: "1005061234",
  accountId: "5011648377",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

#### 🔄 Return<a id="🔄-return"></a>

[ACHDetails](./models/achdetails.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/accounts/{accountId}/details` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.payments.getAvailableBalanceLive`<a id="mastercardpaymentsgetavailablebalancelive"></a>

Retrieve the available and cleared account balances for a single account in real-time directly from a financial institution.

Note: this is a premium service, billable per every successful API call.

_Supported account types_: "checking", "savings", "moneyMarket", "cd"

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAvailableBalanceLiveResponse =
  await mastercard.payments.getAvailableBalanceLive({
    customerId: "1005061234",
    accountId: "5011648377",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

#### 🔄 Return<a id="🔄-return"></a>

[AvailableBalance](./models/available-balance.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/accounts/{accountId}/availableBalance/live` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.payments.getLatestCachedBalance`<a id="mastercardpaymentsgetlatestcachedbalance"></a>

Retrieve the latest cached available and cleared account balances for a customer. Since we update and store balances throughout the day, this is the most accurate balance information available when a connection to a financial institution is unavailable or when a faster response is needed. Only deposit account types are supported: Checking, Savings, Money Market, and CD.

Note: this is a premium service, billable per every successful API call. Enrollment is required.

_Supported account types_: "checking", "savings", "moneyMarket", "cd"

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLatestCachedBalanceResponse =
  await mastercard.payments.getLatestCachedBalance({
    customerId: "1005061234",
    accountId: "5011648377",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

#### 🔄 Return<a id="🔄-return"></a>

[AvailableBalance](./models/available-balance.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/accounts/{accountId}/availableBalance` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.payments.getLoanPaymentDetails`<a id="mastercardpaymentsgetloanpaymentdetails"></a>

Return the loan payment details of the customer for a loan-type account.

Note: this is a premium service, billable per every successful API call.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLoanPaymentDetailsResponse =
  await mastercard.payments.getLoanPaymentDetails({
    customerId: "1005061234",
    accountId: "5011648377",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

#### 🔄 Return<a id="🔄-return"></a>

[LoanPaymentDetails](./models/loan-payment-details.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v2/customers/{customerId}/accounts/{accountId}/loanDetails` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.portfolios.getMostRecentReports`<a id="mastercardportfoliosgetmostrecentreports"></a>

Return a portfolio of most recently generated reports for each report type for the given customer. If there are multiple reports that were generated for a report type (VOA, VOI, etc.), only the most recently generated report for the type will be returned.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMostRecentReportsResponse =
  await mastercard.portfolios.getMostRecentReports({
    customerId: "1005061234",
    portfolioId: "y4zsgccj4xpw-6-port",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### portfolioId: `string`<a id="portfolioid-string"></a>

A portfolio ID with the portfolio version number. Using the portfolio number without a version number will return the most recently generated reports.

#### 🔄 Return<a id="🔄-return"></a>

[PortfolioSummary](./models/portfolio-summary.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v1/customers/{customerId}/portfolios/{portfolioId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.portfolios.getPortfolioByConsumer`<a id="mastercardportfoliosgetportfoliobyconsumer"></a>

Return a portfolio of most recently generated reports for each report type for a given consumer. If there are multiple reports that were generated for a report type (VOA, VOI, etc.), only the most recently generated report for the type will be returned.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPortfolioByConsumerResponse =
  await mastercard.portfolios.getPortfolioByConsumer({
    consumerId: "0bf46322c167b562e6cbed9d40e19a4c",
    portfolioId: "y4zsgccj4xpw-6-port",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consumerId: `string`<a id="consumerid-string"></a>

The consumer ID

##### portfolioId: `string`<a id="portfolioid-string"></a>

A portfolio ID with the portfolio version number. Using the portfolio number without a version number will return the most recently generated reports.

#### 🔄 Return<a id="🔄-return"></a>

[PortfolioWithConsumerSummary](./models/portfolio-with-consumer-summary.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v1/consumers/{consumerId}/portfolios/{portfolioId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.reports.byConsumerId`<a id="mastercardreportsbyconsumerid"></a>

Get all reports that have been generated by previous calls to Generate Report services for the given consumer.

The `status` fields in the returned list contain "inProgress", "failure", or "success". If the status shows "inProgress", the client app should wait 20 seconds and then call this API again.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const byConsumerIdResponse = await mastercard.reports.byConsumerId({
  purpose: "31",
  consumerId: "0bf46322c167b562e6cbed9d40e19a4c",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consumerId: `string`<a id="consumerid-string"></a>

The consumer ID

##### purpose: `string`<a id="purpose-string"></a>

2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports.

#### 🔄 Return<a id="🔄-return"></a>

[ReportSummaries](./models/report-summaries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v1/consumers/{consumerId}/reports` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.reports.byCustomerId`<a id="mastercardreportsbycustomerid"></a>

Get all reports that have been generated by previous calls to Generate Report services for the given customer.

The `status` fields in the returned list contain "inProgress", "failure", or "success". If the status shows "inProgress", the client app should wait 20 seconds and then call this API again.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const byCustomerIdResponse = await mastercard.reports.byCustomerId({
  customerId: "1005061234",
  purpose: "31",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### purpose: `string`<a id="purpose-string"></a>

2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports.

#### 🔄 Return<a id="🔄-return"></a>

[ReportSummaries](./models/report-summaries.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v1/customers/{customerId}/reports` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.reports.getByConsumerAndId`<a id="mastercardreportsgetbyconsumerandid"></a>

Get a report that has been generated by a previous call to one of the Generate Report services.

The report's `status` field contains "inProgress", "failure", or "success". If the status shows "inProgress", the client app should wait 20 seconds and then call this API again.

Report data can either be retrieved as a JSON document or a PDF file.  To specify the format required, set the _Accept request header_ to either **application/json** or **application/pdf**. If neither is set, the report format will be returned as a JSON document.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByConsumerAndIdResponse = await mastercard.reports.getByConsumerAndId({
  purpose: "31",
  consumerId: "0bf46322c167b562e6cbed9d40e19a4c",
  reportId: "u4hstnnak45g",
  onBehalfOf: "Some entity",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consumerId: `string`<a id="consumerid-string"></a>

The consumer ID

##### reportId: `string`<a id="reportid-string"></a>

ID of the report

##### purpose: `string`<a id="purpose-string"></a>

2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports.

##### onBehalfOf: `string`<a id="onbehalfof-string"></a>

The name of the entity you are retrieving the report on behalf of

#### 🔄 Return<a id="🔄-return"></a>

[Report](./models/report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v3/consumers/{consumerId}/reports/{reportId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.reports.getStatus`<a id="mastercardreportsgetstatus"></a>

Get a report that has been generated by a previous call to one of the Generate Report services.

The report's `status` field contains "inProgress", "failure", or "success". If the status shows "inProgress", the client app should wait 20 seconds and then call this API again.

Report data can either be retrieved as a JSON document or a PDF file.  To specify the format required, set the _Accept request header_ to either **application/json** or **application/pdf**. If neither is set, the report format will be returned as a JSON document.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStatusResponse = await mastercard.reports.getStatus({
  customerId: "1005061234",
  reportId: "u4hstnnak45g",
  onBehalfOf: "Some entity",
  purpose: "31",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### reportId: `string`<a id="reportid-string"></a>

ID of the report

##### onBehalfOf: `string`<a id="onbehalfof-string"></a>

The name of the entity you are retrieving the report on behalf of

##### purpose: `string`<a id="purpose-string"></a>

2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports.

#### 🔄 Return<a id="🔄-return"></a>

[Report](./models/report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v3/customers/{customerId}/reports/{reportId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.thirdPartyAccess.generateKey`<a id="mastercardthirdpartyaccessgeneratekey"></a>

Generate access key for third party partners.
A partner can provide access to third party partners with this access key.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateKeyResponse = await mastercard.thirdPartyAccess.generateKey({
  customerId: "1005061234",
  partnerId: "1234583871234",
  thirdPartyPartnerId: "1234583871234",
  products: [
    {
      product: "moneyTransferDetails",
      payorId: "2445581559892",
      maxCalls: 200,
      accountId: "5011648377",
      accessPeriod: {
        type: "timeframe",
        startTime: "2022-03-10T06:06:20.042584549Z",
        endTime: "2022-03-10T06:06:20.042584549Z",
      },
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID. See Add Customer API for how to create a customer ID.

##### partnerId: `string`<a id="partnerid-string"></a>

Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)

##### thirdPartyPartnerId: `string`<a id="thirdpartypartnerid-string"></a>

Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)

##### products: [`ThirdPartyAccessProduct`](./models/third-party-access-product.ts)[]<a id="products-thirdpartyaccessproductmodelsthird-party-access-productts"></a>

##### provenance: [`ThirdPartyAccessProvenance`](./models/third-party-access-provenance.ts)<a id="provenance-thirdpartyaccessprovenancemodelsthird-party-access-provenancets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ThirdPartyAccessKeyReceiptData](./models/third-party-access-key-receipt-data.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/partners/accessKey` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.thirdPartyAccess.revokePartnersAccess`<a id="mastercardthirdpartyaccessrevokepartnersaccess"></a>

Revoke access of third party partners

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const revokePartnersAccessResponse =
  await mastercard.thirdPartyAccess.revokePartnersAccess({
    consentReceiptId: "cr_4pfI3r1X8aOHrDDwrwC01NHFxOXlT1",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consentReceiptId: `string`<a id="consentreceiptid-string"></a>

Third party access key receipt ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/partners/accessKey/{consentReceiptId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.thirdPartyAccess.updateAccess`<a id="mastercardthirdpartyaccessupdateaccess"></a>

Update access for third party partners

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAccessResponse = await mastercard.thirdPartyAccess.updateAccess({
  consentReceiptId: "cr_4pfI3r1X8aOHrDDwrwC01NHFxOXlT1",
  customerId: "1005061234",
  partnerId: "1234583871234",
  thirdPartyPartnerId: "1234583871234",
  products: [
    {
      product: "moneyTransferDetails",
      payorId: "2445581559892",
      maxCalls: 200,
      accountId: "5011648377",
      accessPeriod: {
        type: "timeframe",
        startTime: "2022-03-10T06:06:20.042584549Z",
        endTime: "2022-03-10T06:06:20.042584549Z",
      },
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID. See Add Customer API for how to create a customer ID.

##### partnerId: `string`<a id="partnerid-string"></a>

Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)

##### thirdPartyPartnerId: `string`<a id="thirdpartypartnerid-string"></a>

Your Partner ID displayed in the [Developer Dashboard](https://developer.mastercard.com/account/log-in)

##### products: [`ThirdPartyAccessProduct`](./models/third-party-access-product.ts)[]<a id="products-thirdpartyaccessproductmodelsthird-party-access-productts"></a>

##### consentReceiptId: `string`<a id="consentreceiptid-string"></a>

Third party access key receipt ID

##### provenance: [`ThirdPartyAccessProvenance`](./models/third-party-access-provenance.ts)<a id="provenance-thirdpartyaccessprovenancemodelsthird-party-access-provenancets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ThirdPartyAccessKeyReceiptData](./models/third-party-access-key-receipt-data.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/partners/accessKey/{consentReceiptId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.transactions.get24MonthsHistoryAndGenerateReport`<a id="mastercardtransactionsget24monthshistoryandgeneratereport"></a>

Generate a Transaction Report for the given accounts under the given customer. This service retrieves up to 24 months of transaction history for the given customer. It then uses this information to generate the Transaction Report.

This is a premium service. A billable event will be created upon the successful generation of the Transactions Report.

Before calling this API, a consumer must be created for the given customer ID (see Consumers APIs).

There cannot be more than 24 months between `fromDate` and `toDate`.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const get24MonthsHistoryAndGenerateReportResponse =
  await mastercard.transactions.get24MonthsHistoryAndGenerateReport({
    callbackUrl: "https://finicity-test/webhook",
    customerId: "1005061234",
    toDate: 1607450357,
    includePending: true,
    accountIds: "5011648377 5011648378 5011648379",
    fromDate: 1607450357,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### toDate: `number`<a id="todate-number"></a>

A end date

##### accountIds: `string`<a id="accountids-string"></a>

A whitespace-separated list of account IDs to be included in the report (all accounts will be included if not set)

##### fromDate: `number`<a id="fromdate-number"></a>

A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

##### includePending: `boolean`<a id="includepending-boolean"></a>

If pending transactions must be included

#### 🔄 Return<a id="🔄-return"></a>

[TransactionsReportAck](./models/transactions-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/transactions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.transactions.getAllCustomerTransactions`<a id="mastercardtransactionsgetallcustomertransactions"></a>

Get all transactions available for this customer within the given date range, across all accounts. This service supports paging and sorting by `transactionDate` (or `postedDate` if no transaction date is provided), with a maximum of 1000 transactions per request.

Standard consumer aggregation provides up to 180 days of transactions prior to the date each account was added to the Finicity system. To access older transactions, you must first call the service Load Historic Transactions for Account.

There is no limit for the size of the window between `fromDate` and `toDate`, however, the maximum number of transactions returned on one page is 1000.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllCustomerTransactionsResponse =
  await mastercard.transactions.getAllCustomerTransactions({
    customerId: "1005061234",
    fromDate: 1607450357,
    toDate: 1607450357,
    start: 1,
    limit: 1,
    sort: "desc",
    includePending: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### fromDate: `number`<a id="fromdate-number"></a>

A start date

##### toDate: `number`<a id="todate-number"></a>

A end date

##### start: `number`<a id="start-number"></a>

Index of the page of results to return

##### limit: `number`<a id="limit-number"></a>

Maximum number of results per page

##### sort: `string`<a id="sort-string"></a>

Date sort order: \"asc\" for ascending, \"desc\" for descending

##### includePending: `boolean`<a id="includepending-boolean"></a>

If pending transactions must be included

#### 🔄 Return<a id="🔄-return"></a>

[Transactions](./models/transactions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v3/customers/{customerId}/transactions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.transactions.getById`<a id="mastercardtransactionsgetbyid"></a>

Get details for the given transaction.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await mastercard.transactions.getById({
  customerId: "1005061234",
  transactionId: 21284820852,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### transactionId: `number`<a id="transactionid-number"></a>

A transaction ID

#### 🔄 Return<a id="🔄-return"></a>

[Transaction](./models/transaction.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v2/customers/{customerId}/transactions/{transactionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.transactions.getCustomerAccountTransactions`<a id="mastercardtransactionsgetcustomeraccounttransactions"></a>

Get all transactions available for this customer account within the given date range. This service supports paging and sorting by `transactionDate` (or `postedDate` if no transaction date is provided), with a maximum of 1000 transactions per request.

Standard consumer aggregation provides up to 180 days of transactions prior to the date each account was added to the Finicity system. To access older transactions, you must first call the Cash Flow Verification service Load Historic Transactions for Account.

There is no limit for the size of the window between `fromDate` and `toDate`, however, the maximum number of transactions returned on one page is 1000.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomerAccountTransactionsResponse =
  await mastercard.transactions.getCustomerAccountTransactions({
    customerId: "1005061234",
    accountId: "5011648377",
    fromDate: 1607450357,
    toDate: 1607450357,
    start: 1,
    limit: 1,
    sort: "desc",
    includePending: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

##### fromDate: `number`<a id="fromdate-number"></a>

A start date

##### toDate: `number`<a id="todate-number"></a>

A end date

##### start: `number`<a id="start-number"></a>

Index of the page of results to return

##### limit: `number`<a id="limit-number"></a>

Maximum number of results per page

##### sort: `string`<a id="sort-string"></a>

Date sort order: \"asc\" for ascending, \"desc\" for descending

##### includePending: `boolean`<a id="includepending-boolean"></a>

If pending transactions must be included

#### 🔄 Return<a id="🔄-return"></a>

[Transactions](./models/transactions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v4/customers/{customerId}/accounts/{accountId}/transactions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.transactions.loadHistoricTransactionsForCustomerAccount`<a id="mastercardtransactionsloadhistorictransactionsforcustomeraccount"></a>

Connect to the account's financial institution and load up to 24 months of historic transactions for the account. Length of history varies by institution.

This is a premium service. The billable event is a call to this service specifying a customer ID that has not been seen before by this service. (If this service is called multiple times with the same customer ID, to load transactions from multiple accounts, only one billable event has occurred.)

The recommended timeout setting for this request is 180 seconds in order to receive a response. However, you can terminate the connection after making the call the operation will still complete. You will have to pull the account records to check for an updated aggregation attempt date to know when the refresh is complete.

The date range sent to the institution is calculated from the account's `createdDate`. This means that calling this service a second time for the same account normally will not add any new transactions for the account. For this reason, a second call to this service for a known account ID will usually return immediately.

In a few specific scenarios, it may be desirable to force a second connection to the institution for a known account ID. Some examples are:

* The institution's policy has changed, making more transactions available
* Finicity has now added a longer transaction history support for the institution
* The first call encountered an error, and the resulting Aggregation Ticket has now been fixed by the Finicity Support Team

In these cases, the POST request can contain the parameter `force=true` in the request body to force the second connection.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const loadHistoricTransactionsForCustomerAccountResponse =
  await mastercard.transactions.loadHistoricTransactionsForCustomerAccount({
    customerId: "1005061234",
    accountId: "5011648377",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/accounts/{accountId}/transactions/historic` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.txPush.deleteSubscription`<a id="mastercardtxpushdeletesubscription"></a>

Delete a specific subscription to TxPush notifications for the given account. This could be individual deleting the account or transactions events. No more events will be sent for that specific subscription.

For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSubscriptionResponse = await mastercard.txPush.deleteSubscription({
  customerId: "1005061234",
  subscriptionId: 17554874,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### subscriptionId: `number`<a id="subscriptionid-number"></a>

The subscription ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/subscriptions/{subscriptionId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.txPush.disableNotifications`<a id="mastercardtxpushdisablenotifications"></a>

Delete all TxPush subscriptions with their notifications for the given account. No more notifications will be sent for account or transaction events.

For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const disableNotificationsResponse =
  await mastercard.txPush.disableNotifications({
    customerId: "1005061234",
    accountId: "5011648377",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/accounts/{accountId}/txpush` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.txPush.injectTestTransaction`<a id="mastercardtxpushinjecttesttransaction"></a>

Inject a transaction into the transaction list for a testing account. This allows an app to trigger TxPush notifications for the account in order to test the app's TxPush Listener service. This causes the platform to send one transaction event and one account event (showing that the account balance has changed). This service is only supported for testing accounts.

For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const injectTestTransactionResponse =
  await mastercard.txPush.injectTestTransaction({
    customerId: "1005061234",
    accountId: "5011648377",
    description: "a testing transaction description",
    amount: -4.25,
    status: "pending",
    postedDate: 1607450357,
    transactionDate: 1607450357,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

The description of the transaction

##### amount: `number`<a id="amount-number"></a>

The amount of the transaction

##### transactionDate: `number`<a id="transactiondate-number"></a>

A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

##### status: `string`<a id="status-string"></a>

\\\"active\\\" or \\\"pending\\\" (optional)

##### postedDate: `number`<a id="posteddate-number"></a>

A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).

#### 🔄 Return<a id="🔄-return"></a>

[CreatedTestTxPushTransaction](./models/created-test-tx-push-transaction.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/accounts/{accountId}/transactions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.txPush.subscribeNotifications`<a id="mastercardtxpushsubscribenotifications"></a>

Register a client app's TxPush Listener to receive TxPush notifications related to the given account.

Each call to this service will return two records, one with class account and one with class transaction. Account events are sent when values change in the account's fields (such as `balance` or `interestRate`). Transaction events are sent whenever a new transaction is posted for the account. For institutions that do not provide TxPush services, notifications are sent as soon as Finicity finds a new transaction or new account data through regular aggregation processes.

The listener's URL must be secure (HTTPS) for any real-world account. In addition, the client's TxPush Listener will need to be verified. HTTP and HTTPS connections are only allowed on the standard ports 80 (HTTP) and 443 (HTTPS). The use of other ports will result with the call failing.

For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const subscribeNotificationsResponse =
  await mastercard.txPush.subscribeNotifications({
    customerId: "1005061234",
    accountId: "5011648377",
    callbackUrl: "https://www.mydomain.com/txpush/listener",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A callback URL where to receive TxPush notifications

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountId: `string`<a id="accountid-string"></a>

The account ID

#### 🔄 Return<a id="🔄-return"></a>

[TxPushSubscriptions](./models/tx-push-subscriptions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/aggregation/v1/customers/{customerId}/accounts/{accountId}/txpush` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.verifyAssets.customerVOAReport`<a id="mastercardverifyassetscustomervoareport"></a>

Generate a Verification of Assets (VOA) report for all checking, savings, money market, and investment accounts for the given customer. This service retrieves up to twelve months of transaction history for each account and uses this information to generate the VOA report.

This is a premium service. The billing rate is the variable rate for Verification of Assets under the current subscription plan. The billable event is the successful generation of a VOA report.

Before calling this API, a consumer must be created for the given customer ID (see Consumers APIs).

If no account of type checking, savings, money market, or investment is found, the service will return HTTP 400 Bad Request.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const customerVOAReportResponse =
  await mastercard.verifyAssets.customerVOAReport({
    customerId: "1005061234",
    callbackUrl: "https://finicity-test/webhook",
    accountIds: "5011648377 5011648378 5011648379",
    showNsf: false,
    fromDate: 1607450357,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountIds: `string`<a id="accountids-string"></a>

A whitespace-separated list of account IDs to be included in the report (all accounts will be included if not set)

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### showNsf: `boolean`<a id="shownsf-boolean"></a>

Include the non-sufficient funds (NSF) summary JSON and the NSF summary PDF section in the report. Data included: * Account  * Total number of NSF funds  * Days since the most recent NFS funds fee

##### fromDate: `number`<a id="fromdate-number"></a>

A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

#### 🔄 Return<a id="🔄-return"></a>

[VOAReportAck](./models/voareport-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/voa` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.verifyAssets.generateVOAWithIncomeReport`<a id="mastercardverifyassetsgeneratevoawithincomereport"></a>

Generate a Verification of Assets with Income (VOAI) report for all checking, savings, money market, and investment accounts for the given customer. This service retrieves up to 24 months of transaction history for each account and uses this information to generate the VOAI report. The report includes 1 - 6 months of all debit and credit transactions for asset verification. By default, the history is set to 61 days, however, you can change the transaction history in this section by setting the `fromDate` parameter. The report also includes up to 24 months of income credit transactions (ordered by account and confidence level) regardless of `fromDate` for income verification.

This is a premium service. The billable event is the successful generation of a VOAI report.

Before calling this API, a consumer must be created for the given customer ID (see Consumers APIs).

If no account of type checking, savings, money market, or investment is found, the service will return HTTP 400 Bad Request.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateVOAWithIncomeReportResponse =
  await mastercard.verifyAssets.generateVOAWithIncomeReport({
    customerId: "1005061234",
    callbackUrl: "https://finicity-test/webhook",
    accountIds: "5011648377 5011648378 5011648379",
    showNsf: false,
    fromDate: 1607450357,
    incomeStreamConfidenceMinimum: 50,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountIds: `string`<a id="accountids-string"></a>

A whitespace-separated list of account IDs to be included in the report (all accounts will be included if not set)

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### showNsf: `boolean`<a id="shownsf-boolean"></a>

Include the non-sufficient funds (NSF) summary JSON and the NSF summary PDF section in the report. Data included: * Account  * Total number of NSF funds  * Days since the most recent NFS funds fee

##### fromDate: `number`<a id="fromdate-number"></a>

A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).

##### incomeStreamConfidenceMinimum: `number`<a id="incomestreamconfidenceminimum-number"></a>

Include income streams in the report, based on the income stream\\\'s confidence score. For example, Use the value 50 to include only income streams with a confidence score of 50 or higher.

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

#### 🔄 Return<a id="🔄-return"></a>

[VOAWithIncomeReportAck](./models/voawith-income-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/voaHistory` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.verifyAssets.getAssetSummary`<a id="mastercardverifyassetsgetassetsummary"></a>

Retrieve all checking, savings, money market, and investment accounts for a customer. The account, owner information, and the number of insufficient funds (NSFs) for checking accounts are also provided.

If no account type of checking, savings, money market, or investment is found, the service will return HTTP 400 Bad Request.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAssetSummaryResponse = await mastercard.verifyAssets.getAssetSummary({
  customerId: "1005061234",
  callbackUrl: "https://finicity-test/webhook",
  accountIds: "5011648377 5011648378 5011648379",
  showNsf: false,
  fromDate: 1607450357,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountIds: `string`<a id="accountids-string"></a>

A whitespace-separated list of account IDs to be included in the report (all accounts will be included if not set)

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### showNsf: `boolean`<a id="shownsf-boolean"></a>

Include the non-sufficient funds (NSF) summary JSON and the NSF summary PDF section in the report. Data included: * Account  * Total number of NSF funds  * Days since the most recent NFS funds fee

##### fromDate: `number`<a id="fromdate-number"></a>

A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

#### 🔄 Return<a id="🔄-return"></a>

[PrequalificationReportAck](./models/prequalification-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/assetSummary` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.verifyAssets.getCheckingSavingsInvestmentAccounts`<a id="mastercardverifyassetsgetcheckingsavingsinvestmentaccounts"></a>

Retrieve all checking, savings, money market, and investment accounts for a consumer. The account, owner information, and the number of insufficient funds (NSFs) for checking accounts are also provided.

If no account of type checking, savings, money market, or investment is found, the service will return HTTP 400 Bad Request.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCheckingSavingsInvestmentAccountsResponse =
  await mastercard.verifyAssets.getCheckingSavingsInvestmentAccounts({
    customerId: "1005061234",
    callbackUrl: "https://finicity-test/webhook",
    accountIds: "5011648377 5011648378 5011648379",
    showNsf: false,
    fromDate: 1607450357,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountIds: `string`<a id="accountids-string"></a>

A whitespace-separated list of account IDs to be included in the report (all accounts will be included if not set)

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### showNsf: `boolean`<a id="shownsf-boolean"></a>

Include the non-sufficient funds (NSF) summary JSON and the NSF summary PDF section in the report. Data included: * Account  * Total number of NSF funds  * Days since the most recent NFS funds fee

##### fromDate: `number`<a id="fromdate-number"></a>

A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

#### 🔄 Return<a id="🔄-return"></a>

[PrequalificationReportAck](./models/prequalification-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/preQualVoa` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.verifyIncomeAndEmployment.createVOIReport`<a id="mastercardverifyincomeandemploymentcreatevoireport"></a>

Generate a Verification of Income (VOI) report for all checking, savings, and money market accounts for the given customer. This service retrieves up to two years of transaction history for each account and uses this information to generate the VOI report.

This is a premium service. The billing rate is the variable rate for Verification of Income under the current subscription plan. The billable event is the successful generation of a VOI report.

If no account of type checking, savings, or money market is found, the service will return HTTP 400 Bad Request.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createVOIReportResponse =
  await mastercard.verifyIncomeAndEmployment.createVOIReport({
    customerId: "1005061234",
    callbackUrl: "https://finicity-test/webhook",
    accountIds: "5011648377 5011648378 5011648379",
    fromDate: 1607450357,
    incomeStreamConfidenceMinimum: 50,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountIds: `string`<a id="accountids-string"></a>

A whitespace-separated list of account IDs to be included in the report (all accounts will be included if not set)

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### fromDate: `number`<a id="fromdate-number"></a>

A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).

##### incomeStreamConfidenceMinimum: `number`<a id="incomestreamconfidenceminimum-number"></a>

Include income streams in the report, based on the income stream\\\'s confidence score. For example, Use the value 50 to include only income streams with a confidence score of 50 or higher.

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

#### 🔄 Return<a id="🔄-return"></a>

[VOIReportAck](./models/voireport-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/voi` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.verifyIncomeAndEmployment.generatePayStatementReport`<a id="mastercardverifyincomeandemploymentgeneratepaystatementreport"></a>

Generate Pay Statement Extraction Report for the given customer. This service accepts asset IDs of the stored pay statements to generate a Pay Statement Extraction Report.

This is a premium service. The billing rate is the variable rate for Pay Statement Extraction Report under the current subscription plan. The billable event is the successful generation of a Pay Statement Extraction Report.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generatePayStatementReportResponse =
  await mastercard.verifyIncomeAndEmployment.generatePayStatementReport({
    customerId: "1005061234",
    callbackUrl: "https://finicity-test/webhook",
    paystatementReport: {
      assetIds: ["097545c5-1c2a-4f20-a5ef-77f0820344c9-2018601178"],
      extractEarnings: true,
      extractDeductions: true,
      extractDirectDeposit: true,
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paystatementReport: [`PayStatementData`](./models/pay-statement-data.ts)<a id="paystatementreport-paystatementdatamodelspay-statement-datats"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

#### 🔄 Return<a id="🔄-return"></a>

[PayStatementReportAck](./models/pay-statement-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/payStatement` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.verifyIncomeAndEmployment.generateVOETransactionsReport`<a id="mastercardverifyincomeandemploymentgeneratevoetransactionsreport"></a>

Premium Service: A billable event when the API response is successful.

MVS-Direct integration developers only.

Used as a complimentary report to the VOA with Income and VOIE - Paystub (with TXVerify) reports and used to fulfill the pre-close VOE requirements.

Retrieve the latest credit transaction information from the borrower's connected bank accounts and groups them into income streams so that you can view their payment history to ensure a direct deport was made within the expected cadence. The report displays transaction descriptions without any dollar amounts so that income re-verification isn't necessary.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateVOETransactionsReportResponse =
  await mastercard.verifyIncomeAndEmployment.generateVOETransactionsReport({
    customerId: "1005061234",
    callbackUrl: "https://finicity-test/webhook",
    reportId: "u4hstnnak45g",
    accountIds: "5011648377 5011648378 5011648379",
    fromDate: 1607450357,
    incomeStreamConfidenceMinimum: 50,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### reportId: `string`<a id="reportid-string"></a>

A report ID

##### accountIds: `string`<a id="accountids-string"></a>

A whitespace-separated list of account IDs to be included in the report (all accounts will be included if not set)

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### fromDate: `number`<a id="fromdate-number"></a>

A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).

##### incomeStreamConfidenceMinimum: `number`<a id="incomestreamconfidenceminimum-number"></a>

Include income streams in the report, based on the income stream\\\'s confidence score. For example, Use the value 50 to include only income streams with a confidence score of 50 or higher.

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

#### 🔄 Return<a id="🔄-return"></a>

[VOETransactionsReportAck](./models/voetransactions-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/voeTransactions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.verifyIncomeAndEmployment.generateVOIEPaystubWithTxVerifyReport`<a id="mastercardverifyincomeandemploymentgeneratevoiepaystubwithtxverifyreport"></a>

Generate a VOIE - Paystub (with TXVerify) report for all checking and savings under the given customer. This service retrieves up to two years of transaction history for the given accounts. It then uses this information as well as the provided paystub(s), which are passed into the request body as asset IDs (generated using the Store Customer Pay Statement API) to generate the VOIE - Paystub (with TXVerify) report.

Note: if you are using this API to refresh the bank transactions, use the same asset ID from the first report. A new paystub is not required unless the paystub is too old for underwriting requirements. Using the same asset ID that was on the original report and the previously extracted details will be used to speed up report generation response time.

This is a premium service. The billing rate is the variable rate for VOIE TXVerify under the current subscription plan. The billable event is the successful generation of a VOIE TXVerify Report.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateVOIEPaystubWithTxVerifyReportResponse =
  await mastercard.verifyIncomeAndEmployment.generateVOIEPaystubWithTxVerifyReport(
    {
      customerId: "1005061234",
      callbackUrl: "https://finicity-test/webhook",
      accountIds: "5011648377 5011648378 5011648379",
      voieWithInterviewData: {
        txVerifyInterview: [
          {
            assetId: "097545c5-1c2a-4f20-a5ef-77f0820344c9-2018601178",
            accounts: ["5011648377", "5011648378", "5011648379"],
          },
        ],
        extractEarnings: true,
        extractDeductions: true,
        extractDirectDeposit: true,
      },
      fromDate: 1607450357,
      incomeStreamConfidenceMinimum: 50,
    }
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### voieWithInterviewData: [`VOIEWithInterviewData`](./models/voiewith-interview-data.ts)<a id="voiewithinterviewdata-voiewithinterviewdatamodelsvoiewith-interview-datats"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### accountIds: `string`<a id="accountids-string"></a>

A whitespace-separated list of account IDs to be included in the report (all accounts will be included if not set)

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### fromDate: `number`<a id="fromdate-number"></a>

A date in Unix epoch time (in seconds). See: [Handling Epoch Dates and Times](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/).

##### incomeStreamConfidenceMinimum: `number`<a id="incomestreamconfidenceminimum-number"></a>

Include income streams in the report, based on the income stream\\\'s confidence score. For example, Use the value 50 to include only income streams with a confidence score of 50 or higher.

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

#### 🔄 Return<a id="🔄-return"></a>

[VOIEPaystubWithTXVerifyReportAck](./models/voiepaystub-with-txverify-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/voieTxVerify/withInterview` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.verifyIncomeAndEmployment.generateVoePayrollReport`<a id="mastercardverifyincomeandemploymentgeneratevoepayrollreport"></a>

Generate or refresh a VOE - Payroll report. Often used as a complementary report to the VOIE-Payroll report to fulfill the pre-close VOE requirements. It retrieves the customer's employment details and employment status through the payroll source without any income information.

This is a premium service. The billable event is the successful generation of a VOE - Payroll report.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateVoePayrollReportResponse =
  await mastercard.verifyIncomeAndEmployment.generateVoePayrollReport({
    customerId: "1005061234",
    callbackUrl: "https://finicity-test/webhook",
    payrollData: {
      ssn: "999999999",
      dob: 1607450357,
      reportId: "u4hstnnak45g-voiepayroll",
    },
    payStatementsFromDate: 1607450357,
    marketSegment: "Mortgage",
    excludeEmpInfo: false,
    purpose: "31",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payrollData: [`PayrollData`](./models/payroll-data.ts)<a id="payrolldata-payrolldatamodelspayroll-datats"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### payStatementsFromDate: `number`<a id="paystatementsfromdate-number"></a>

Limits the pay statement history in the VOIE - Payroll report income record. Pay statements are only included if the payDate of the statement is equal to or greater than the start date requested. Date should be in Unix epoch time (in seconds). See: Handling Epoch Dates and Times.

##### marketSegment: `string`<a id="marketsegment-string"></a>

Use case for requesting the consumer\\\'s data. Current supported enumerations are \\\"Mortgage\\\" and \\\"KYC\\\". If your use case doesn\\\'t match one of these please reach out to your technical point of contact.

##### excludeEmpInfo: `boolean`<a id="excludeempinfo-boolean"></a>

Only used on an exception basis for clients that need to exclude EmpInfo data from the VOE-Payroll or VOIE-Payroll report. If true is passed EmpInfo payroll provider\\\'s data will not be searched or returned.

##### purpose: `string`<a id="purpose-string"></a>

FCRA required 2-digit Permissible Purpose Code, specifying the reason for retrieving this report.

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

#### 🔄 Return<a id="🔄-return"></a>

[PayrollReportAck](./models/payroll-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/voePayroll` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.verifyIncomeAndEmployment.generateVoiePaystubReport`<a id="mastercardverifyincomeandemploymentgeneratevoiepaystubreport"></a>

Generate a VOIE - Paystub report. This service uses the provided paystub(s), which are passed into the request body as asset IDs (generated using the Store Customer Pay Statement API) to generate the VOIE - Paystub report with digitized paystub details.

This is a premium service. The billing rate is the variable rate for VOIE - Paystub under the current subscription plan. The billable event is the successful generation of a VOIE - Paystub Report.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateVoiePaystubReportResponse =
  await mastercard.verifyIncomeAndEmployment.generateVoiePaystubReport({
    customerId: "1005061234",
    callbackUrl: "https://finicity-test/webhook",
    voieWithStatementData: {
      assetIds: ["097545c5-1c2a-4f20-a5ef-77f0820344c9-2018601178"],
      extractEarnings: true,
      extractDeductions: true,
      extractDirectDeposit: true,
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### voieWithStatementData: [`VOIEWithStatementData`](./models/voiewith-statement-data.ts)<a id="voiewithstatementdata-voiewithstatementdatamodelsvoiewith-statement-datats"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

#### 🔄 Return<a id="🔄-return"></a>

[VOIEPaystubReportAck](./models/voiepaystub-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/voieTxVerify/withStatement` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `mastercard.verifyIncomeAndEmployment.refreshVOIEPayrollReport`<a id="mastercardverifyincomeandemploymentrefreshvoiepayrollreport"></a>

Generate or refresh a VOIE - Payroll report. For clients using the product via a consumer permissioning experience via Connect, the original VOIE - Payroll report generates when the consumer completes the Connect experience, and this API is only used for future report refreshes without reengaging the consumer.

This is a premium service. The billable event is the successful generation of a VOIE - Payroll report.

_Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const refreshVOIEPayrollReportResponse =
  await mastercard.verifyIncomeAndEmployment.refreshVOIEPayrollReport({
    customerId: "1005061234",
    callbackUrl: "https://finicity-test/webhook",
    payrollData: {
      ssn: "999999999",
      dob: 1607450357,
      reportId: "u4hstnnak45g-voiepayroll",
    },
    payStatementsFromDate: 1607450357,
    marketSegment: "Mortgage",
    excludeEmpInfo: false,
    purpose: "31",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payrollData: [`PayrollData`](./models/payroll-data.ts)<a id="payrolldata-payrolldatamodelspayroll-datats"></a>

##### customerId: `string`<a id="customerid-string"></a>

A customer ID

##### reportCustomFields: [`ReportCustomField`](./models/report-custom-field.ts)[]<a id="reportcustomfields-reportcustomfieldmodelsreport-custom-fieldts"></a>

The `reportCustomFields` parameter is used when experiences are associated with a credit decisioning report.  Designate up to 5 custom fields that you\\\'d like associated with the report when it\\\'s generated. Every custom field consists of three variables: `label`, `value`, and `shown`. The `shown` variable is \\\"true\\\" or \\\"false\\\". * \\\"true\\\": (default) display the custom field in the PDF report * \\\"false\\\": don\\\'t display the custom field in the PDF report  For an experience that generates multiple reports, the `reportCustomFields` parameter gets passed to all reports.  All custom fields display in the Reseller Billing API.

##### payStatementsFromDate: `number`<a id="paystatementsfromdate-number"></a>

Limits the pay statement history in the VOIE - Payroll report income record. Pay statements are only included if the payDate of the statement is equal to or greater than the start date requested. Date should be in Unix epoch time (in seconds). See: Handling Epoch Dates and Times.

##### marketSegment: `string`<a id="marketsegment-string"></a>

Use case for requesting the consumer\\\'s data. Current supported enumerations are \\\"Mortgage\\\" and \\\"KYC\\\". If your use case doesn\\\'t match one of these please reach out to your technical point of contact.

##### excludeEmpInfo: `boolean`<a id="excludeempinfo-boolean"></a>

Only used on an exception basis for clients that need to exclude EmpInfo data from the VOE-Payroll or VOIE-Payroll report. If true is passed EmpInfo payroll provider\\\'s data will not be searched or returned.

##### purpose: `string`<a id="purpose-string"></a>

FCRA required 2-digit Permissible Purpose Code, specifying the reason for retrieving this report.

##### callbackUrl: `string`<a id="callbackurl-string"></a>

A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.

#### 🔄 Return<a id="🔄-return"></a>

[PayrollReportAck](./models/payroll-report-ack.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/decisioning/v2/customers/{customerId}/voiePayroll` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
