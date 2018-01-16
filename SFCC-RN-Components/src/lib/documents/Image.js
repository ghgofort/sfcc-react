/**
 * @file Image.js
 * Class file for an OCAPI Image document.
 */

 /**
  * @class Image
  */
export default class Image {
  /**
   *
   * @param {Object} [args] - An optional argument object with properties to match the response
   *    fields of a image type in an OCAPI call.
   * @param {string} [args.alt] - Image alternate text to be displayed if image is not rendered.
   * @param {string} [args.dis_base_link] - Image server's base URI link.
   * @param {string} [args.link] - The URI link to the image's location.
   * @param {string} [args.title] - An optional image title.
   */
  constructor(args) {
    /** @type {string} */
    this._alt = args && args.alt ? args.alt : '';
    /** @type {string} */
    this._disBaseLink = args && args.dis_base_link ? args.dis_base_link : '';
    /** @type {string} */
    this._link = args && args.link ? args.link : '';
    /** @type {string} */
    this._title = args && args.title ? args.title : '';
  }

  get link() {return this._link}
  set link(value) {this._link = value}
  get disBaseLink() {return this._disBaseLink}
  set disBaseLink(value) {this._disBaseLink = value}
  get title() {return this._title}
  set title(value) {this._title = value}
  get alt() {return this._alt}
  set alt(value) {this._alt = value}
}