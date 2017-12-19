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
    this.ID = args.productID ? args.productID : '';
    /** @type {string} */
    this._name = args.name ? args.name : '';
    /** @type {boolean} */
    this._isMaster = args.isMaster ? args.isMaster : false;
    /** @type {string} */
    this._longDescription = args.longDescription ? args.longDescription : '';
    /** @type {string} */
    this._brand = args.brand ? args.brand : '';
  }
}