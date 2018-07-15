/**
 * @file ProductSearchResult.js
 * @fileoverview - ProductSearchResult OCAPI document (v_18.7) class
 */

import Suggestion from './Suggestion';

/**
 * @class ProductSearchResult
 * @classdesc Provides a class to represent the result of a ProductSearch
 *    request to the Open Commerce API.
 */
export default class ProductSearchResult {
  /**
   * @constructor
   */
  constructor(args = {}) {
    /** @type {number} */
    this._count = args.count || 0;
    /** @type {String} */
    this._next = args.next || '';
    /** @type {String} */
    this._previous = args.previous || '';
    /** @type {String} */
    this._query = args.query || '';
    /** @type {String} */
    this._select = args.select || '';
    /** @type {Map<String, String>} */
    this._selectedRefinements = args.selected_refinements || new Map();
    /** @type {Suggestion} */
    this._searchPhraseSuggestions = args.search_phrase_suggestions || new Suggestion();
    /** @type {String} */
    this._selectedSortingOption = args.selected_sorting_option || '';
    /** @type {Number} */
    this._start = args.start || 0;
    /** @type {Number} */
    this._total = args.total || 0;

    /** @type {ProductSearchHit[]} */
    this._hits = args.hits ?
      args.hits.foreach(hit => {
        return new ProductSearchHit(hit);
      }) : [];

    /** @type {ProductSearchRefinenement[]} */
    this._refinements = args.refinements ?
      args.refinements.map(refinement => {
        return new ProductSearchRefinenement(refinement);
      }) : [];

    /** @type {ProductSearchSortingOption[]} */
    this._sortingOptions = args.sorting_options ?
      args.sorting_options.map(option => {
        return new ProductsearchSortingOption(option);
      }) : [];
  }

  get count() { return this._count }
  set count(value) { this._count = value }
  get next() { return this._next }
  set next(value) { this._next = value }
  get previous() { return this._previous }
  set previous(value) { this._previous = value }
  get query() { return this._query }
  set query(value) { this._query = value }
  get select() { return this._select }
  set select(value) { this._select = value }
  get selectedRefinements() { return this._selectedRefinements }
  set selectedRefinements(value) { this._selectedRefinements = value }


  get hits() { return this._hits };
  set Hits(value) { this._hits = value };

}