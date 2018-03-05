import expect from 'expect';
import OCAPIService from '../../../src/lib/OCAPIService/OCAPIService';
import OCAPICallInfo from '../../../src/lib/OCAPIService/OCAPICallInfo';

describe('OCAPIService.setupCall() for making a request for categories.', () => {
  let svc, setupResult, expectedResult;

  // Test suite setup.
  beforeEach(() => {
    svc = new OCAPIService();

    // Setup the expected Result.
    expectedResult = new OCAPICallInfo();
    expectedResult.httpVerb = 'GET';
    expectedResult.headers = { 'Content-Type': 'application/json' };
  });

  // Test suite tear down.
  afterAll(() => {
    svc = null;
    expectedResult = null;
    setupResult = null;
  }, 3000);

  // Test successfull setup call.
  describe('Test successfull OCAPI call setup for request of product categories.', () => {
    beforeEach(() => {
      setupResult = svc.setupCall('categories', 'get', {categoryID: 'root', levels: 2})
    });

    test('Verify that we get the correct setup for a \'Get Category\' API call', () => {
      expect(setupResult.error).toBeFalsy();
    });
  });
});