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
   * @param {Object} [args] - An optional arguments object for setting instance
   *    properties at the time of class instantiation.
   * @param {Category} [args.data = []] - An array of returned Category class
   *    instances.
   * @param {Number} [args.count = 0] -The number of returned documents.
   */
  constructor(args) {
    /** @type {Number} */
    this._count = args && args.count ? args.count : 0;
    /** @type {Category} */
    this._data = args && args.data && Array.isArray(args.data) ?
      args.data.map((cat) => {
        return new Category(cat);
      }) : [];
    /** @type {Number} */
    this._total = args && args.total ? args.total : 0;
  }

  get count() { return this._count }
  set count(value) { this._count = value }
  get total() { return this._total }
  set total(value) { this._total = value }
  get data() { return this._data }
  set data(value) { this._data = value }

  /**
   * Returns the class instance according to the OCAPI specification (with
   * snake_case variable names) for easy use when making a POST/PUT call to the
   * OCAPI endpoint.
   *
   * @return {Object} - Returns an object literal representing the class
   *    instance according to the OCAPIl specification.
   */
  getDocument() {
    const doc = {
      count: this._count,
      total: this._total,
      data: this._data
    };

    return doc;
  }
}
