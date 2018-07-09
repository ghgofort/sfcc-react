/**
 * @file AuthTokenTests.js
 * @fileoverview - Unit tests for the OAuth 2.0 authorization process through
 * the authorization service provided by the /lib/OCAPIService/Authorize/** files.
 */

import expect from 'expect';
import AuthorizeService from '../AuthorizeService';

/** @description - SUITE == Class: OCAPIService */
describe('Testing: Class: OCAPIService.Authorization', () => {

  /** @description - SUITE == Method: getAuthServerConfig() */
  describe('Testing method: getAuthServerConfig():', () => {
    let svc, mockConfig;

    beforeEach(() => {
      svc = new AuthorizeService();
      mockConfig = {
        userName: 'appUser',
        userPassword: 'appPassword'
      };
    });

    /** @description - TEST: Correct User Name */
    test('...should succeed: The stored username is returned.',
      () => {
        const serviceConfig = svc.getAuthServerConfig('meta');
        expect(serviceConfig.userName).toEqual(mockConfig.userName);
      }
    );

    /** @description - TEST: Correct Password */
    test('...should succeed: The stored password is returned.',
      () => {
        const serviceConfig = svc.getAuthServerConfig('meta');
        expect(serviceConfig.userPassword).toEqual(mockConfig.userPassword);
      }
    );
  });
});
