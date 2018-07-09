/**
 * @file ProductSearchResult.js
 * @fileoverview - ProductSearchResult OCAPI document (v_18.7) class
 */

 /**
  * @class ProductSearchResult
  * @classdesc Provides a class to represent the result of a ProductSearch
  *    request to the Open Commerce API.
  */
 export default class ProductSearchResult {
   /**
    * @constructor
    */
   constructor(args={}) {
    this._count = args.count || 0;
    this._hits = args.hits || [];
    this._next = args.next || '';
    this._previous = args.previous || '';
    this._query = args.query || '';
    this._refinements = args.refinements || [];
    this._searchPhraseSuggestion = args.search_phrase_suggestion ||
      new Suggestion();
    this._select = args.select || '';
    this._selectedRefinements = args.selected_refinements || new Map();
    this._selectedSortingOption = args.selected_sorting_option || '';
    this._sortingOptions = args.sorting_options || '';
    this._start = args.start || 0;
    this._total = args.total || 0;
   }

 }


