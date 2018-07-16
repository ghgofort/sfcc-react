/**
 * @file ProductSearchParams.js
 * @fileoverview - This class is used to setup query parameters when making a
 * ProductSearch call from the OCAPI Service.
 */

import { appConfig } from '../../../config/appConfig';

/**
 * @class ProductSearchParams
 * @classdesc Provides a standard interface for making ProductSearch calls using
 *    the Open Commerce API.
 */
export default class ProductSearchParams {
  /**
   * @constructor
   */
  constructor(args={}) {
    const DEFAULT_RESULT_COUNT = appConfig.productSearch.defaultPageSize;
    this._queryString = args.queryString || '';
    this._sort = args.sort || '';
    this._refine = args.refine ? this._getRefinementString() : '';
    this._start = args.start || 0;
    this._count = args.count || DEFAULT_RESULT_COUNT;
    this._expand = args.expand || []
  }

  /**
   * Returns a unique hash for the set of specified search parameters which is
   * used for saving the results to the app state, and then retrieving the
   * cached results if the cache hasn't timed out, and the result with the
   * matching hash is found in the app's state.
   *
   * @return {string} - Returns the unique hash created from the set of search
   *    parameters.
   */
  getHash() {
    let hash = '';

    return hash;
  }


  _getRefinementString(refine) {

  }
}

