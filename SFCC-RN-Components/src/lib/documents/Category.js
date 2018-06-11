/**
 * @class Category
 * @classdesc Represents the OCAPI Category document type.
 *
 * @property {Category[]} categories - An array of child categories.
 * @property {String} - The localized description of the category.
 * @property {String} ID - The ID of the category in SFCC Business Manager.
 * @property {String}
 * @property {String} name - The name assigned to the Category.
 * @property {String} pageDescription - A description to use for displaying the category as a page.
 * @property {String} pageTitle - A title to use for displaying the category as a page.
 * @property {String} parentCategoryID - The ID of the parent category.
 * @property {String} type - The type of OCAPI document that the class instance represents.
 * @property {String} version - The version of the OCAPI document that is being stored to memory.
 *
 */
export default class Category {
  /**
   * @constructor
   * @param {Object} [args] - An optional Object literal that follows the OCAPI standard for the
   *    Category document spec.
   * @param {String} [args._type=category] - The type of OCAPI document that a class instance represents.
   * @param {String} [args._v] - The version number assigned to the current OCAPI document.
   * @param {Category[]} [args.categories] - An array of child categories.
   * @param {String} [args.description] - The localized description of the category.
   * @param {String} [args.id] - The ID property of the SFCC Category.
   * @param {String} [args.image] - The URL to the category image.
   * @param {String} [args.name] - The name property of the SFCC Category.
   * @param {String} [args.page_description] - A description that can be used to display the Category as a page.
   * @param {String} [args.page_title] - A title that can be used to display the Category as a page.
   * @param {String} [args.parent_category_id] - The ID attribute of the parent category.
   */
  constructor(args) {
    /** @type {Category[]} */
    this._categories = args && args.categories ?
      args.categories.map(cat => new Category(cat)) : [];
    /** @type {string} */
    this._id = args && args.id ? args.id : '';
    /** @type {string} */
    this._image = args && args.image ? args.image : '';
    /** @type {string} */
    this._description = args && args.description ? args.description : '';
    /** @type {string} */
    this._name = args && args.name ? args.name : '';
    /** @type {string} */
    this._pageDescription = args && args.page_description ?
      args.page_description : '';
    /** @type {string} */
    this._pageKeywords = args && args.page_keywords ? args.page_keywords : '';
    /** @type {string} */
    this._pageTitle = args && args.page_title ? args.page_title : '';
    /** @type {string} */
    this._parentCategoryID = args && args.parent_category_id ?
      args.parent_category_id : '';
    /** @type {string} */
    this._type = 'category';
    /** @type {string} */
    this._version = args && args._v ? args._v : '';

    // Add custom attributes to the instance.
    if (args && args.length) {
      Object.keys(args)
        .filter(key => /^c_/.test(key))
        .forEach(key => this[key] = args[key]);
    }
  }

  get categories() { return this._categories }
  set categories(value) { this._categories = value }
  get description() { return this._description }
  set description(value) { this._description = value }
  get ID() { return this._id }
  set ID(value) { this._id = value }
  get image() { return this._image }
  set image(value) { this._image = value }
  get name() { return this._name }
  set name(value) { this._name = value }
  get pageDescription() { return this._pageDescription }
  set pageDescription(value) { this._pageDescription = value }
  get pageKeywords() { return this._pageKeywords }
  set pageKeywords(value) { this._pageKeywords = value }
  get pageTitle() { return this._pageTitle }
  set pageTitle(value) { this._pageTitle = value }
  get parentCategoryID() { return this._parentCategoryID }
  set parentCategoryID(value) { this._parentCategoryID = value }
  get type() { return this._type }
  set type(value) { this._type = value }
  get version() { return this._version }
  set version(value) { this._version = value }

  /**
   * Gets an object literal of the class that matches the OCAPI document (v18.6)
   * definition.
   *
   * @return {Object} - A JSON string representation of the class instance that
   *    matches the OCAPI document definition.
   */
  getDocument() {
    const doc = {
      categories: this._categories,
      description: this._description,
      id: this._id,
      image: this._image,
      name: this._name,
      page_description: this._pageDescription,
      page_keywords: this._pageKeywords,
      page_title: this.pageTitle,
      parent_category_id: this._parentCategoryID,
      thumbnail: this._thumbnail
    };

    return doc;
  }
}
