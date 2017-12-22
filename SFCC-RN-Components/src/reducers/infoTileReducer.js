/**
 * infoTileReducer.js
 * Reduces the state changes from InfoTile class API calls and merges them into the
 * app global state.
 */

import * as actionTypes from '../actionTypes';

const DEFAULT_STATE = {
  sceneTransistion: false,
  isLoadingProduct: false,
  infoTile: {
    product: {}
  }
};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.REQUEST_RESOURCE_PRODUCT_BY_ID:
      return {
        ...state,
        isLoadingProduct: true
      };
    case actionTypes.RECEIVED_RESOURCE_PRODUCT_BY_ID:
      return {
        ...state,
        infoTile: {
          product: action.product
        }
      };
    default:
      return state;
  }
}

// Selectors
export const getInfoTileProduct = (state) => {
  return state.infoTile.product;
};

