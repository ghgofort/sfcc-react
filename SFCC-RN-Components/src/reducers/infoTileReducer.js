/**
 * infoTileReducer.js
 * Reduces the state changes from InfoTile class API calls and merges them into the
 * app global state.
 */

import * as actionTypes from '../actionTypes';
import ImageGroup from '../lib/documents/ImageGroup';
import Product from '../lib/documents/Product';
import URLHelper from '../lib/utilityHelpers/URLHelper';

const DEFAULT_STATE = {
  sceneTransistion: false,
  isLoadingProduct: false,
  isLoadingProductImages: false,
  infoTile: {
    product: (new Product())
  }
};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    // Product -- Get
    case actionTypes.REQUEST_RESOURCE_PRODUCT_BY_ID:
      return {
        ...state,
        isLoadingProduct: true
      };
    case actionTypes.RECEIVED_RESOURCE_PRODUCT_BY_ID:
      return {
        ...state,
        infoTile: {
          product: action.product,
          isLoadingProduct: false
        }
      };

    // Product -- Images
    case actionTypes.REQUEST_RESOURCE_PRODUCT_IMAGES:
      return {
        ...state,
        isLoadingProductImages: true
      };
    case actionTypes.RECEIVED_RESOURCE_PRODUCT_IMAGES:
     return {
       ...state,
       infoTile: {
        product: addImagesToState(action.product, state.infoTile.product),
        isLoadingProductImages: false
       }
     };
    default:
      return state;
  }
}

// Selectors

/**
 * A helper selector for getting the current Product instance stored in the info tile state.
 * @param {Object} state - The current state of the app.
 * @return {Product} - Returns the current Product instance stored in state.infoTile.product.
 */
export const getInfoTileProduct = (state) => {
  return state.infoTile.product;
};

export const getImageURL = (state) => {
  if (state.infoTile.product.imageGroups.length) {
    return state.infoTile.product.imageGroups[0].images[0].disBaseLink;
  } else {
    return '';
  }
};


// Merge Functions

/**
 * Used to merge requests for product images into an existing product instance.
 * @param {Product} product - The product returned from an API call.
 * @param {Product} infoTileProduct - The product that is currently in the app state if it exists.
 * @return {Product} - Returns the updated documents/Product instance with the appropriate
 *    properties appended.
 */
function addImagesToState(product, infoTileProduct) {
  console.log(product);
  const URL_TYPE = 'productImage';
  // Check if there is an override for Image URLs
  if (URLHelper.needsOverride(URL_TYPE)) {
    if (product.imageGroups && product.imageGroups.length) {
      product.imageGroups.forEach((ig) => {
        ig.images.forEach((img) => {
          img.disBaseLink = URLHelper.updateURL(img.disBaseLink, URL_TYPE);
        });
      });
    }
  }
  // If there is not currently a product in the app state, then we can just return
  // the product that was returned from the API call.
  if (!infoTileProduct || !infoTileProduct.ID) {
    return product;
  }

  if (product.imageGroups && product.imageGroups.length &&
      (!infoTileProduct.imageGroups || infoTileProduct.imageGroups.length < 1)) {
    infoTileProduct.imageGroups = product.imageGroups;
  }
  console.log(infoTileProduct);
  return infoTileProduct;
};

