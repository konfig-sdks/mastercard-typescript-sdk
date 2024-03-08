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
import { ErrorMessage } from '../models';
// @ts-ignore
import { ThirdPartyAccessKeyData } from '../models';
// @ts-ignore
import { ThirdPartyAccessKeyReceiptData } from '../models';
// @ts-ignore
import { ThirdPartyAccessProduct } from '../models';
// @ts-ignore
import { ThirdPartyAccessProvenance } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ThirdPartyAccessApi - axios parameter creator
 * @export
 */
export const ThirdPartyAccessApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Generate access key for third party partners. A partner can provide access to third party partners with this access key.
         * @summary Generate Third Party Access Key
         * @param {ThirdPartyAccessKeyData} thirdPartyAccessKeyData 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateKey: async (thirdPartyAccessKeyData: ThirdPartyAccessKeyData, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'thirdPartyAccessKeyData' is not null or undefined
            assertParamExists('generateKey', 'thirdPartyAccessKeyData', thirdPartyAccessKeyData)
            const localVarPath = `/aggregation/v1/partners/accessKey`;
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
                requestBody: thirdPartyAccessKeyData,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/aggregation/v1/partners/accessKey',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(thirdPartyAccessKeyData, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Revoke access of third party partners
         * @summary Revoke Third Party Access
         * @param {string} consentReceiptId Third party access key receipt ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revokePartnersAccess: async (consentReceiptId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'consentReceiptId' is not null or undefined
            assertParamExists('revokePartnersAccess', 'consentReceiptId', consentReceiptId)
            const localVarPath = `/aggregation/v1/partners/accessKey/{consentReceiptId}`
                .replace(`{${"consentReceiptId"}}`, encodeURIComponent(String(consentReceiptId !== undefined ? consentReceiptId : `-consentReceiptId-`)));
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
                pathTemplate: '/aggregation/v1/partners/accessKey/{consentReceiptId}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update access for third party partners
         * @summary Update Third Party Access
         * @param {string} consentReceiptId Third party access key receipt ID
         * @param {ThirdPartyAccessKeyData} thirdPartyAccessKeyData 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAccess: async (consentReceiptId: string, thirdPartyAccessKeyData: ThirdPartyAccessKeyData, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'consentReceiptId' is not null or undefined
            assertParamExists('updateAccess', 'consentReceiptId', consentReceiptId)
            // verify required parameter 'thirdPartyAccessKeyData' is not null or undefined
            assertParamExists('updateAccess', 'thirdPartyAccessKeyData', thirdPartyAccessKeyData)
            const localVarPath = `/aggregation/v1/partners/accessKey/{consentReceiptId}`
                .replace(`{${"consentReceiptId"}}`, encodeURIComponent(String(consentReceiptId !== undefined ? consentReceiptId : `-consentReceiptId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
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
                requestBody: thirdPartyAccessKeyData,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/aggregation/v1/partners/accessKey/{consentReceiptId}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(thirdPartyAccessKeyData, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ThirdPartyAccessApi - functional programming interface
 * @export
 */
export const ThirdPartyAccessApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ThirdPartyAccessApiAxiosParamCreator(configuration)
    return {
        /**
         * Generate access key for third party partners. A partner can provide access to third party partners with this access key.
         * @summary Generate Third Party Access Key
         * @param {ThirdPartyAccessApiGenerateKeyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateKey(requestParameters: ThirdPartyAccessApiGenerateKeyRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThirdPartyAccessKeyReceiptData>> {
            const thirdPartyAccessKeyData: ThirdPartyAccessKeyData = {
                customerId: requestParameters.customerId,
                partnerId: requestParameters.partnerId,
                thirdPartyPartnerId: requestParameters.thirdPartyPartnerId,
                provenance: requestParameters.provenance,
                products: requestParameters.products
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateKey(thirdPartyAccessKeyData, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Revoke access of third party partners
         * @summary Revoke Third Party Access
         * @param {ThirdPartyAccessApiRevokePartnersAccessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async revokePartnersAccess(requestParameters: ThirdPartyAccessApiRevokePartnersAccessRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.revokePartnersAccess(requestParameters.consentReceiptId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update access for third party partners
         * @summary Update Third Party Access
         * @param {ThirdPartyAccessApiUpdateAccessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAccess(requestParameters: ThirdPartyAccessApiUpdateAccessRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThirdPartyAccessKeyReceiptData>> {
            const thirdPartyAccessKeyData: ThirdPartyAccessKeyData = {
                customerId: requestParameters.customerId,
                partnerId: requestParameters.partnerId,
                thirdPartyPartnerId: requestParameters.thirdPartyPartnerId,
                provenance: requestParameters.provenance,
                products: requestParameters.products
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAccess(requestParameters.consentReceiptId, thirdPartyAccessKeyData, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ThirdPartyAccessApi - factory interface
 * @export
 */
export const ThirdPartyAccessApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ThirdPartyAccessApiFp(configuration)
    return {
        /**
         * Generate access key for third party partners. A partner can provide access to third party partners with this access key.
         * @summary Generate Third Party Access Key
         * @param {ThirdPartyAccessApiGenerateKeyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateKey(requestParameters: ThirdPartyAccessApiGenerateKeyRequest, options?: AxiosRequestConfig): AxiosPromise<ThirdPartyAccessKeyReceiptData> {
            return localVarFp.generateKey(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Revoke access of third party partners
         * @summary Revoke Third Party Access
         * @param {ThirdPartyAccessApiRevokePartnersAccessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revokePartnersAccess(requestParameters: ThirdPartyAccessApiRevokePartnersAccessRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.revokePartnersAccess(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update access for third party partners
         * @summary Update Third Party Access
         * @param {ThirdPartyAccessApiUpdateAccessRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAccess(requestParameters: ThirdPartyAccessApiUpdateAccessRequest, options?: AxiosRequestConfig): AxiosPromise<ThirdPartyAccessKeyReceiptData> {
            return localVarFp.updateAccess(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for generateKey operation in ThirdPartyAccessApi.
 * @export
 * @interface ThirdPartyAccessApiGenerateKeyRequest
 */
export type ThirdPartyAccessApiGenerateKeyRequest = {
    
} & ThirdPartyAccessKeyData

/**
 * Request parameters for revokePartnersAccess operation in ThirdPartyAccessApi.
 * @export
 * @interface ThirdPartyAccessApiRevokePartnersAccessRequest
 */
export type ThirdPartyAccessApiRevokePartnersAccessRequest = {
    
    /**
    * Third party access key receipt ID
    * @type {string}
    * @memberof ThirdPartyAccessApiRevokePartnersAccess
    */
    readonly consentReceiptId: string
    
}

/**
 * Request parameters for updateAccess operation in ThirdPartyAccessApi.
 * @export
 * @interface ThirdPartyAccessApiUpdateAccessRequest
 */
export type ThirdPartyAccessApiUpdateAccessRequest = {
    
    /**
    * Third party access key receipt ID
    * @type {string}
    * @memberof ThirdPartyAccessApiUpdateAccess
    */
    readonly consentReceiptId: string
    
} & ThirdPartyAccessKeyData

/**
 * ThirdPartyAccessApiGenerated - object-oriented interface
 * @export
 * @class ThirdPartyAccessApiGenerated
 * @extends {BaseAPI}
 */
export class ThirdPartyAccessApiGenerated extends BaseAPI {
    /**
     * Generate access key for third party partners. A partner can provide access to third party partners with this access key.
     * @summary Generate Third Party Access Key
     * @param {ThirdPartyAccessApiGenerateKeyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyAccessApiGenerated
     */
    public generateKey(requestParameters: ThirdPartyAccessApiGenerateKeyRequest, options?: AxiosRequestConfig) {
        return ThirdPartyAccessApiFp(this.configuration).generateKey(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Revoke access of third party partners
     * @summary Revoke Third Party Access
     * @param {ThirdPartyAccessApiRevokePartnersAccessRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyAccessApiGenerated
     */
    public revokePartnersAccess(requestParameters: ThirdPartyAccessApiRevokePartnersAccessRequest, options?: AxiosRequestConfig) {
        return ThirdPartyAccessApiFp(this.configuration).revokePartnersAccess(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update access for third party partners
     * @summary Update Third Party Access
     * @param {ThirdPartyAccessApiUpdateAccessRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThirdPartyAccessApiGenerated
     */
    public updateAccess(requestParameters: ThirdPartyAccessApiUpdateAccessRequest, options?: AxiosRequestConfig) {
        return ThirdPartyAccessApiFp(this.configuration).updateAccess(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}