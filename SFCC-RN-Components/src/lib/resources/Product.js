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
    this._brand = args && args.brand ? args.brand : '';
    /** @type {Array<BundledProduct>} */
    this._bundledProducts = [];
    /** @type {string} */
    this._currency = args && args.currency ? args.currency : '';
    /** @type {string} */
    this._ean = args && args.ean ? args.ean : '';
    /** @type {string} */
    this._id = args && args.id ? args.id : '';
    /** @type {Array<ImageGroup>} */
    this._imageGroups = [];
    /** @type {Array<Inventory>} */
    this._inventories = [];
    /** @type {Inventory} */
    this._inventory = args && args.inventory ? new Inventory(args.inventory) : new Inventory();
    /** @type {string} */
    this._longDescription = args && args.long_description ? args.long_description : '';
    /** @type {string} */
    this._manufacturerName = args && args.manufacturer_name ? args.manufacturer_name : '';
    /** @type {string} */
    this._manufacturerSKU = args && args.manufacturer_sku ? args.manufacturer_sku : '';
    /** @type {boolean} */
    this._isMaster = args && args.isMaster ? args.isMaster : false;
    /** @type {number} */
    this._minOrderQuantity = args && args.min_order_quantity ? args.min_order_quantity : '';
    /** @type {string} */
    this._name = args && args.name ? args.name : '';
    /** @type {Array<Option>} */
    this._options = [];
    /** @type {string} */
    this._pageDescription = args && args.page_description ? args.page_description : '';
    /** @type {string} */
    this._pageKeywords = args && args.page_keywords ? args.page_keywords : '';
    /** @type {string} */
    this._pageTitle = args && args.page_title ? args.page_title : '';
    /** @type {string} */
    this._pageDescription = args && args.page_description ? args.page_description : '';
    /** @type {number} */
    this._price = args && args.price ? args.price : 0;
    /** @type {number} */
    this._priceMax = args && args.price_max ? args.price_max : 0;

    //this._prices = new Map()

    /** @type {string} */
    this._primaryCategoryID = args && args.primary_category_id ? args.primary_category_id : '';
    /** @type {string} */
    this._shortDescription = args && args.short_description ? args.short_description : '';

    // Instantiate any member arrays that were included in the arguments.
    if (args && args.bundled_products) {
      args.bundled_products.forEach((bp, i, bps) => {
        bps.push(new BundledProduct(bp));
      });
    }
  }
}
