/**
 * Product.js
 * Contains the Product class.
 */

/**
 * The Product class is a data model class for an SFCC Product {dw.order.Product} instance.
 *
 * @export
 * @class Product
 */

export default class Product {
  /**
   * Creates an instance of Product.
   *
   * @param {string} [args] - An optional object of key value pairs used to pre-populate
   *    attribute values of the Product instance.
   * @memberof Product
   * @constructor
   */
  constructor(args) {
    /** @type {string} */
    this.ID = args.id ? args.id : '';
    /** @type {string} */
    this._name = args.name ? args.name : '';
    /** @type {boolean} */
    this._isMaster = args.isMaster ? args.isMaster : false;
    /** @type {string} */
    this._longDescription = args.long_description ? args.long_description : '';
    /** @type {string} */
    this._brand = args.brand ? args.brand : '';
    /** @type {string} */
    this._manufacturerName = args.manufacturer_name ? args.manufacturer_name : '';
    /** @type {string} */
    this._manufacturerSKU = args.manufacturer_sku ? args.manufacturer_sku : '';
    /** @type {number} */
    this._minOrderQuantity = args.min_order_quantity ? args.min_order_quantity : '';
    /** @type {string} */
    this._pageDescription = args.page_description ? args.page_description : '';
    /** @type {string} */
    this._pageTitle = args.page_title ? args.page_title : '';
    /** @type {string} */
    this._pageDescription = args.page_description ? args.page_description : '';
    /** @type {string} */
    this._primaryCategoryID = args.primary_category_id ? args.primary_category_id : '';
    /** @type {string} */
    this._shortDescription = args.short_description ? args.short_description : '';
  }
}
