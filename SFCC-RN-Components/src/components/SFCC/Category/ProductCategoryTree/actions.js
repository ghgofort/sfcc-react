/**
 * @file ProductCategoryTree/actions.js
 * @fileoverview Provides redux action creation methods for propogating events
 * that need to modify the scope at a global level.
 */

import ReduxThunk from 'redux-thunk';
import { Actions } from 'react-native-router-flux';
import Category from '../../../../lib/documents/Category';
import OCAPIService from '../../../../lib/OCAPIService/OCAPIService';
import {
  REQUEST_RESOURCE_CATEGORY_BY_ID,
  RECEIVED_RESOURCE_CATEGORY_BY_ID,
  FAILED_RESOURCE_CATEGORY_BY_ID
} from '../../../../actionTypes';

/* ========================================================================== *
 * Synchronous Action Creators
 * ========================================================================== */

export const requestCategory = (categoryID, levels) => {
  return {
    type: REQUEST_RESOURCE_CATEGORY_BY_ID,
    categoryID: categoryID,
    levels: levels
  };
};

export const recievedCategory = (category) => {
  return {
    type: RECEIVED_RESOURCE_CATEGORY_BY_ID,
    category: category
  };
};

export const failedCategory = (categoryID, levels, error) => {
  return {
    type: FAILED_RESOURCE_CATEGORY_BY_ID,
    categoryID: categoryID,
    levels: levels,
    error: error
  };
};

/* ========================================================================== *
 * Async Action Creators
 * ========================================================================== */

/**
 *
 * @param {String|String[]} [categoryID=root] - The Category ID attribute or an array of Category IDs.
 * @param {number} [levels=2] - The depth of child categories to be retrieved.
 */
export const getCategory = (categoryID = 'root', levels = 2) => {
  return (dispatch) => {
    // Dispatch the Redux action to identify that an OCAPI request was made.
    dispatch(requestCategory(categoryID, levels));
    const svc = new OCAPIService();
    const callSetup = svc.setupCall('categories', 'get', {
      categoryID: categoryID, levels: levels });

    if (!callSetup.error) {
      svc.makeCall(callSetup)
        .then(response => {
          if (response.status >= 200 && response.status < 300 && response.ok) {
            return response.json();
          } else {
            return {
              error: true,
              errMsg: 'ERROR at Category/ProductCategoryTree/actions.js in ' +
                'ASYNC action creator: requestCategory'
            }
          }
        }).then(result => {
            if (!result.error) {
              dispatch(recievedCategory(new Category(result)));
            } else {
              console.log(result.errMsg);
              dispatch(failedCategory(categoryID, levels, result.error));
            }
          },

          // Handle error conditions.
          err => dispatch(failedCategory(categoryID, levels, err))
        );

    } else {
      console.log('Call Setup Error:');
      console.log(callSetup.errMsg);
      dispatch(failedCategory(categoryID, levels));
    }
  };
};
