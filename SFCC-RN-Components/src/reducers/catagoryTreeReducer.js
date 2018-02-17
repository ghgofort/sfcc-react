/**
 * @file catagoryTreeReducer.js
 * @desc Merges in changes to the state for the ProductCatagoryTree component
 * which is used in the app's main Navbar component (hamburger menu).
 */

import * as actionTypes from '../actionTypes';


const initialState = {
  isLoadingCatagories: false,
  catagoryTree: {
    catagories: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
  // Catagory -- Get
  case actionTypes.REQUEST_RESOURCE_CATAGORY_BY_ID:
    return {
      ...state,
      isLoadingCatagories: true
    };

  case actionTypes.RECEIVED_RESOURCE_CATAGORY_BY_ID:
    return {
      ...state,
      isLoadingCatagories: false
    };

  case actionTypes.FAILED_RESOURCE_CATAGORY_BY_ID:
    return {
      ...state,
      isLoadingCatagories: false
    }
  default:
    return state
  }
};
