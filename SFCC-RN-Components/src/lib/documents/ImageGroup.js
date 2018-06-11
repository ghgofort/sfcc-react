/**
 * @file ImageGroup.js
 * @fileoverview - ImageGroup OCAPI document class.
 */

import Image from './Image';
import VariationAttribute from './VariationAttribute';

/**
 * @class ImageGroup
 */
export default class ImageGroup {
  /**
   *
   * @param {Object} [args] - An optional arguments Object holding any property values
   *    to be set on instance initialization.
   */
  constructor(args) {
    /** @type {Array<Image>} */
    this._images = args && args.images ? args.images.map(img => new Image(img)) : [];
    /** @type {Array<VariationAttribute>} */
    this._variationAttributes = args && args.variation_attributes ?
      args.variation_attributes.map(va => new VariationAttribute(va)) : [];
    /** @type {string} */
    this._viewType = args && args.view_type ? args.view_type : '';
  }

  get images() {return this._images}
  set images(value) {this._images = value}
  get variationAttributes() {return this._variationAttributes}
  set variationAttributes(value) {this._variationAttributes = value}
  get viewType() {return this._viewType}
  set viewType(value) {this._viewType = value}
}
