/**
 * @file AuthorizeService.js
 * @fileoverview - Provides authorization service call setup and execution for
 * use with the OCAPI API and an authorization server used to provide OAuth 2.0
 * bearer tokens.
 */

import { apiConfig } from '../../../config/apiConfig';

/**
 * @class AuthorizeService
 * @classdesc A service class used for making calls to the OCAPI APIs which
 * require authorization bearer tokens or JWT tokens for access to needed
 * resources.
 */
export default class AuthorizeService {

  /**
   * @constructor
   */
  constructor() {

  }

  /**
   * Returns the credentials needed to make a call to the authorization server
   */
  getAuthServerConfig() {
    return (apiConfig.OCAPI.API.meta && apiConfig.OCAPI.API.meta.authServer) ?
      apiConfig.OCAPI.API.meta.authServer : null;
  }

}
