import ReduxThunk from 'redux-thunk'
import {Actions} from 'react-native-router-flux';
import OCAPIService from '../../../../lib/OCAPIService/OCAPIService';
import Product from '../../../../lib/resources/Product';
import {
  REQUEST_RESOURCE_PRODUCT_BY_ID,
  RECEIVED_RESOURCE_PRODUCT_BY_ID,
  FAILED_RESOURCE_PRODUCT_BY_ID
} from "../../../../actionTypes";


/* ========================================================================== *
 * Async Action Creators
 * ========================================================================== */

/**
 * Async action creation method used to make an OCAPI request for a product.
 * @param {string} productID
 */
export const requestProduct = (productID) => {
  return (dispatch) => {
    // Dispatch a synchronous action to the store to show that an API call has begun.
    dispatch(requestProductById(productID));
    // Get a reference to the singleton service instance.
    const svc = new OCAPIService();
    // Get the call data object to make the call.
    const callSetup = svc.setupCall('products', 'get', {productID: productID});
    if (!callSetup.error) {
      console.log('API call setup successfull.');
      svc.makeCall(callSetup)
        .then((response) => {
          console.log(response);
          if (response.status >= 200 && response.status < 300 && response.ok) {
            return response.json()
          } else {
            return {
              error: true,
              errMsg: 'ERROR at Product/infoTile/actions.js in ASYNC action creator: requestProduct'
            }
          }
        })
        .then(
          result => {
            console.log(result);
            if (!result.error) {
              dispatch(receivedProductById(new Product(result)));
            } else {
              console.log(result.errMsg);
              dispatch(failedProductById(result.errMsg));
            }
          },
          err => dispatch(failedProductById(err))
        );
    } else {
      dispatch(failedProductById(callSetup.errMsg));
    }

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