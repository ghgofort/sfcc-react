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

  /** ========================================================================
   *    Public Class Members
   *  ========================================================================*/

  /**
   * makeCall
   * @param {string} resourceName    - The name of the resource to make an API call against.
   * @param {string} callName        - A unique identifier for getting the proper endpoint for the API request.
   * @param {function} successAction - A callback function used to dispatch the Redux action handler
   *                                   to make changes to the App's global state data.
   * @param {function} failAction
   * @param {object} [callParams]
   * @param {object} [callData]
   */
  makeCall(resourceName, callName, successAction, failAction, callParams, callData) {
    let callSetup = this._setupCall(resourceName, callName, callParams, callData);



  }

  /** ========================================================================
   *    Private Class Members
   *  ========================================================================*/

  /**
   * Makes a call to the live API to retrieve data, then returns a Promise that
   * will resolve to the results of the call.
   *
   * @private
   * @param {string} callName   - An identifier for the API call endpoint of the API request.
   * @param {object} callParams - An object with a property for each field that
   *                              should to be included in the request.
   * @param {object} callData   - An object containing key/value pairs for the data
   *                              that should be included in the body of the API request.
   * @return {Promise}          - Returns a Promise that is returned from the
   *                              fetch call to the API endpoint.
   */
  _fetchData(callName, callParams, callData) {

  }

  /**
   * Retrieves data from the mockData static file and returns a Promise that resolves to the data
   * that was retrieved.
   *
   * @private
   * @param {string} callName   - An identifier for the API call endpoint of the API request.
   * @param {object} callParams - An object with a property for each field that
   *                              should to be included in the request.
   * @param {object} callData   - An object containing key/value pairs for the data
   *                              that should be included in the body of the API request.
   * @return {Promise}          - Returns a Promise that is returned from the
   *                              fetch call to the API endpoint.
   */
  _fetchMockData(callName, callParams, callData) {
    return new Promise(
      (data) => {}, (reason) => {

      }
    );
  }

  /**
   * Gets the full URI of the API call, and sets up the body of the call and returns this
   * information as key value pairs in an object.
   *
   * @private
   * @param {string} callName
   * @param {object} callParams
   * @param {object} callData
   * @return {object}
   */
  _setupCall(resourceName, callName, callParams, callData) {
    const setupData = {
      apiCallFunction: this._fetchData,
      endpoint: '',
      error: false,
      errMsg: '',
      body: {},
      headers: {}
    };

    if (this._isMock) {
      setupData.apiCallFunction = this._fetchMockData;
    }

    const rescSetup = apiConfig.OCAPI.resources[resourceName] || {};

    // Get each peace of the OCAPI call path from the config file if it is setup.
    if (rescSetup && rescSetup.calls && rescSetup.calls[callName]) {
      setupData.endpoint = apiConfig.OCAPI.baseEndpoints[appConfig.environment];
      setupData.endpoint += apiConfig.OCAPI.resources[resourceName].path;
      setupData.endpoint += apiConfig.OCAPI.resources[resourceName].calls[callName].path;
    } else {
      setupData.errMsg = 'ERROR in OCAPIService at _setupCall:';
      setupData.errMsg += '\nThe requested resource, or resource method was not found:';
      setupData.errMsg += '\nResource: ' + resourceName + '\nCall Name: ' + callName;
      setupData.error = true;
    }

    // Check for any required url parameters included in the config setup.
    if (rescSetup.calls[callName].requiredParams &&
        rescSetup.calls[callName].requiredParams.length) {
      rescSetup.calls[callName].requiredParams.forEach(field => {
        if (!callParams[field]) {
          setupData.error = true;
          setupData.errMsg += 'ERROR in OCAPIService at _setupCall:';
          setupData.errMsg += '\nRequired call parameter: ' + field + ' is missing.';
        }
      });
    }

    // Check for any required request fields included in the config setup.
    if (rescSetup.calls[callName].requiredData &&
        rescSetup.calls[callName].requiredData.length) {
      rescSetup.calls[callName].requiredData.forEach(field => {
        if (!callData[field]) {
          setupData.error = true;
          setupData.errMsg += 'ERROR in OCAPIService at _setupCall:';
          setupData.errMsg += '\nRequired call data: ' + field + ' is missing.';
        }
      });
    }

    setupData.body = callData || null;
    setupData.headers = rescSetup.calls[callName].headers;
    return setupData;
  }

  _checkRequiredFields(requiredParams, requiredFields, callParams, callData) {

  }
}
