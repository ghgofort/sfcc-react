/**
 * @class Category
 * @classdesc Represents the OCAPI Category document type.
 *
 * @property {Category[]} categories - An array of child categories.
 * @property {string} ID - The ID of the category in SFCC Business Manager.
 * @property {string} name - The name assigned to the Category.
 * @property {string} pageDescription - A description to use for displaying the category as a page.
 * @property {string} pageTitle - A title to use for displaying the category as a page.
 * @property {string} type - The type of OCAPI document that the class instance represents.
 * @property {string} version - The version of the OCAPI document that is being stored to memory.
 *
 */
export default class Category {
  /**
   * @constructor
   * @param {Object} [args] - An optional Object literal that follows the OCAPI standard for the
   *    Category document spec.
   * @param {string} [args._type=category] - The type of OCAPI document that a class instance represents.
   * @param {string} [args._v] - The version number assigned to the current OCAPI document.
   * @param {Category[]} [args.categories] - An array of child categories.
   * @param {string} [args.id] - The ID property of the SFCC Category.
   * @param {string} [args.name] - The name property of the SFCC Category.
   * @param {string} [args.page_description] - A description that can be used to display the Category as a page.
   * @param {string} [args.page_title] - A title that can be used to display the Category as a page.
   */
  constructor(args) {
    /** @type {Category[]} */
    this._categories = args && args.categories ? args.categories.map(cat => new Category(cat)) : [];
    /** @type {string} */
    this._id = args && args.id ? args.id : '';
    /** @type {string} */
    this._name = args && args.name ? args.name : '';
    /** @type {string} */
    this._pageDescription = args && args.page_description ? args.page_description : '';
    /** @type {string} */
    this._pageTitle = args && args.page_title ? args.page_title : '';
    /** @type {string} */
    this._type = 'category';
    /** @type {string} */
    this._version = args && args._v ? args._v : '';

    // Add custom attributes to the instance.
    Object.keys(args)
      .filter(key => /^c_/.test(key))
      .forEach(key => this[key] = args[key]);
  }

  get categories() {return this._categories}
  set categories(value) {this._categories = value}
  get ID() { return this._id }
  set ID(value) { this._id = value }
  get name() {return this._name}
  set name(value) {this._name = value}
  get pageDescription() {return this._pageDescription}
  set pageDescription(value) {this._pageDescription = value}
  get pageTitle() {return this._pageTitle}
  set pageTitle(value) {this._pageTitle = value}
  get type() {return this._type}
  set type(value) {this._type = value}
  get version() { return this._version }
  set version(value) { this._version = value }
}
