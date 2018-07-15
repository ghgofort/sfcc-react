/**
 * @file categoryTreeReducerTests.js
 * @fileoverview - Unit test coverage for the categoryTreeReducer merge
 * functions.
 */

import expect from 'expect';
import categoryTreeReducer from '../categoryTreeReducer';
import { Reducer } from 'redux-testkit';
import * as actionTypes from '../../actionTypes';
import Category from '../../lib/documents/Category';
import CategoryMock from '../../lib/OCAPIService/__mocks__/CategoryMock';

const DEFAULT_STATE = {
  isLoadingCatagories: false,
  category: {categories: []}
};

describe('src/reducers/categoryTreeReducer.js -- Tests', () => {
  let catTree;

  beforeEach(() => {
    catTree = categoryTreeReducer();
  });

  // Test that the default state is returned when no action is passed.
  it('should have an initial state defined.', () => {
    expect(catTree).toEqual(DEFAULT_STATE);
  });

  // Test addition of a CategoryResult instance to the state.
  it('should add a category_result document instance to the state.', () => {
    const category = new Category(CategoryMock);
    const action = { type: actionTypes.RECEIVED_RESOURCE_CATEGORY_BY_ID, category: category}
    Reducer(categoryTreeReducer).expect(action).toReturnState({...DEFAULT_STATE, category});
  });
});
