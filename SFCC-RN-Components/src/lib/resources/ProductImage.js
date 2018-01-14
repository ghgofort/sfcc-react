

export default class ProductImage {
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
    // "alt": "Tracer 2",
    // "dis_base_link": "https://sits-pod52.demandware.net/dw/image/v2/AAFF_S25/on/demandware.static/-/Sites-masterCatalogHoka/default/v1514346396403/images/white/1016786-CCYN_1.jpg",
    // "link": "https://dw25-web-deckers.demandware.net/on/demandware.static/-/Sites-masterCatalogHoka/default/v1514346396403/images/white/1016786-CCYN_1.jpg",
    // "title": "Tracer 2"
  }
}