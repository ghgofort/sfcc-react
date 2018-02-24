/**
 * @file Product.js
 * Contains the Product class.
 */

import BundledProduct from './BundledProduct';
import ImageGroup from './ImageGroup';
import Inventory from './Inventory';
import Option from './Option';
import ProductLink from './ProductLink';
import ProductPromotion from './ProductPromotion';
import ProductType from './ProductType';
import Recommendation from './Recommendation';
import Variant from './Variant';
import VariationGroup from './VariationGroup';

/**
 * The Product class is a data model class for an SFCC Product {dw.order.Product} instance
 * returned from an OCAPI API call.
 * @see https://documentation.demandware.com/DOC2/topic/com.demandware.dochelp/OCAPI/18.1/shop/Documents/Product.html?cp=0_12_5_80
 * @class Product
 */
export default class Product {

  /**
   * @param {Object} [args] - An optional object of key value pairs used to pre-populate
   *    attribute values of the Product instance.
   */
  constructor(args) {
    /** @type {string} */
    this._brand = args && args.brand ? args.brand : '';
    /** @type {Array<BundledProduct>} */
    this._bundledProducts = args && args.bundled_products ?
      args.bundled_products.map(bp => new BundledProduct(bp)) : [];
    /** @type {string} */
    this._currency = args && args.currency ? args.currency : '';
    /** @type {string} */
    this._ean = args && args.ean ? args.ean : '';
    /** @type {string} */
    this._id = args && args.id ? args.id : '';
    /** @type {Array<ImageGroup>} */
    this._imageGroups = args && args.image_groups ?
      args.image_groups.map(ig => new ImageGroup(ig)) : [];
    /** @type {Array<Inventory>} */
    this._inventories = args && args.inventories ?
      args.inventories.map(iv => new Inventory(iv)) : [];
    /** @type {Inventory} */
    this._inventory = args && args.inventory ? new Inventory(args.inventory) : new Inventory();
    /** @type {string} */
    this._longDescription = args && args.long_description ? args.long_description : '';
    /** @type {string} */
    this._manufacturerName = args && args.manufacturer_name ? args.manufacturer_name : '';
    /** @type {string} */
    this._manufacturerSKU = args && args.manufacturer_sku ? args.manufacturer_sku : '';
    /** @type {boolean} */
    this._master = args && args.isMaster ? args.isMaster : false;
    /** @type {number} */
    this._minOrderQuantity = args && args.min_order_quantity ? args.min_order_quantity : '';
    /** @type {string} */
    this._name = args && args.name ? args.name : '';
    /** @type {Array<Option>} */
    this._options = args && args.options ?
      args.options.map(op => new Option(op)) : [];
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
    /** @type {Map<string, number>} */
    this._prices = new Map();
    /** @type {string} */
    this._primaryCategoryID = args && args.primary_category_id ? args.primary_category_id : '';
    /** @type {Array<ProductLink>} */
    this._productLinks = args && args.product_links ?
      args.product_links.map(pl => new ProductLink(pl)) : [];
    /** @type {Array<ProductPromotion>} */
    this._productPromotions = args && args.product_promotions ?
      args.product_promotions.map(pp => new ProductPromotion(pp)) : [];
    /** @type {Array<Recommendation>} */
    this._recommendations = args && args.recommendations ?
      args.recommendations.map(re => new Recommendation(re)) : [];
    /** @type {Array<Product>} */
    this._setProducts = args && args.set_products ?
      args.set_products.map(sp => new Product(sp)) : [];
    /** @type {string} */
    this._shortDescription = args && args.short_description ? args.short_description : '';
    /** @type {number} */
    this._stepQuantity = args && args.step_quantity ? args.step_quantity : 1;
    /** @type {ProductType} */
    this._productType = args && args.type ? new ProductType(args.type) : new ProductType();
    /** @type {string} */
    this._unit = args && args.unit ? args.unit : '';
    /** @type {string} */
    this._upc = args && args.upc ? args.upc : '';
    /** @type {Array<Variant>} */
    this._variants = args && args.variants ?
      args.variants.map(va => new Variant(va)) : [];
    /** @type {Array<VariationGroup>} */
    this._variationGroups = args && args.variation_groups ?
      args.variation_groups.map(vg => new VariationGroup) : [];
    /** @type {Map<string, string>} */
    this._variationValues = new Map();

    // Populate the properties of type Map, and the custom properties.
    if (args) {
      // Maps
      if (args.prices) {
        Object.keys(args.prices).forEach(priceBookID => {
          this._prices.set(priceBookID, args.prices[priceBookID]);
        });
      }

      if (args.variation_values) {
        Object.keys(args.variation_values).forEach(varValName => {
          this._variationValues.set(varValName, args.variation_values[varValName]);
        });
      }

      // Add custom attributes to the instance.
      Object.keys(args)
        .filter(key => /^c_/.test(key))
        .forEach(key => this[key] = args[key]);
    }

  }

  get brand() { return this._brand }
  set brand(value) { this._brand = value }
  get bundledProducts() { return this._bundledProducts }
  set bundledProducts(value) { this._bundledProducts = value }
  get currency() { return this._currency }
  set currency(value) { this._currency = value }
  get ean() { return this._ean }
  set ean(value) { this._ean = value }
  get ID() { return this._id }
  set ID(value) { this._id = value }
  get imageGroups() { return this._imageGroups }
  set imageGroups(value) { this._imageGroups = value }
  get inventories() { return this._inventories }
  set inventories(value) { this._inventories = value }
  get inventory() { return this._inventory }
  set inventory(value) { this._inventory = value }
  get longDescription() { return this._longDescription }
  set longDescription(value) { this._longDescription = value }
  get manufacturerName() { return this._manufacturerName }
  set manufacturerName(value) { this._manufacturerName = value }
  get manufacturerSKU() { return this._manufacturerSKU }
  set manufacturerSKU(value) { this._manufacturerSKU = value }
  get master() { return this._master }
  set master(value) { this._master = value }
  get minOrderQuantity() { return this._minOrderQuantity }
  set minOrderQuantity(value) { this._minOrderQuantity = value }
  get name() { return this._name }
  set name(value) { this._name = value }
  get options() { return this._options }
  set options(value) { this._options = value }
  get pageDescription() { return this._pageDescription }
  set pageDescription(value) { this._pageDescription = value }
  get pageKeywords() { return this._pageKeywords }
  set pageKeywords(value) { this._pageKeywords = value }
  get pageTitle() { return this._pageTitle }
  set pageTitle(value) { this._pageTitle = value }
  get price() { return this._price }
  set price(value) { this._price = value }
  get priceMax() { return this._priceMax }
  set priceMax(value) { this._priceMax = value }
  get prices() { return this._prices }
  set prices(value) { this._prices = value }
  get primaryCategoryID() { return this._primaryCategoryID }
  set primaryCategoryID(value) { this._primaryCategoryID = value }
  get productLinks() { return this._productLinks }
  set productLinks(value) { this._productLinks = value }
  get productPromotions() { return this._productPromotions }
  set productPromotions(value) { this._productPromotions = value }
  get recommendations() { return this._recommendations }
  set recommendations(value) { this._recommendations = value }
  get setProducts() { return this._setProducts }
  set setProducts(value) { this._setProducts = value }
  get shortDescription() { return this._shortDescription }
  set shortDescription(value) { this._shortDescription = value }
  get stepQuantity() { return this._stepQuantity }
  set stepQuantity(value) { this._stepQuantity = value }
  get type() { return this._productType }
  set type(value) { this._productType = value }
  get unit() { return this._unit }
  set unit(value) { this._unit = value }
  get upc() { return this._upc }
  set upc(value) { this._upc = value }
  get variants() { return this._variants }
  set variants(value) { this._variants = value }
  get variationAttributes() { return this._variationAttributes }
  set variationAttributes(value) { this._variationAttributes = value }
  get variationGroups() { return this._variationGroups }
  set variationGroups(value) { this._variationGroups = value }
  get variationValues() { return this._variationValues }
  set variationValues(value) { this._variationValues = value }
}
