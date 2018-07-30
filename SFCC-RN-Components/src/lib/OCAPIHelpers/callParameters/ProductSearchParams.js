/**
 * @file ProductSearchParams.js
 * @fileoverview - This class is used to setup query parameters when making a
 * ProductSearch call from the OCAPI Service.
 */

import { appConfig } from '../../../config/appConfig';
import ProductSearchRefineParams from './ProductSearchRefineParams';

/**
 * @class ProductSearchParams
 * @classdesc Provides a standard interface for making ProductSearch calls using
 *    the Open Commerce API.
 */
export default class ProductSearchParams {
  /**
   * @constructor
   * @param {object} [args] - An optional arguments object with key/value pairs
   *    for any sort, search, or refinement properties that should be set at the
   *    time of instance instantiation.
   * @param {string} [args.queryString] - The search query string used to get
   *    the search results before filtering, sorting, and refining.
   * @param {string} [args.sort] - An optional argument used to pre-sort the
   *    returned results from the query.
   * @param {ProductSearchRefineParams} [args.refine] - An instance of the
   *    ProductSearchRefineParams class representing any refinement specific
   *    query parameters to be applied to the query.
   * @param {number} [args.start] - The start position to begin display of the
   *    results set when returning paginated results.
   * @param {count} [args.count = 25] - The number of paginated search results
   *    that should be returned.
   * @param {string[]} [args.expand] - An optional list of arguments to expand
   *    when returning a results set. For instance, a user could return the
   *    results with pricing details 'expanded' by including 'price' in the
   *    expand array parameter.
   */
  constructor(args = {}) {
    const DEFAULT_RESULT_COUNT = appConfig.productSearch.defaultPageSize;
    /** @type {string} */
    this.queryString = args.queryString || '';
    /** @type {string} */
    this.sort = args.sort || '';
    /** @type {ProductSearchRefineParams} */
    this.refine = args.refine ? args.refine : new ProductSearchRefineParams();
    /** @type {number} */
    this.start = args.start || 0;
    /** @type {number} */
    this.count = args.count || DEFAULT_RESULT_COUNT;
    /** @type {string[]} */
    this.expand = args.expand || []
  }

  /**
   * Returns a unique hash for the set of specified search parameters which is
   * used for saving the results to the app state, and then retrieving the
   * cached results if the cache hasn't timed out, and the result with the
   * matching hash is found in the app's state.
   *
   * @return {string} - Returns the unique hash created from the set of search
   *    parameters, sort parameters, and refinements.
   *
   * Hash function borrowed from:
   *  - Stack Overflow question:
   *    https://stackoverflow.com/questions/194846/is-there-any-kind-of-hash-code-function-in-javascript
   *  - Answer by: KimKha
   */
  getHash() {
    // Get the string representation of the class instance.
    const objString = this.toString();
    let char;
    let hash = 0;

    for (let i = 0; i < objString.length; i++) {
      char = objString.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      // Convert to 32bit integer
      hash = hash & hash;
    }
    return hash;
  }

  /**
   * Returns a string representation for the class instance.
   *
   * @return {string}
   */
  toString() {
    let strThis = '';

    // Append the query string to the string representation.
    if (this.queryString) {
      strThis += '?q=' + this.queryString;
    }

    // Append the sort order arguments to the string.
    if (this.sort) {
      strThis += '&sort=' + this.sort;
    }

    // Append the search refinements to the string.
    strThis += this.refine.toString();

    // Append the start position to the string.
    strThis += this.start !== 0 ? '&start=' + this.start : '';

    // Append the max result count returned for this parameter set.
    strThis += '&count=' + this.count;

    return strThis;
  }
}