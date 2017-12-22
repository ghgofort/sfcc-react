/**
 * @class OCAPICallInfo
 * @classdesc Class with properties for passing arguments to to the OCAPIService._fetchData
 *    call in order to make a call to the Open Commerce API.
 *
 */
export default class OCAPICallInfo {
  /**
   * Creates an instance of OCAPICallInfo.
   *
   * @memberof OCAPICallInfo
   * @constructor
   */
  constructor(args) {
    /** @type {function} */
    this._apiCallFunction = args && args.apiCallFunction ? args.apiCallFunction : null;
    /** @type {string} */
    this._httpVerb = args && args.httpVerb ? args.httpVerb : '';
    /** @type {string} */
    this._endpoint = args && args.endpoint ? args.endpoint : '';
    /** @type {object} */
    this._body = args && args.body ? args.body : {};
    /** @type {object} */
    this._headers = args && args.headers ? args.headers : {};
    /** @type {boolean} */
    this._error = args && args.error ? args.error : false;
    /** @type {string} */
    this._errMsg = args && args.errMsg ? args.errMsg : 'ERROR in OCAPIService at setupCall';
  }

  /*  ========================================================================
   *    Public Class Members
   *  ========================================================================*/


   /*  ========  Class Member Accessors and Mutators  =======  */

   get apiCallFunction() {return this._apiCallFunction;}
   get httpVerb() {return this._httpVerb;}
   get endpoint() {return this._endpoint;}
   get body() {return this._body;}
   get headers() {return this._headers;}
   get error() {return this._error;}
   get errMsg() {return this._errMsg;}

   set apiCallFunction(value) {this._apiCallFunction = value;}
   set httpVerb(value) {this._httpVerb = value;}
   set endpoint(value) {this._endpoint = value;}
   set body(value) {this._body = value;}
   set headers(value) {this._headers = value;}
   set error(value) {this._error = value;}
   set errMsg(value) {this._errMsg = value;}
}
