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
  static PRODUCT_TYPES = [
    { name: 'product', value: 0 },
    { name: 'master', value: 1 },
    { name: 'set', value: 2 },
    { name: 'bundle', value: 3 },
    { name: 'variation_group', value: 4 }
  ];

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
    /** @type {string[]} */
    this.pmid = [];
    /** @type {string[]} */
    this.hitTypeNames = ProductSearchRefineParams.PRODUCT_TYPES.map(pt => {
      return pt.name;
    });

    // Get the values from the hitTypes key/value pair, check for type, and
    // add the mapped number to the array of hitTypes.
    if (args.hitTypes && typeof args.hitTypes === 'string') {
      // Check if this is a supported product hit type.
      if (this.hitTypeNames.includes(args.hitTypes)) {
        // hitType is a String and IS a valid hitType.
        ProductSearchRefineParams.PRODUCT_TYPES.forEach(ht => {
          if (ht.name === args.hitTypes) {
            this.hitTypes.push(ht.value);
          }
        });
      }
    } else if (
      args.hitTypes &&
      Array.isArray(args.hitTypes) &&
      args.hitTypes.length
    ) {
      // hitType is an Array
      args.hitTypes.forEach(htype => {
        if (typeof htype === 'string' && this.hitTypeNames.includes(htype)) {
          // Array member is a String & IS a valid hitType
          ProductSearchRefineParams.PRODUCT_TYPES.forEach(ht => {
            if (ht.name === htype) {
              this.hitTypes.push(ht.value);
            }
          });
        } else if (
          typeof htype === 'number' &&
          htype >= 0 &&
          htype < this.hitTypeNames.length
        ) {
          // Array member is a Number & IS a valid hitType
          this.hitTypes.push(htype);
        }
      });
    }

    // Get the array of promotion IDs or a single promotion ID string and assign
    // it to the instance member variable.
    if (args.pmid && typeof args.pmid === 'string') {
      /** @type {string[]} */
      this.pmid.push(args.pmid);
    } else if (args.pmid && Array.isArray(args.pmid)) {
      /** @type {string[]} */
      this.pmid = args.pmid;
    }

    // If there are any custom search parameters included in the query then
    // get them and assign them to the class instance properties.
    this.custom = new Map();
    if (args.custom) {
      this._getCustomArgs(args.custom);
    }
  }

  /**
   * Gets any included custom refinement parameters from the arguments object
   * and stores them as a map of key/value pairs for easy property access as
   * an instance property 'custom'.
   *
   * @param {Array<{key: string, value: string|number}>} args - The arguments object passed from the class
   *    constructor method.
   */
  _getCustomArgs(args) {
    args.forEach(function(arg) {
      let argTypeIsValid = typeof arg.value === 'string' ||
        typeof arg.value === 'number';

      if (typeof arg.key === 'string' && argTypeIsValid) {
        this.custom.set(key, arg.value);
      }
    });
  }

  /**
   * Gets the string constant that matches the stored number for the hit type
   * product search refinement.
   *
   * @param {number} hitType - The number that corresponds to the hit-type constant.
   * @return {string} - Returns the matching hit type string constant for the
   *    specified hitType integer value, or returns an empty string if a match
   *    is not found in the allowed hit type search refinements.
   */
  _getHitType(hitType) {
    let hitName = '';
    ProductSearchRefineParams.PRODUCT_TYPES.forEach(ht => {
      if (ht.value === hitType) {
        hitName = ht.name;
      }
    });

    return hitName;
  }

  /**
   * Returns a string representation of the refinement parameters held in the
   * ProductSearchRefineParams instance's object properties.
   *
   * @return {string}
   */
  toString() {
    let strThis = '';
    let refineCount = 1;

    // Check for Category Refinements and append to string.
    if (typeof this.cgid === 'string' && this.cgid !== '') {
      strThis += '&refine_' + refineCount + '=cgid=' + this.cgid;
      refineCount++;
    }

    // Append the price param if both min & max price are included.
    if (typeof this.minPrice === 'number' &&
      this.minPrice >= 0 &&
      typeof this.maxPricee === 'number' &&
      this.maxPrice > this.minPrice
    ) {
      let strPrice = '(' + this.minPrice + '..' + this.maxPrice + ')';
      strThis += '&refine_' + refineCount + '=price=' + strPrice;
      refineCount++;
    }

    // Append the orderable only flag to the string representation.
    if (this.orderableOnly) {
      strThis += '&refine_' + refineCount + '=orderable_only=true';
      refineCount++;
    }

    // Append any promotion ID search refinements.
    if (this.pmid.length) {
      strThis += '&refine_' + refineCount + '=pmid=';
      this.pmid.forEach((id, i) => {
        strThis += i === 0 ? id : '|' + id;
      });
      refineCount++;
    }

    // Append any included hit-type search refinement parameters.
    if (this.hitTypes.length) {
      strThis += '&refine_' + refineCount + '=htypes=';
      this.hitTypes.forEach((ht, j) => {
        strThis += j === 0 ? this._getHitType() : '|' + _getHitType(ht)
      });
      refineCount++;
    }

    return strThis;
  }
}