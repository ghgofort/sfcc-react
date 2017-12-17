import {
  REQUEST_RESOURCE_PRODUCT_BY_ID,
  RECEIVED_RESOURCE_PRODUCT_BY_ID,
  FAILED_RESOURCE_PRODUCT_BY_ID
} from "../../../../actionTypes";
import ReduxThunk from 'redux-thunk'
import {Actions} from 'react-native-router-flux';
import OCAPIService from '../../../../lib/OCAPIService/OCAPIService';


/* ========================================================================== *
 * Async Action Creators
 * ========================================================================== */


export const requestProduct = (productID) => {
  return (dispatch) => {
    // Dispatch a synchronous action to the store to show that an API call has begun.
    dispatch(requestProductById(productID));
    // Get a reference to the singleton service instance.
    const svc = new OCAPIService();
    // Make the service call for the SFCC resource.
    const apiCall = svc.makeCall(
      'Products',
      'get',
      {productID: productID})
      .then(productJSON => dispatch(receivedProductById(productJSON)))
      .catch(err => console.log('ERROR in Product/InfoTile/actions.js at requestProductById'));
  };
};


/* ========================================================================== *
 * Synchronous Action Creators
 * ========================================================================== */


export const requestProductById = (productID) => {
  return {
    type: REQUEST_RESOURCE_PRODUCT_BY_ID,
    product: productID
  };
};

export const receivedProductById = (product) => {
  return {
    type: RECEIVED_RESOURCE_PRODUCT_BY_ID,
    product: product
  };
};

export const failedProductById = (err) => {
  return {
    type: FAILED_RESOURCE_PRODUCT_BY_ID,
    error: err
  };
};