/**
 * @file ProductCategoryTree/actions.js
 * @fileoverview Provides redux action creation methods for propogating events
 * that need to modify the scope at a global level.
 */

import ReduxThunk from 'redux-thunk'
import { Actions } from 'react-native-router-flux';
import OCAPIService from '../../../../lib/OCAPIService/OCAPIService';
import {
  REQUEST_RESOURCE_CATEGORY_BY_ID,
  RECEIVED_RESOURCE_CATEGORY_BY_ID,
  FAILED_RESOURCE_CATEGORY_BY_ID
} from '../../../../actionTypes';

/* ========================================================================== *
 * Synchronous Action Creators
 * ========================================================================== */

export const requestCategory = (catID, levels) => {
  return {
    type: REQUEST_RESOURCE_CATEGORY_BY_ID,
    categoryID: catID,
    levels: levels
  };
};

export const recievedCatagory = (categoryResult) => {
  return {
    type: RECEIVED_RESOURCE_CATEGORY_BY_ID,
    categoryResult: categoryResult
  };
};

export const failedCategory = (catID, levels) => {
  return {
    type: FAILED_RESOURCE_CATEGORY_BY_ID,
    categoryID: catID,
    levels: levels
  };
};