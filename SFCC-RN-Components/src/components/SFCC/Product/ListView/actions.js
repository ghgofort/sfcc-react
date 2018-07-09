/**
 * @file ListView/actions.js
 * @fileoverview - Exports redux action creation methods for modifying the
 * application scope state object from the ListView component.
 */

import OCAPIService from '../../../../lib/OCAPIService/OCAPIService';
import {
  REQUEST_RESOURCE_PRODUCT_BY_ID,
  RECEIVED_RESOURCE_PRODUCT_BY_ID,
  FAILED_RESOURCE_PRODUCT_BY_ID,
  REQUEST_RESOURCE_PRODUCT_IMAGES,
  RECEIVED_RESOURCE_PRODUCT_IMAGES,
  FAILED_RESOURCE_PRODUCT_IMAGES
} from '../../../../actionTypes';

/* ========================================================================== *
 * Async Action Creators
 * ========================================================================== */

export const requestProductSearch = (productID) => {
  return (dispatch) => {

  }
};

/* ========================================================================== *
 * Synchronous Action Creators
 * ========================================================================== */

// Product / images
export const requestProductSearch = (productID) => {
  return {
    type: REQUEST_RESOURCE_PRODUCT_IMAGES,
    product: productID
  };
};

export const receivedProductSearch = (product) => {
  return {
    type: RECEIVED_RESOURCE_PRODUCT_IMAGES,
    product: product
  };
};

export const failedProductSearch = (err) => {
  return {
    type: FAILED_RESOURCE_PRODUCT_IMAGES,
    error: err
  };
};
