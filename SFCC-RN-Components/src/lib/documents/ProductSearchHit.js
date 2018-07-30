/**
 * @file ProductSearchHit.js
 * @fileoverview - ProductSearchHit OCAPI document class.
 */

import Image from "./Image";
import ProductRef from "./ProductRef";
import ProductType from "./ProductType";
import VariationAttribute from "./VariationAttribute";

/**
 * @class ProductSearchHit
 * @classdesc - A data class for keeping the standard document type when
 *    handling responses from  productSearch calls to the Open Commerce API.
 */
export default class ProductSearchHit {
  /**
   * @private
   * @type {String}
   */
  _docType = "ProductSerachHit";

  /**
   * @constructor
   * @param {Object} [args] - An optional arguments object that is in the form
   *    of the OCAPI Shop API ProductSearchHit doucment so that your API call
   *    results can be passed directly into the constructor for easy data
   *    standardization.
   */
  constructor(args) {
    /** @type {String} */
    this._currency = args && args.currency ? args.currency : "";
    /** @type {String} */
    this._hitType = args && args.hit_type ? args.hit_type : "";
    /** @type {Image} */
    this._image = args && args.image ? new Image(args.image) : new Image();
    /** @type {String} */
    this._link = args && args.link ? args.link : "";
    /** @type {Boolean} */
    this._orderable = args && args.orderable ? args.orderable : "";
    /** @type {Number} */
    this._price = args && args.price ? args.price : 0;
    /** @type {Number} */
    this._priceMax = args && args.price_max ? args.price_max : 0;
    /** @type {Map<String, Number>} */
    this._prices = args && args.prices ? args.prices : new Map();
    /** @type {String} */
    this._productID = args && args.product_id ? args.product_id : "";
    /** @type {String} */
    this._productName = args && args.product_name ? args.product_name : "";
    /** @type {ProductType} */
    this._productType =
      args && args.product_type
        ? new ProductType(args.product_type)
        : new ProductType();
    /** @type {ProductRef} */
    this._representedProduct =
      args && args.represented_product
        ? new ProductRef(args.represented_product)
        : new ProductRef();
    /** @type {ProductRef[]} */
    this._representedProducts =
      args && args.represented_products && args.represented_products.length
        ? args.represented_products.map(rp => {
            return new ProductRef(rp);
          })
        : [];
    /** @type {VariationAttribute} */
    this._variationAttributes =
      args && args.variation_attributes && args.variation_attributes.length
        ? args.variation_attributes.map(va => {
            return new VariationAttribute(va);
          })
        : [];
  }

  /* Class Mutators / Accessors
     ======================================================================== */

  get docType() {
    return this._docType;
  }
  get currency() {
    return this._currency;
  }
  set currency(value) {
    this._currency = value;
  }
  get hitType() {
    return this._hitType;
  }
  set hitType(value) {
    this._hitType = value;
  }
  get image() {
    return this._image;
  }
  set image(value) {
    this._image = value;
  }
  get link() {
    return this._link;
  }
  set link(value) {
    this._link = value;
  }
  get orderable() {
    return this._orderable;
  }
  set orderable(value) {
    this._orderable = value;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  get priceMax() {
    return this._priceMax;
  }
  set priceMax(value) {
    this._priceMax = value;
  }
  get prices() {
    return this._prices;
  }
  set prices(value) {
    this._prices = value;
  }
  get productID() {
    return this._productID;
  }
  set productID(value) {
    this._productID = value;
  }
  get productName() {
    return this._productName;
  }
  set productName(value) {
    this._productName = value;
  }
  get ProductType() {
    return this._ProductType;
  }
  set ProductType(value) {
    this._ProductType = value;
  }
  get representedProduct() {
    return this._representedProduct;
  }
  set representedProduct(value) {
    this._representedProduct = value;
  }
  get representedProducts() {
    return this._representedProducts;
  }
  set representedProducts(value) {
    this._representedProducts = value;
  }
  get variationAttributes() {
    return this._variationAttributes;
  }
  set variationAttributes(value) {
    this._variationAttributes = value;
  }

  /* Public Instance Methods
     ======================================================================== */

  /**
   * Gets a JSON string of the class that matches the OCAPI document (v18.3)
   * definition.
   *
   * @return {String} - A JSON string representation of the instance that
   *    matches the OCAPI document definition.
   */
  getDocument() {
    const doc = {
      currency: this._currency,
      hit_type: this._hitType,
      image: this._image,
      link: this._link,
      orderable: this._orderable,
      price: this._price,
      price_max: this._priceMax,
      prices: this._prices,
      product_id: this._productID,
      product_name: this._productName,
      product_type: this._productType,
      represented_product: this._representedProduct,
      represented_products: this._representedProducts,
      variation_attributes: this._variationAttributes
    };

    return doc;
  }
}
