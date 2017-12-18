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
   * @param {string} resourceName  - The name of the resource to make an API call against.
   * @param {string} callName      - A unique identifier for getting the proper endpoint for the API request.
   * @param {object} [callParams]
   * @return {Promise}             - Returns a promise that represents the fetch call that was made.
   */
  makeCall(resourceName, callName, callParams) {
    let callSetup = this._setupCall(resourceName, callName, callParams);
    return this._fetchData(callSetup);
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
   * @return {Promise}               - Returns a Promise that is returned from the fetch call to the API endpoint.
   */
  _fetchData(callData) {

    // Return the Promise created by the fetch operation.
    return fetch(callData.endpoint(), {
        method: callData.httpVerb(),
        headers: new Headers(callData.headers())
<<<<<<< HEAD
      })
      .then(response => response.json())
      .then(
        data => successAction(data),
        err => failAction('ERROR:: OCAPIService.js : _fetchData() => There was error calling the API.')
      )
      .catch((error) => {
        console.log(error);
        failAction(error.toString());
=======
>>>>>>> 3bfd627036acec981be9103b16addb5c4f7f30e6
      });
  }

  /**
   * Retrieves data from the mockData static file and returns a Promise that resolves to the data
   * that was retrieved.
   *
   * @private
   * @param {object} callData   - An object containing key/value pairs for the data that should be included
   *    in the body of the API request.
   * @return {Promise}          - Returns a Promise that is returned from the fetch call to the API endpoint.
   */
  _fetchMockData(callData) {
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
   * @param {object} callData
   * @return {OCAPICallInfo} - Returns an instance of the OCAPICallInfo class with the attributes
   *    set to the values needed to make the call to the REST API.
   */
  _setupCall(resourceName, callName, callData) {
    const setupData = new OCAPICallInfo();
    let ep = '';
    let errMsg = 'ERROR in OCAPIService at _setupCall';

    try {
      const rescSetup = apiConfig.OCAPI.resources[resourceName] || null;
      const callSetup = rescSetup && rescSetup.calls && rescSetup.calls[callName] ?
        rescSetup.calls[callName] : null;

      setupData.apiCallFunction(this._isMock ? this._fetchMockData : this._fetchData);
      setupData.httpVerb(callSetup.callType);
      setupData.endpoint('');
      setupData.body({});
      setupData.headers(callSetup.headers);
      setupData.error(false);
      setupData.errMsg('');

      // Set the API to return mock data if setup to use the mock in the apiConfig object.
      if (this._isMock) {
        setupData.apiCallFunction(this._fetchMockData);
      }

      // Setup the URI for making the REST call.
      if (callSetup) {
        ep = apiConfig.OCAPI.baseEndpoints[appConfig.instanceType];
        ep += rescSetup.path;
        ep += callSetup.path;
        // Append the client_id field as a URL parameter.
        ep += ('?client_id=' + apiConfig.OCAPI.clientIDs[appConfig.instanceType]);
        setupData.endpoint(ep);
      } else {
        errMsg += '\nThe requested resource, or resource method was not found:';
        errMsg += '\nResource: ' + resourceName + '\nCall Name: ' + callName;
        setupData.error(true);
        setupData.errMsg(errMsg);
      }

      // Check for any required url parameters included in the config setup and add
      // them to the config endpoint string.
      if (callSetup && callSetup.requiredParams && callSetup.requiredParams.length) {
        callSetup.requiredParams.forEach(field => {
          if (!callData[field]) {
            setupData.error(true);
            setupData.errMsg(errMsg + '\nRequired call parameter: ' + field + ' is missing.');
          } else {
            // Append each query string parameter to the URL
            setupData.endpoint(setupData.endpoint() + '&' + field + '=' + callData[field]);
          }
        });
      }

      // Check for any required request fields included in the config setup.
      if (callSetup && callSetup.requiredData && callSetup.requiredData.length) {
        callSetup.requiredData.forEach(field => {
          if (!callData[field]) {
            setupData.error(true);
            setupData.errMsg(setupData.errMsg() + '\nRequired call data: ' + field + ' is missing.');
          } else {
            let bd = setupData.body();
            bd[field] = callData[field];
            setupData.body(bd);
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
            let strReplace = '{' + field.index + '}';
            setupData.endpoint(setupData.endpoint().replace(strReplace, callData[field.name]));
          }
        });
      }
    } catch (e) {
      setupData.error(true);
      Object.keys(e).forEach(key => { setupData.errMsg(setupData.errMsg() + key + ': ' + e[key]) });
    }
    return setupData;
  }
}
