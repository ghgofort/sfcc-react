/**
 * @file OCAPIService.js
 * @desc The OCAPIService is a singleton service wrapper for making API calls to
 *       the Open Commerce API of your Sales Force Cloud Commerce instance.
 *
 * Last Changed: 12/4/17  --  ghgofort
 *
 * @author Galen Goforth
 * - Email: galengoforth@gmail.com
 * - Github: ghgofort
 */

import { appConfig, apiConfig } from '../../config/appConfig';
import OCAPICallInfo from './OCAPICallInfo';

let OCAPIServiceInstance = null;

/**
 * @class
 * @name OCAPIService
 * @desc The OCAPIService is a JS service layer for making calls to the Sales Force
 *       Commerce Cloud instance utilizing the Open Commerce API.
 */
export default class OCAPIService {
  constructor() {
    this._isMock = apiConfig.OCAPI.environment[appConfig.instanceType] === 'mock';
    if (!OCAPIServiceInstance) {
      OCAPIServiceInstance = this;
    }
    return OCAPIServiceInstance;
  }

  /*  ========================================================================
   *    Public Class Members
   *  ========================================================================*/

  /**
   * makeCall
   * @param {OCAPICallInfo} callSetup - An instance of the OCAPICallInfo class.
   * @return {Promise<any>}           - Returns a Promise that resolves to the requested data.
   */
  makeCall(callSetup) {
    return this._fetchData(callSetup);
  }

  /**
   * Gets the full URI of the API call, and sets up the body of the call and returns this
   * information as key value pairs in an object.
   *
   * @param {string} callName
   * @param {object} callData
   * @return {OCAPICallInfo} - Returns an instance of the OCAPICallInfo class with the attributes
   *    set to the values needed to make the call to the REST API.
   */
  setupCall(resourceName, callName, callData) {
    const setupData = new OCAPICallInfo();
    const usedParams = [];
    let ep = '';
    let errMsg = 'ERROR in OCAPIService at setupCall';

    try {
      const rescSetup = apiConfig.OCAPI.resources[resourceName] || null;
      const callSetup = rescSetup && rescSetup.calls && rescSetup.calls[callName] ?
        rescSetup.calls[callName] : null;

      setupData.apiCallFunction = this._isMock ? this._fetchMockData : this._fetchData;
      setupData.endpoint = '';
      setupData.body = {};
      setupData.error = false;
      setupData.errMsg ='';

      // Set the API to return mock data if setup to use the mock in the apiConfig object.
      if (this._isMock) {
        setupData.apiCallFunction = this._fetchMockData;
      }

      // Setup the URI for making the REST call.
      if (callSetup) {
        setupData.headers = callSetup.headers;
        setupData.httpVerb = callSetup.callType;
        // Get the base endpoint from the config file for the configured instance type.
        ep = apiConfig.OCAPI.baseEndpoints[appConfig.instanceType];

        // Append the API path and the API version for this call.
        ep += apiConfig.OCAPI.API[rescSetup.API].path;
        ep += '/' + apiConfig.OCAPI.currentVersion;
        // Append the resource name, and the call name paths.
        ep += rescSetup.path;
        ep += callSetup.path;

        // Append the client_id field as a URL parameter.
        ep += ('?client_id=' + apiConfig.OCAPI.clientIDs[appConfig.instanceType]);
        setupData.endpoint = ep;
      } else {
        errMsg += '\nThe requested resource, or resource method was not found:';
        errMsg += '\nResource: ' + resourceName + '\nCall Name: ' + callName;
        setupData.error = true;
        setupData.errMsg = errMsg;
      }

      // Check for any required url parameters included in the config setup and add
      // them to the config endpoint string.
      if (callSetup && callSetup.requiredParams && callSetup.requiredParams.length) {
        callSetup.requiredParams.forEach(field => {
          if (!callData[field]) {
            setupData.error = true;
            setupData.errMsg = errMsg + '\nRequired call parameter: ' + field + ' is missing.';
          } else {
            // Append each query string parameter to the URL
            setupData.endpoint = setupData.endpoint + '&' + field + '=' + callData[field];
            usedParams.push(field);
          }
        });
      }

      // Check for any required request fields included in the config setup.
      if (callSetup && callSetup.requiredData && callSetup.requiredData.length) {
        callSetup.requiredData.forEach(field => {
          if (!callData[field]) {
            setupData.error = true;
            setupData.errMsg = setupData.errMsg + '\nRequired call data: ' + field + ' is missing.';
          } else {
            let bd = setupData.body;
            bd[field] = callData[field];
            setupData.body = bd;
            usedParams.push(field);
          }
        });
      }

      // Check if there are any path parameters and replace the place holder with the value passed in.
      if (callSetup && callSetup.pathParams && callSetup.pathParams.length) {
        callSetup.pathParams.forEach(field => {
          if (!callData[field.name]) {
            setupData.error = true;
            setupData.errMsg += '\nRequired path parameter: ' + field.name + ' is missing.';
          } else {
            // If we are getting multiples of a resource, then we turn the array of values into a
            // comma-seperated list enclosed in parenthasis.
            let fieldValue = Array.isArray(callData[field.name]) ? '(' + callData[field.name].toString() + ')' : callData[field.name];
            let strReplace = '{' + field.index + '}';
            setupData.endpoint = setupData.endpoint.replace(strReplace, fieldValue);
            usedParams.push(field);
          }
        });
      }

      // Add any non-required parameters that were included.
      if (callData && usedParams.length) {
        Object.keys(callData).filter(key => usedParams.indexOf(key) > -1).forEach(key => {
          setupData.endpoint = setupData.endpoint + '&' + key + '=' + callData[key];
        });
      }
    } catch (e) {
      console.log('Exception caught:');
      console.log(e);
      setupData.error = true;
      Object.keys(e).forEach(key => { setupData.errMsg = setupData.errMsg + key + ': ' + e[key] });
    }
    return setupData;
  }


  /*  ========================================================================
   *    Private Class Members
   *  ========================================================================*/

  /**
   * Makes a call to the live API to retrieve data, then returns a Promise that
   * will resolve to the results of the call.
   *
   * @private
   * @param {OCAPICallInfo} callData - An instance of the OCAPICallInfo class that contains the concatenated
   *    endpoint, headers, and body of the request that will be made.
   * @return {Promise<any>}               - Returns a Promise that is returned from the fetch call to the API endpoint.
   */
  _fetchData(callData) {
    // Return the Promise created by the fetch operation.
    return fetch(callData.endpoint, {
        method: callData.httpVerb,
        headers: new Headers(callData.headers)
      });
  }

  /**
   * Retrieves data from the mockData static file and returns a Promise that resolves to the data
   * that was retrieved.
   *
   * @private
   * @param {OCAPICallInfo} callData - An instance of the OCAPICallInfo class that contains the concatenated
   *    endpoint, headers, and body of the request that will be made.
   * @return {Promise<any>}          - Returns a Promise that is returned from the fetch call to the API endpoint.
   */
  _fetchMockData(callData) {
    return new Promise(
      (data) => {}, (reason) => {

      }
    );
  }
}
