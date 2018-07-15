/**
 * @file Suggestion.js
 * @fileoverview - Suggestion OCAPI document class.
 */

import SuggestedCategory from './SuggestedCategory';
import SuggestedContent from './SuggestedContent';
import SuggestedPhrase from './SuggestedPhrase';
import SuggestedProduct from './SuggestedProduct';

/**
 * @class Suggestion
 * @classdesc Suggestion OCAPI documnet class. This class provides a convenient
 *    way to handle results of OCAPI calls that return documents of the
 *    Suggestion type. It can be instantiated by passing the a Suggestion
 *    document as the argument to the constructor.
 */
export default class Suggestion {
  /**
   * @constructor
   * @param {Object} [args={}] - (Optional) An arguments object that matches the document
   *    definition for the OCAPI Suggestion document (v 18_6).
   * @param {Array<String>} [args.brands]
   * @param {Array<SuggestedCategory>} [args.categories]
   * @param {Array<String>} [args.custom_suggestions]
   * @param {Array<SuggestedContent>} [args.content]
   * @param {Array<SuggestedProduct>} [args.products]
   * @param {Array<SuggestedPhrase>} [args.suggested_phrases]
   * @param {Array<SuggestedTerms>} [args.suggested_terms]
   */
  constructor(args = {}) {
    /** @type {String[]} */
    this._brands = args.brands || [];
    /** @type {String[]} */
    this._customSuggestions = args.custom_suggestions || [];

    /** @type {SuggestedCategory[]} */
    this._categories = args.categories ?
      args.categories.map(cat => {
        return new SuggestedCategory(cat);
      }) : [];

    /** @type {SuggestedContent[]} */
    this._content = args.content ?
      args.content.map(content => {
        return new SuggestedContent(content);
      }) : [];

    /** @type {SuggestedProduct[]} */
    this._products = args.products ?
      args.products.map(product => {
        return new SuggestedProduct(product);
      }) : [];

    /** @type {SuggestedPhrase[]} */
    this._suggestedPhrases = args.suggested_phrases ?
      args.suggested_phrases.map(phrase => {
        return new SuggestedPhrase(phrase);
      }) : [];

    /** @type {SuggestedTerms[]} */
    this._suggestedTerms = args.suggested_terms ?
      args.suggested_terms.map(term => {
        return new SuggestedTerms(term);
      }) : [];
  }

  /* Class Modifiers / Accessors
     ======================================================================== */
  get brands() { return this._brands }
  set brands(value) { this._brands = value }
  get categories() { return this._categories }
  set categories(value) { this._categories = value }
  get content() { return this._content }
  set content(value) { this._content = value }
  get customSuggestions() { return this._customSuggestions }
  set customSuggestions(value) { this._customSuggestions = value }
  get products() { return this._products }
  set products(value) { this._products = value }
  get suggestedContent() { return this._suggestedContent }
  set suggestedContent(value) { this._suggestedContent = value }
  get suggestedPhrases() { return this._suggestedPhrases }
  set suggestedPhrases(value) { this._suggestedPhrases = value }
  get suggestedTerms() { return this._suggestedTerms }
  set suggestedTerms(value) { this._suggestedTerms = value }
}