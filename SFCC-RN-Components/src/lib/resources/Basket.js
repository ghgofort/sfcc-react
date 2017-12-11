import OCAPIService from "../OCAPIService/OCAPIService";


/**
 * @class Basket
 * @classdesc Provides an OCAPI wrapper for interacting with the Basket resource type.
 */
export default class Basket {
  /**
   * @constructor
   */
  constructor(basketID) {
    this._service = new OCAPIService();

    if (basketID) {
      this.ID = basketID;
    }


  }

  /** ========================================================================
   *    Static Class Members
   *  ========================================================================*/


  /** ========================================================================
   *    Private Class Members
   *  ========================================================================*/


  /** ========================================================================
   *    Public Class Members
   *  ========================================================================*/

   getProductLineItems(shipment) {

   }

   getGiftCirtificateLineItems(shipment) {

   }

   getAllLineItems(shipment) {

   }

   getShipments() {

   }

   createShipment(shipmentID) {

   }

   getAppliedDiscounts() {

   }

   addProduct(productID, quantity) {

   }

   addGiftCertificatie(giftCertificateID) {

   }

}
