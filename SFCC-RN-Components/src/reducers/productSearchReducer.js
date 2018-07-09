/**
 * @file productSearchReducer.js
 * @fileoverview - Reduces state change from ProductSearch API calls and merges
 * them into the app global state. This file also exports any selector methods.
 */

import * as actionTypes from '../actionTypes';
import ProductSearchResult from '../lib/documents/ProductSearchResult';

const DEFAULT_STATE = {
  isLoadingProductSearch: false,
  productSearch: {
    productSearchResult: new ProductSearchResult()
  }
};

export default function productSearchReducer(state = DEFAULT_STATE, action) {
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
        productSearch: addProductSearchToState(action.productSearchResult, state.productSearch)
      };
    default:
      return state;
  }
}

/* Merge Functions
   ========================================================================== */

/**
 * Adds the results of a ProductSearch OCAPI call to the App global state.
 * @param {ProductSearchResult} productSearchResult
 */
function addProductSearchToState(productSearchResult, currentProductSearch) {
  const psr = new ProductSearchResult(productSearchResult)
}
