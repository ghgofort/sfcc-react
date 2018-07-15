/**
 * @file productSearchReducer.js
 * @fileoverview - Reduces state change from ProductSearch API calls and merges
 * them into the app global state. This file also exports any selector methods.
 */

import * as actionTypes from '../actionTypes';
import ProductSearchResult from '../lib/documents/ProductSearchResult';

const DEFAULT_STATE = {
  isLoadingProductSearch: false,
  productSearchMap: new Map()
};

export default function productSearchReducer(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case actionTypes.FAILED_RESOURCE_PRODUCT_SEARCH:
      return {
        /** @todo: Implement failed product search reducer case. */
      };
    case actionTypes.REQUEST_RESOURCE_PRODUCT_SEARCH:
      return {
        /** @todo: Implement failed product search reducer case. */
      };
    case actionTypes.RECEIVED_RESOURCE_PRODUCT_SEARCH:
      return {
        ...state,
        isLoadingProductSearch: false,
        productSearchMap: addProductSearchToState(action.productSearchResult, action.productSearchParams, state.productSearchMap)
      };
    default:
      return state;
  }
}

/* Merge Functions
   ========================================================================== */

/**
 * Adds the results of a ProductSearch OCAPI call to the App global state.
 * - If a result for the search parameter set is currently cached in the app
 *   state, then it will overwrite the entry.
 * - If there is no result cached for the search parameters, then a new entry
 *   will be added.
 * @param {ProductSearchResult} productSearchResult - The results returned from
 *    the ProductSearch API call.
 * @param {ProductSearchParams} productSearchParams - The parameters object for
 *    the ProductSearch API call.
 * @param {Map<string, {productSearchResult: ProductSearchResult, productSearchParams: ProductSearchParams}>} productSearchMap
 * @return {Map<string, {productSearchResult: ProductSearchResult, productSearchParams: ProductSearchParams}>}
 */
function addProductSearchToState(productSearchResult, productSearchParams, productSearchMap) {
  // Add the result of the OCAPI ProductSearch call to the app's cached Map of
  // results.
    productSearchMap.set(productSearchParams.getHash, {
      productSearchParams: productSearchParams,
      productSearchResult: productSearchResult
    });

    return productSearchMap;
}
