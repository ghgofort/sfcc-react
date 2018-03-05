import expect from 'expect';
import OCAPIService from '../../../src/lib/OCAPIService/OCAPIService';
import OCAPICallInfo from '../../../src/lib/OCAPIService/OCAPICallInfo';

// Test the setupCall method in the OCAPIService class.
describe('OCAPIService.setupCall() for getting a single product.', () => {
  let svc, setupResult, expectedResult;

  // Setup the test suite.
  beforeEach(() => {
    svc = new OCAPIService();

    // Setup the expected result.
    expectedResult = new OCAPICallInfo();
    expectedResult.httpVerb = 'GET';
    expectedResult.headers = { 'Content-Type': 'application/json' };
  });

  afterAll(() => {
    svc = null;
    expectedResult = null;
    setupResult = null;
  }, 3000);

  // Success
  describe('setupCall() -- SUCCESS', () => {
    beforeEach(() => {
      setupResult = svc.setupCall('products', 'get', { productID: '12345678' });
    });

    test('Verify that we get the correct setup for a \'Get Product\' API call', () => {
      expect(setupResult.error).toBeFalsy();
    });

    test('Verify that we get the correct headers for \'Get Product\' API calls', () => {
      expect(setupResult.headers).toEqual(expectedResult.headers);
    });

    test('Verify that we get the correct HTTP verb for \'Get Product\' API calls', () => {
      expect(setupResult.httpVerb).toEqual(expectedResult.httpVerb);
    });

  });

  // Fail
  // describe('setupCall() -- FAIL', () => {
  //   beforeEach(() => {
  //     setupResult = svc.setupCall('products', 'get', {productID: '000000000'})
  //   });
  // });

});

// Test the setupCall method in the OCAPIService class.
describe('OCAPIService.setupCall() for getting multiple products', () => {
  let svc, setupResult, expectedResult;
  const productIDs = []

  beforeEach(() => {
    svc = new OCAPIService();
    // Setup an expected result.
    expectedResult = new OCAPICallInfo({
      headers: {'Content-Type': 'application-json'},
      httpVerb: 'GET',
      endpoint: 'sandbox.demandware.net/s/SITE-ID/dw/shop/v17_8/products/',
      body: {},
      error: false,
      errorMessage: ''
    });

    // Store the result of calling the setupCall method to the setupResult variable.
    setupResult = svc.setupCall('products', 'get', {productID: ['12345678', '12345677', '12345676']})
  });

  test('Verify that the endpoint for getting product information for multiple products is correctly formatted', () => {
    expect(setupResult.endpoint).toContain('/products/' + productIDs.toString());
  });
});
