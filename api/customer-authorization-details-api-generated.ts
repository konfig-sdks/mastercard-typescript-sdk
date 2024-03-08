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
import { CustomerAuthorizationDetails } from '../models';
// @ts-ignore
import { ErrorMessage } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CustomerAuthorizationDetailsApi - axios parameter creator
 * @export
 */
export const CustomerAuthorizationDetailsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * The endpoint provides customer authorization details like authorization start date, authorization end date against the requested institution login id  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
         * @summary Returns customer authorization details for the institution login identification.
         * @param {number} institutionLoginId Institution login id of the customer.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthorizationDetails: async (institutionLoginId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'institutionLoginId' is not null or undefined
            assertParamExists('getAuthorizationDetails', 'institutionLoginId', institutionLoginId)
            const localVarPath = `/customers/institution-logins/{institution_login_id}/authorization-details`
                .replace(`{${"institution_login_id"}}`, encodeURIComponent(String(institutionLoginId !== undefined ? institutionLoginId : `-institution_login_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
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
                pathTemplate: '/customers/institution-logins/{institution_login_id}/authorization-details',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CustomerAuthorizationDetailsApi - functional programming interface
 * @export
 */
export const CustomerAuthorizationDetailsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CustomerAuthorizationDetailsApiAxiosParamCreator(configuration)
    return {
        /**
         * The endpoint provides customer authorization details like authorization start date, authorization end date against the requested institution login id  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
         * @summary Returns customer authorization details for the institution login identification.
         * @param {CustomerAuthorizationDetailsApiGetAuthorizationDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAuthorizationDetails(requestParameters: CustomerAuthorizationDetailsApiGetAuthorizationDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerAuthorizationDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAuthorizationDetails(requestParameters.institutionLoginId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CustomerAuthorizationDetailsApi - factory interface
 * @export
 */
export const CustomerAuthorizationDetailsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CustomerAuthorizationDetailsApiFp(configuration)
    return {
        /**
         * The endpoint provides customer authorization details like authorization start date, authorization end date against the requested institution login id  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
         * @summary Returns customer authorization details for the institution login identification.
         * @param {CustomerAuthorizationDetailsApiGetAuthorizationDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthorizationDetails(requestParameters: CustomerAuthorizationDetailsApiGetAuthorizationDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<CustomerAuthorizationDetails> {
            return localVarFp.getAuthorizationDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAuthorizationDetails operation in CustomerAuthorizationDetailsApi.
 * @export
 * @interface CustomerAuthorizationDetailsApiGetAuthorizationDetailsRequest
 */
export type CustomerAuthorizationDetailsApiGetAuthorizationDetailsRequest = {
    
    /**
    * Institution login id of the customer.
    * @type {number}
    * @memberof CustomerAuthorizationDetailsApiGetAuthorizationDetails
    */
    readonly institutionLoginId: number
    
}

/**
 * CustomerAuthorizationDetailsApiGenerated - object-oriented interface
 * @export
 * @class CustomerAuthorizationDetailsApiGenerated
 * @extends {BaseAPI}
 */
export class CustomerAuthorizationDetailsApiGenerated extends BaseAPI {
    /**
     * The endpoint provides customer authorization details like authorization start date, authorization end date against the requested institution login id  _Supported regions_: ![🇺🇸](https://flagcdn.com/20x15/us.png)
     * @summary Returns customer authorization details for the institution login identification.
     * @param {CustomerAuthorizationDetailsApiGetAuthorizationDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerAuthorizationDetailsApiGenerated
     */
    public getAuthorizationDetails(requestParameters: CustomerAuthorizationDetailsApiGetAuthorizationDetailsRequest, options?: AxiosRequestConfig) {
        return CustomerAuthorizationDetailsApiFp(this.configuration).getAuthorizationDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}