/**
 * @file ProductSearchRefineParams.js
 * @fileoverview - Holds a class representing the refinements to the current
 * ProductSearch call that need to be applied when making the OCAPI call.
 */

/**
 * @class ProductSearchRefineParams
 * @classdesc A class that provides a standard interface for passing search
 *    refinements into an OCAPI ProductSearch call.
 */
export default class ProductSearchRefineParams {
  /**
   * Supported product hit types.
   * @memberof ProductSearchRefineParams
   * @readonly
   */
  static PRODUCT_TYPES = {
    'product': 0,
    'master': 1,
    'set': 2,
    'bundle': 3,
    'variation_group': 4
  };

  static VALID_PARAM_TYPES = {

  };

  /**
   * @constructor
   * @param {object} [args] - An arguments object holding key/value pairs for
   *    any refinements that should be applied to the current ProductSearch.
   * @param {string} [args.cgid] - Allows to refine per single category id.
   *    Multiple category ids are not supported.
   * @param {number} [args.minPrice] - Allows to refine per single price range.
   *    Multiple price ranges are not supported.
   * @param {number} [args.maxPrice] - - Allows to refine per single price range.
   *    Multiple price ranges are not supported.
   * @param {string|string[]} [args.pmid] - Allows to refine per promotion id(s).
   * @param {string|number|Array<string|number>} [args.hitTypes] - Allow to refine
   *    by including onlythe provided hit types. Accepted types are 'product',
   *    'master', 'set', 'bundle', 'variation_group'.
   * @param {boolean} [args.orderableOnly = false] - Unavailable products will
   *    be excluded from the search results if true is set. Multiple refinement
   *    values are not supported.
   */
  constructor(args = {}) {
    /** @type {string[]} */
    this.unsupportedRefinements = [];
    /** @type {string} */
    this.cgid = args.cgid || '';
    /** @type {number} */
    this.minPrice = args.minPrice || null;
    /** @type {number} */
    this.maxPrice = args.maxPrice || null;
    /** @type {boolean} */
    this.orderableOnly = args.orderableOnly || false;
    /** @type {number[]} */
    this.hitTypes = [];
    const typeNames = Object.keys(ProductSearchRefineParams.PRODUCT_TYPES);

    // Get the values from the hitTypes key/value pair, check for type, and
    // add the mapped number to the array of hitTypes.
    if (args.hitTypes && typeof args.hitTypes === 'string') {
      // Check if this is a supported product hit type.
      if (typeNames.includes(args.hitTypes)) {
        // hitType is a String and IS a valid hitType.
        this.hitTypes = [ProductSearchRefineParams.PRODUCT_TYPES[args.hitTypes]];
      } else {
        // hitType is a String but NOT a valid hitType.
        this.hitTypes = [];
        this.unsupportedRefinements.push({
          refineType: 'hitType',
          refineTypeFound: true,
          refineSubType: args.hitTypes,
          refineSubTypeFound: false
        });
      }
    } else if (
      args.hitTypes &&
      Array.isArray(args.hitTypes) &&
      args.hitTypes.length
    ) {
      // hitType is an Array
      args.hitTypes.forEach(htype => {
        if (typeof htype === 'string' && typeNames.includes(htype)) {
          // Array member is a String & IS a valid hitType
          this.hitTypes.push(ProductSearchRefineParams.PRODUCT_TYPES[htype]);
        } else if (
          typeof htype === 'number' &&
          htype >= 0 &&
          htype < typeNames.length
        ) {
          // Array member is a Number & IS a valid hitType
          this.hitTypes.push(htype);
        } else {
          this.unsupportedRefinements.push({
            refineType: 'hitType',
            refineTypeFound: true,
            refineSubType: htype,
            refineSubTypeFound: false
          });
        }
      });
    } else {
      this.unsupportedRefinements.push({
        refineType: 'hitType',
        refineTypeFound: false,
        refineSubType: '',
        refineSubTypeFound: false
      });
    }

    /** @type {string[]} */
    if (args.pmid && typeof args.pmid === 'string') {
      this.pmid = this.PRODUCT_TYPES.includes(args.pmid) ? [args.pmid] : [];
    } else if (args.pmid && Array.isArray(args.pmid)) {
      this.pmid = args.pmid;
    }
  }

}