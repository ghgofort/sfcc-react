import expect from 'expect';
import categoryTreeReducer from '../../src/reducers/categoryTreeReducer';



const DEFAULT_STATE = {
  isLoadingCatagories: false,
  categoryTree: {}
};

describe('src/reducers/categoryTreeReducer.js -- Tests', () => {
  let catTree;

  beforeEach(() => {
    catTree = categoryTreeReducer();
  });

  it('should have an initial state defined.', () => {
    expect(catTree).toEqual(DEFAULT_STATE);
  });
});
