/**
 * @file ProductSearchResult.js
 * @fileoverview - ProductSearchResult OCAPI Shop API document (v_18.7) class
 */

import Suggestion from './Suggestion';

/**
 * @class ProductSearchResult
 * @classdesc Provides a class to represent the result of a ProductSearch
 *    request to the OCAPI Shop API.
 */
export default class ProductSearchResult {
  /**
   * @constructor
   * @param {object} [args = {}] - Generic arguments object for passing a
   *    ProductSearchResult document returned from an OCAPI call to directly
   *    instantiate a class instance to represent this search result.
   * @param {number} [args.count] - The number of returned documents.
   * @param {ProductSearchHit[]} [args.hits] - The sorted array of search hits.
   *    This array can be empty.
   * @param {string} [args.next] - The URL of the next result page.
   * @param {string} [args.previous] - The URL of the previous result page.
   * @param {string} [args.query] - The query String that was searched for.
   * @param {ProductSearchRefinenement[]} [args.refinements] - The sorted array
   *    of search refinements. This array can be empty.
   * @param {Suggestion} [args.search_phrase_suggestions] - The suggestion given
   *    by the system for the submitted search phrase.
   * @param {string} [args.select] - The fields that you want to select.
   * @param {Map<string, string>} [args.selected_refinements] - A map of
   *    selected refinement attribute id/value(s) pairs. The sorting order is
   *    the same as in request URL.
   */
  constructor(args = {}) {
    /** @type {number} */
    this._count = args.count || 0;
    /** @type {string} */
    this._next = args.next || '';
    /** @type {string} */
    this._previous = args.previous || '';
    /** @type {string} */
    this._query = args.query || '';
    /** @type {string} */
    this._select = args.select || '';
    /** @type {Map<string, string>} */
    this._selectedRefinements = args.selected_refinements || new Map();
    /** @type {Suggestion} */
    this._searchPhraseSuggestions = args.search_phrase_suggestions || new Suggestion();
    /** @type {string} */
    this._selectedSortingOption = args.selected_sorting_option || '';
    /** @type {number} */
    this._start = args.start || 0;
    /** @type {number} */
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

  /* Class accessors/mutators
     ======================================================================== */
  get count() { return this._count }
  set count(value) { this._count = value }
  get hits() { return this._hits };
  set hits(value) { this._hits = value };
  get next() { return this._next }
  set next(value) { this._next = value }
  get previous() { return this._previous }
  set previous(value) { this._previous = value }
  get query() { return this._query }
  set query(value) { this._query = value }
  get refinements() { return this._refinements }
  set refinements(value) { this._refinements = value }
  get searchPhraseSuggestions() { return this._searchPhraseSuggestions }
  set searchPhraseSuggestions(value) { this._searchPhraseSuggestions = value }
  get select() { return this._select }
  set select(value) { this._select = value }
  get selectedRefinements() { return this._selectedRefinements }
  set selectedRefinements(value) { this._selectedRefinements = value }
  get selectedSortingOption() { return this._selectedSortingOption }
  set selectedSortingOption(value) { this._selectedSortingOption = value }
  get sortingOptions() { return this._sortingOptions }
  set sortingOptions(value) { this._sortingOptions = value }
  get start() { return this._start }
  set start(value) { this._start = value }
  get total() { return this._total }
  set total(value) { this._total = value }
}
