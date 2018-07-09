/**
 * @file productSearchReducer.js
 * @fileoverview - Reduces state change from ProductSearch API calls and merges
 * them into the app global state. This file also exports any selector methods.
 */

import * as actionTypes from '../actionTypes';

const DEFAULT_STATE = {};

export default function productSearchReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {

    default:
      return state;
  }
}