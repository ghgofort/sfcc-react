import ReduxThunk from 'redux-thunk'
import { Actions } from 'react-native-router-flux';
import OCAPIService from '../../../../lib/OCAPIService/OCAPIService';
import Product from '../../../../lib/documents/Product';
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
    const callSetup = svc.setupCall('products', 'get', { productID: productID });
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
            console.log('Request for Product:');
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

export const requestImagesForProduct = (productID) => {
  return (dispatch) => {
    // Dispatch a synchronous action to the store to show that an API call has begun.
    dispatch(requestProductImages(productID));
    // Get a reference to the singleton service instance.
    const svc = new OCAPIService();
    // Get the call data object to make the call.
    const callSetup = svc.setupCall('products', 'images', { productID: productID, all_images: true });
    if (!callSetup.error) {
      console.log('API call setup successfull.');
      console.log(callSetup);
      svc.makeCall(callSetup)
        .then((response) => {
          console.log('Request for Product Images:');
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
              dispatch(receivedProductImages(new Product(result)));
            } else {
              console.log(result.errMsg);
              dispatch(failedProductImages(result.errMsg));
            }
          },
          err => dispatch(failedProductImages(err))
        );
    } else {
      dispatch(failedProductImages(callSetup.errMsg));
    }
  };
}

/* ========================================================================== *
 * Synchronous Action Creators
 * ========================================================================== */

// Product / images
export const requestProductImages = (productID) => {
  return {
    type: REQUEST_RESOURCE_PRODUCT_IMAGES,
    product: productID
  };
};

export const receivedProductImages = (product) => {
  return {
    type: RECEIVED_RESOURCE_PRODUCT_IMAGES,
    product: product
  };
};

export const failedProductImages = (err) => {
  return {
    type: FAILED_RESOURCE_PRODUCT_IMAGES,
    error: err
  };
};

// Product / get
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
