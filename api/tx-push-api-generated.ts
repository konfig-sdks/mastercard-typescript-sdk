/* tslint:disable */
/* eslint-disable */
/*
Open Banking

OpenAPI specification for Finicity APIs.

Open Banking solutions in the US are provided by Finicity, a Mastercard
company.

The version of the OpenAPI document: 1.16.0
Contact: apisupport@mastercard.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreatedTestTxPushTransaction } from '../models';
// @ts-ignore
import { ErrorMessage } from '../models';
// @ts-ignore
import { TestTxPushTransaction } from '../models';
// @ts-ignore
import { TxPushSubscriptionParameters } from '../models';
// @ts-ignore
import { TxPushSubscriptions } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TxPushApi - axios parameter creator
 * @export
 */
export const TxPushApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a specific subscription to TxPush notifications for the given account. This could be individual deleting the account or transactions events. No more events will be sent for that specific subscription.  For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
         * @summary Delete TxPush Subscription
         * @param {string} customerId A customer ID
         * @param {number} subscriptionId The subscription ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSubscription: async (customerId: string, subscriptionId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            assertParamExists('deleteSubscription', 'customerId', customerId)
            // verify required parameter 'subscriptionId' is not null or undefined
            assertParamExists('deleteSubscription', 'subscriptionId', subscriptionId)
            const localVarPath = `/aggregation/v1/customers/{customerId}/subscriptions/{subscriptionId}`
                .replace(`{${"customerId"}}`, encodeURIComponent(String(customerId !== undefined ? customerId : `-customerId-`)))
                .replace(`{${"subscriptionId"}}`, encodeURIComponent(String(subscriptionId !== undefined ? subscriptionId : `-subscriptionId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication FinicityAppKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Finicity-App-Key", keyParamName: "finicityAppKey", configuration })
            // authentication FinicityAppToken required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Finicity-App-Token", keyParamName: "finicityAppToken", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/aggregation/v1/customers/{customerId}/subscriptions/{subscriptionId}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete all TxPush subscriptions with their notifications for the given account. No more notifications will be sent for account or transaction events.  For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
         * @summary Disable TxPush Notifications
         * @param {string} customerId A customer ID
         * @param {string} accountId The account ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        disableNotifications: async (customerId: string, accountId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            assertParamExists('disableNotifications', 'customerId', customerId)
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('disableNotifications', 'accountId', accountId)
            const localVarPath = `/aggregation/v1/customers/{customerId}/accounts/{accountId}/txpush`
                .replace(`{${"customerId"}}`, encodeURIComponent(String(customerId !== undefined ? customerId : `-customerId-`)))
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId !== undefined ? accountId : `-accountId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication FinicityAppKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Finicity-App-Key", keyParamName: "finicityAppKey", configuration })
            // authentication FinicityAppToken required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Finicity-App-Token", keyParamName: "finicityAppToken", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/aggregation/v1/customers/{customerId}/accounts/{accountId}/txpush',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Inject a transaction into the transaction list for a testing account. This allows an app to trigger TxPush notifications for the account in order to test the app\'s TxPush Listener service. This causes the platform to send one transaction event and one account event (showing that the account balance has changed). This service is only supported for testing accounts.  For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
         * @summary Create TxPush Test Transaction
         * @param {string} customerId A customer ID
         * @param {string} accountId The account ID
         * @param {TestTxPushTransaction} testTxPushTransaction 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        injectTestTransaction: async (customerId: string, accountId: string, testTxPushTransaction: TestTxPushTransaction, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            assertParamExists('injectTestTransaction', 'customerId', customerId)
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('injectTestTransaction', 'accountId', accountId)
            // verify required parameter 'testTxPushTransaction' is not null or undefined
            assertParamExists('injectTestTransaction', 'testTxPushTransaction', testTxPushTransaction)
            const localVarPath = `/aggregation/v1/customers/{customerId}/accounts/{accountId}/transactions`
                .replace(`{${"customerId"}}`, encodeURIComponent(String(customerId !== undefined ? customerId : `-customerId-`)))
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId !== undefined ? accountId : `-accountId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication FinicityAppKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Finicity-App-Key", keyParamName: "finicityAppKey", configuration })
            // authentication FinicityAppToken required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Finicity-App-Token", keyParamName: "finicityAppToken", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: testTxPushTransaction,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/aggregation/v1/customers/{customerId}/accounts/{accountId}/transactions',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(testTxPushTransaction, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Register a client app\'s TxPush Listener to receive TxPush notifications related to the given account.  Each call to this service will return two records, one with class account and one with class transaction. Account events are sent when values change in the account\'s fields (such as `balance` or `interestRate`). Transaction events are sent whenever a new transaction is posted for the account. For institutions that do not provide TxPush services, notifications are sent as soon as Finicity finds a new transaction or new account data through regular aggregation processes.  The listener\'s URL must be secure (HTTPS) for any real-world account. In addition, the client\'s TxPush Listener will need to be verified. HTTP and HTTPS connections are only allowed on the standard ports 80 (HTTP) and 443 (HTTPS). The use of other ports will result with the call failing.  For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
         * @summary Subscribe to TxPush Notifications
         * @param {string} customerId A customer ID
         * @param {string} accountId The account ID
         * @param {TxPushSubscriptionParameters} txPushSubscriptionParameters 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subscribeNotifications: async (customerId: string, accountId: string, txPushSubscriptionParameters: TxPushSubscriptionParameters, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            assertParamExists('subscribeNotifications', 'customerId', customerId)
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('subscribeNotifications', 'accountId', accountId)
            // verify required parameter 'txPushSubscriptionParameters' is not null or undefined
            assertParamExists('subscribeNotifications', 'txPushSubscriptionParameters', txPushSubscriptionParameters)
            const localVarPath = `/aggregation/v1/customers/{customerId}/accounts/{accountId}/txpush`
                .replace(`{${"customerId"}}`, encodeURIComponent(String(customerId !== undefined ? customerId : `-customerId-`)))
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId !== undefined ? accountId : `-accountId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication FinicityAppKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Finicity-App-Key", keyParamName: "finicityAppKey", configuration })
            // authentication FinicityAppToken required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Finicity-App-Token", keyParamName: "finicityAppToken", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: txPushSubscriptionParameters,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/aggregation/v1/customers/{customerId}/accounts/{accountId}/txpush',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(txPushSubscriptionParameters, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TxPushApi - functional programming interface
 * @export
 */
export const TxPushApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TxPushApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a specific subscription to TxPush notifications for the given account. This could be individual deleting the account or transactions events. No more events will be sent for that specific subscription.  For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
         * @summary Delete TxPush Subscription
         * @param {TxPushApiDeleteSubscriptionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSubscription(requestParameters: TxPushApiDeleteSubscriptionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSubscription(requestParameters.customerId, requestParameters.subscriptionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete all TxPush subscriptions with their notifications for the given account. No more notifications will be sent for account or transaction events.  For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
         * @summary Disable TxPush Notifications
         * @param {TxPushApiDisableNotificationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async disableNotifications(requestParameters: TxPushApiDisableNotificationsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.disableNotifications(requestParameters.customerId, requestParameters.accountId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Inject a transaction into the transaction list for a testing account. This allows an app to trigger TxPush notifications for the account in order to test the app\'s TxPush Listener service. This causes the platform to send one transaction event and one account event (showing that the account balance has changed). This service is only supported for testing accounts.  For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
         * @summary Create TxPush Test Transaction
         * @param {TxPushApiInjectTestTransactionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async injectTestTransaction(requestParameters: TxPushApiInjectTestTransactionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreatedTestTxPushTransaction>> {
            const testTxPushTransaction: TestTxPushTransaction = {
                description: requestParameters.description,
                amount: requestParameters.amount,
                status: requestParameters.status,
                postedDate: requestParameters.postedDate,
                transactionDate: requestParameters.transactionDate
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.injectTestTransaction(requestParameters.customerId, requestParameters.accountId, testTxPushTransaction, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Register a client app\'s TxPush Listener to receive TxPush notifications related to the given account.  Each call to this service will return two records, one with class account and one with class transaction. Account events are sent when values change in the account\'s fields (such as `balance` or `interestRate`). Transaction events are sent whenever a new transaction is posted for the account. For institutions that do not provide TxPush services, notifications are sent as soon as Finicity finds a new transaction or new account data through regular aggregation processes.  The listener\'s URL must be secure (HTTPS) for any real-world account. In addition, the client\'s TxPush Listener will need to be verified. HTTP and HTTPS connections are only allowed on the standard ports 80 (HTTP) and 443 (HTTPS). The use of other ports will result with the call failing.  For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
         * @summary Subscribe to TxPush Notifications
         * @param {TxPushApiSubscribeNotificationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async subscribeNotifications(requestParameters: TxPushApiSubscribeNotificationsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TxPushSubscriptions>> {
            const txPushSubscriptionParameters: TxPushSubscriptionParameters = {
                callbackUrl: requestParameters.callbackUrl
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.subscribeNotifications(requestParameters.customerId, requestParameters.accountId, txPushSubscriptionParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TxPushApi - factory interface
 * @export
 */
export const TxPushApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TxPushApiFp(configuration)
    return {
        /**
         * Delete a specific subscription to TxPush notifications for the given account. This could be individual deleting the account or transactions events. No more events will be sent for that specific subscription.  For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
         * @summary Delete TxPush Subscription
         * @param {TxPushApiDeleteSubscriptionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSubscription(requestParameters: TxPushApiDeleteSubscriptionRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteSubscription(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete all TxPush subscriptions with their notifications for the given account. No more notifications will be sent for account or transaction events.  For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
         * @summary Disable TxPush Notifications
         * @param {TxPushApiDisableNotificationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        disableNotifications(requestParameters: TxPushApiDisableNotificationsRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.disableNotifications(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Inject a transaction into the transaction list for a testing account. This allows an app to trigger TxPush notifications for the account in order to test the app\'s TxPush Listener service. This causes the platform to send one transaction event and one account event (showing that the account balance has changed). This service is only supported for testing accounts.  For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
         * @summary Create TxPush Test Transaction
         * @param {TxPushApiInjectTestTransactionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        injectTestTransaction(requestParameters: TxPushApiInjectTestTransactionRequest, options?: AxiosRequestConfig): AxiosPromise<CreatedTestTxPushTransaction> {
            return localVarFp.injectTestTransaction(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Register a client app\'s TxPush Listener to receive TxPush notifications related to the given account.  Each call to this service will return two records, one with class account and one with class transaction. Account events are sent when values change in the account\'s fields (such as `balance` or `interestRate`). Transaction events are sent whenever a new transaction is posted for the account. For institutions that do not provide TxPush services, notifications are sent as soon as Finicity finds a new transaction or new account data through regular aggregation processes.  The listener\'s URL must be secure (HTTPS) for any real-world account. In addition, the client\'s TxPush Listener will need to be verified. HTTP and HTTPS connections are only allowed on the standard ports 80 (HTTP) and 443 (HTTPS). The use of other ports will result with the call failing.  For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
         * @summary Subscribe to TxPush Notifications
         * @param {TxPushApiSubscribeNotificationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        subscribeNotifications(requestParameters: TxPushApiSubscribeNotificationsRequest, options?: AxiosRequestConfig): AxiosPromise<TxPushSubscriptions> {
            return localVarFp.subscribeNotifications(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteSubscription operation in TxPushApi.
 * @export
 * @interface TxPushApiDeleteSubscriptionRequest
 */
export type TxPushApiDeleteSubscriptionRequest = {
    
    /**
    * A customer ID
    * @type {string}
    * @memberof TxPushApiDeleteSubscription
    */
    readonly customerId: string
    
    /**
    * The subscription ID
    * @type {number}
    * @memberof TxPushApiDeleteSubscription
    */
    readonly subscriptionId: number
    
}

/**
 * Request parameters for disableNotifications operation in TxPushApi.
 * @export
 * @interface TxPushApiDisableNotificationsRequest
 */
export type TxPushApiDisableNotificationsRequest = {
    
    /**
    * A customer ID
    * @type {string}
    * @memberof TxPushApiDisableNotifications
    */
    readonly customerId: string
    
    /**
    * The account ID
    * @type {string}
    * @memberof TxPushApiDisableNotifications
    */
    readonly accountId: string
    
}

/**
 * Request parameters for injectTestTransaction operation in TxPushApi.
 * @export
 * @interface TxPushApiInjectTestTransactionRequest
 */
export type TxPushApiInjectTestTransactionRequest = {
    
    /**
    * A customer ID
    * @type {string}
    * @memberof TxPushApiInjectTestTransaction
    */
    readonly customerId: string
    
    /**
    * The account ID
    * @type {string}
    * @memberof TxPushApiInjectTestTransaction
    */
    readonly accountId: string
    
} & TestTxPushTransaction

/**
 * Request parameters for subscribeNotifications operation in TxPushApi.
 * @export
 * @interface TxPushApiSubscribeNotificationsRequest
 */
export type TxPushApiSubscribeNotificationsRequest = {
    
    /**
    * A customer ID
    * @type {string}
    * @memberof TxPushApiSubscribeNotifications
    */
    readonly customerId: string
    
    /**
    * The account ID
    * @type {string}
    * @memberof TxPushApiSubscribeNotifications
    */
    readonly accountId: string
    
} & TxPushSubscriptionParameters

/**
 * TxPushApiGenerated - object-oriented interface
 * @export
 * @class TxPushApiGenerated
 * @extends {BaseAPI}
 */
export class TxPushApiGenerated extends BaseAPI {
    /**
     * Delete a specific subscription to TxPush notifications for the given account. This could be individual deleting the account or transactions events. No more events will be sent for that specific subscription.  For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
     * @summary Delete TxPush Subscription
     * @param {TxPushApiDeleteSubscriptionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TxPushApiGenerated
     */
    public deleteSubscription(requestParameters: TxPushApiDeleteSubscriptionRequest, options?: AxiosRequestConfig) {
        return TxPushApiFp(this.configuration).deleteSubscription(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete all TxPush subscriptions with their notifications for the given account. No more notifications will be sent for account or transaction events.  For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
     * @summary Disable TxPush Notifications
     * @param {TxPushApiDisableNotificationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TxPushApiGenerated
     */
    public disableNotifications(requestParameters: TxPushApiDisableNotificationsRequest, options?: AxiosRequestConfig) {
        return TxPushApiFp(this.configuration).disableNotifications(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Inject a transaction into the transaction list for a testing account. This allows an app to trigger TxPush notifications for the account in order to test the app\'s TxPush Listener service. This causes the platform to send one transaction event and one account event (showing that the account balance has changed). This service is only supported for testing accounts.  For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
     * @summary Create TxPush Test Transaction
     * @param {TxPushApiInjectTestTransactionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TxPushApiGenerated
     */
    public injectTestTransaction(requestParameters: TxPushApiInjectTestTransactionRequest, options?: AxiosRequestConfig) {
        return TxPushApiFp(this.configuration).injectTestTransaction(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Register a client app\'s TxPush Listener to receive TxPush notifications related to the given account.  Each call to this service will return two records, one with class account and one with class transaction. Account events are sent when values change in the account\'s fields (such as `balance` or `interestRate`). Transaction events are sent whenever a new transaction is posted for the account. For institutions that do not provide TxPush services, notifications are sent as soon as Finicity finds a new transaction or new account data through regular aggregation processes.  The listener\'s URL must be secure (HTTPS) for any real-world account. In addition, the client\'s TxPush Listener will need to be verified. HTTP and HTTPS connections are only allowed on the standard ports 80 (HTTP) and 443 (HTTPS). The use of other ports will result with the call failing.  For additional details on this process, see [TxPush Listener Service](https://developer.mastercard.com/open-banking-us/documentation/products/manage/tx-push/#setting-up-the-txpush-listener-service).  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
     * @summary Subscribe to TxPush Notifications
     * @param {TxPushApiSubscribeNotificationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TxPushApiGenerated
     */
    public subscribeNotifications(requestParameters: TxPushApiSubscribeNotificationsRequest, options?: AxiosRequestConfig) {
        return TxPushApiFp(this.configuration).subscribeNotifications(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}