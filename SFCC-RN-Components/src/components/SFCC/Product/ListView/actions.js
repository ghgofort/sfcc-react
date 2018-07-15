/**
 * @file ListView/actions.js
 * @fileoverview - Exports redux action creation methods for modifying the
 * application scope state object from the ListView component.
 */

import OCAPIService from '../../../../lib/OCAPIService/OCAPIService';
import {
  REQUEST_RESOURCE_PRODUCT_SEARCH,
  RECEIVED_RESOURCE_PRODUCT_SEARCH,
  FAILED_RESOURCE_PRODUCT_SEARCH
} from '../../../../actionTypes';
import ProductSearchParams from '../../../../lib/OCAPIHelpers/callParameters/ProductSearchParams';

/* ========================================================================== *
 * Async Action Creators
 * ========================================================================== */

/**
 * Makes a call to the OCAPI Service and dispatches the synchronous redux action
 * methods for the beginning of the API call, and the success/failure of the
 * call.
 *
 * @param {ProductSearchParams} productSearchParams - An instance of the
 *    ProductSearchParameters class representing the query parameters included
 *    for the product search call.
 */
export const makeProductSearchCall = (productSearchParams) => {
  return (dispatch) => {
    // Dispatch a syncronous action to note that the API call has begun.
    dispatch(requestProductSearch(productSearchParams));
    const svc = new OCAPIService();
    callSetup = svc.setupCall('productSearch')
    if (!callSetup.error) {
      svc.makeCall(callSetup)
        .then(response => {
          console.log('ProductSearch call response: ', response);
          if (response.status >= 200 && response.status < 300 && response.ok) {
            return response.json();
          } else {
            return {
              error: true,
              errMsg: 'ERROR at Product/ListView/actions.js in ASYNC action creator: makeProductSearchCall'
            };
          }
        }).then(
          result => {
            console.log('ProductSearch call result: ', result);
            if (!result.error) {
              dispatch(receivedProductSearch(new ProductSearchResult(result), productSearchParams));
            } else {
              console.log(result.errMsg);
              dispatch(failedProductSearch(result.errMsg, productSearchParams));
            }
          },
          err => dispatch(failedProductSearch(err, productSearchParams))
        );
    } else {
      dispatch(failedProductSearch(result.err, productSearchParams));
    }
  }
};

/* ========================================================================== *
 * Synchronous Action Creators
 * ========================================================================== */

/**
 *
 * @param {ProductSearchParams} productSearchParams
 */
export const requestProductSearch = (productSearchParams) => {
  return {
    type: REQUEST_RESOURCE_PRODUCT_SEARCH,
    productSearchParams: productSearchParams
  };
};

export const receivedProductSearch = (productSearchResult, productSearchParams) => {
  return {
    type: RECEIVED_RESOURCE_PRODUCT_SEARCH,
    productSearchResult: productSearchResult,
    productSearchParams: productSearchParams
  };
};

export const failedProductSearch = (err, productSearchParams) => {
  return {
    type: FAILED_RESOURCE_PRODUCT_SEARCH,
    productSearchParams: productSearchParams,
    error: err
  };
};