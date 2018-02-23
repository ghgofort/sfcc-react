import expect from 'expect';
import categoryTreeReducer from '../../src/reducers/categoryTreeReducer';
import { Reducer } from 'redux-testkit';
import * as actionTypes from '../../src/actionTypes';
import CategoryResult from '../../src/lib/documents/CategoryResult';
import CategoryResultMock from '../../__mocks__/CategoryResultMock';

const DEFAULT_STATE = {
  isLoadingCatagories: false,
  categoryResult: {}
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
    const categoryResult = new CategoryResult(CategoryResultMock);
    const action = { type: actionTypes.RECEIVED_RESOURCE_CATEGORY_BY_ID, categoryResult: categoryResult}
    Reducer(categoryTreeReducer).expect(action).toReturnState({...DEFAULT_STATE, categoryResult});
  });
});
