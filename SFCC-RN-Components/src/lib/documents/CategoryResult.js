/**
 * @file CategoryResult.js
 * @fileoverview - Provides a JS class for working with the OCAPI category_result
 * document type that is returned when getting categories with the Categories resource.
 */

import Category from './Category';

/**
 * @class CategoryResult
 * @classdesc Class definition for passing category_result document type data
 * between modules, and storing this information within application state in a
 * consistent manner.
 */
export default class CategoryResult {
  /**
   * @constructor
   */
  constructor(args) {
    this._count = args && args.count ? args.count : 0;
    this.total = args && args.total ? args.total : 0;
    this.data = args && args.data ? new Category(args.data) : new Category();
  }

}

