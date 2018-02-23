/**
 * @file categoryTreeReducer.js
 * @desc Merges in changes to the state for the ProductCategoryTree component
 * which is used in the app's main Navbar component (hamburger menu).
 */

import * as actionTypes from '../actionTypes';


const DEFAULT_STATE = {
  isLoadingCatagories: false,
  categoryResult: {}
};

export default function categoryTreeReducer(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
  // Category -- Get
  case actionTypes.REQUEST_RESOURCE_CATEGORY_BY_ID:
    return {
      ...state,
      isLoadingCatagories: true
    };

  case actionTypes.RECEIVED_RESOURCE_CATEGORY_BY_ID:
    return {
      isLoadingCatagories: false,
      categoryResult: action.categoryResult
    };

  case actionTypes.FAILED_RESOURCE_CATEGORY_BY_ID:
    return {
      ...state,
      isLoadingCatagories: false
    }
  default:
    return state
  }
}
