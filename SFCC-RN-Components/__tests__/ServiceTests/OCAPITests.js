import OCAPIService from '../../src/lib/OCAPIService/OCAPIService';
import expect from 'expect';
import OCAPICallInfo from '../../src/lib/OCAPIService/OCAPICallInfo';

// Test the setupCall method in the OCAPIService class.

// Success
describe('setupCall()', () => {
  let svc;
  // Setup the test suite.
  beforeEach(() => {
    svc = new OCAPIService();
  });

  test('Verify that we get the correct setup for a \'Get Product\' API call', () => {
    // Setup the expected result.
    const EXP_RESULT = new OCAPICallInfo();
    const callSetup =
    expect(svc.setupCall('products', 'get', {productID: '12345678'}).error).toBeFalsy();
  });
});

// Fail