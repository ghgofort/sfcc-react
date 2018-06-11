/**
 * @file Image.js
 * @fileoverview - Class file for an OCAPI Image document.
 */

/**
 * @class Image
 */
export default class Image {
  /**
   *
   * @param {Object} [args] - An optional argument object with properties to match the response
   *    fields of a image type in an OCAPI call.
   * @param {String} [args.alt] - Image alternate text to be displayed if image is not rendered.
   * @param {String} [args.dis_base_link] - Image server's base URI link.
   * @param {String} [args.link] - The URI link to the image's location.
   * @param {String} [args.title] - An optional image title.
   */
  constructor(args) {
    /** @type {String} */
    this._alt = args && args.alt ? args.alt : '';
    /** @type {String} */
    this._disBaseLink = args && args.dis_base_link ? args.dis_base_link : '';
    /** @type {String} */
    this._link = args && args.link ? args.link : '';
    /** @type {String} */
    this._title = args && args.title ? args.title : '';
  }

  get link() { return this._link }
  set link(value) { this._link = value }
  get disBaseLink() { return this._disBaseLink }
  set disBaseLink(value) { this._disBaseLink = value }
  get title() { return this._title }
  set title(value) { this._title = value }
  get alt() { return this._alt }
  set alt(value) { this._alt = value }

  /**
   * Returns an object literal representation of the class instance that matches
   * the OCAPI specification (v18.6) in order to provide an easy way to include
   * the document instance in POST/PUT API calls to OCAPI.
   *
   * @return {Object} - The object literal representation of the class instance
   *    according to the OCAPI document specification.
   */
  getDocument() {
    const doc = {
      link: this._link,
      dis_base_link: this._disBaseLink,
      title: this._title,
      alt: this._alt
    };

    return doc;
  }
}
