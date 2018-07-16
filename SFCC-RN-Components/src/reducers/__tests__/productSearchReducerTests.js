/**
 * @file productSearchReducerTests.js
 * @fileoverview - Unit testing coverage for the productSearchReducer merge
 * functions.
 */

import expect from "expect";
import { Reducer } from "redux-testkit";
import * as actionTypes from "../../actionTypes";
import productSearchReducer from "../productSearchReducer";
import ProductSearchParams from "../../lib/OCAPIHelpers/callParameters/ProductSearchParams";
import ProductSearchResult from "../../lib/documents/ProductSearchResult";

const DEFAULT_STATE = {
  isLoadingProductSearch: false,
  productSearchMap: new Map()
};

// SUITE: productSearchReducer.js
describe("productSearchReducer.js", function() {
  let exptectedResult, actualResult;

  // SUITE: Merge Function: addProductSearchToState()
  describe("Merge Function: addProductSearchToState()", () => {
    beforeEach(function() {});

    // Test that the default state is returned when no action is passed.
    it("should have an initial state defined.", () => {
      actualResult = productSearchReducer();
      expect(actualResult).toEqual(DEFAULT_STATE);
    });

    it("Should add a new ProductSearchResult to the Map", () => {
      const psr = new ProductSearchResult();
      const psp = new ProductSearchParams();
      const psm = new Map(psp.getHash(), { productSearchResult: psr, productSearchParams: psm });
      // Mock Action
      const action = {
        type: actionTypes.RECEIVED_RESOURCE_PRODUCT_SEARCH,
        productSearchResult: psr,
        productSearchParams: psp
      };
      Reducer(productSearchReducer)
        .expect(action)
        .toReturnState({ ...DEFAULT_STATE, category });
    });
  });
});