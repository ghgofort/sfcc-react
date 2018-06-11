/**
 * @file AuthTokenTests.js
 * @fileoverview - Unit tests for the OAuth 2.0 authorization process through
 * the authorization service provided by the /lib/OCAPIService/Authorize/** files.
 */

import { expect } from 'expect';
import AuthorizeService from '../Authorize/AuthorizeService';

/**
 * @file AuthTokenTests.js
 * @fileoverview -
 */

/**
 * @description - Test suite for the AuthorizeService class.
 */
describe('Testing: Class: OCAPIService.Authorization', () => {
  describe('Testing method: getAuthServerConfig():', () => {
    // Suite level variable and object declarations.
    let svc, mockConfig;

    /**
     * Before each test in the tests for method getAuthServerConfig().
     */
    beforeEach(() => {
      svc = new AuthorizeService();
      mockConfig = {
        username: '',
        password: ''
      };
    });

    test('...should succeed: Configuration for OCAPI Meta API calls is found,' +
        'fields are validated, and the configuration object is returned.',
      () => {
        const serviceConfig = svc.getAuthServerConfig('meta');
        expect(serviceConfig).toEqual(mockConfig);

      /** @todo: Implement test for success of OCAPIService.Authorization.getAuthServerConfig() */
      }
    );

    test('...should fail: Configuration for OCAPI Meta API calls is NOT found.', () => {
      /** @todo: Implement test for fail - No config found - OCAPIService.Authorization.getAuthServerConfig() */
    });

    test('...should fail: Configuration for OCAPI Meta API calls is found,' +
      'but the fields are NOT validated.', () => {
      /** @todo: Implement test for fail - config not valid - OCAPIService.Authorization.getAuthServerConfig() */
    });
  });
});