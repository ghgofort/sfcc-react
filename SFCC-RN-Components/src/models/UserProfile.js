'use strict';

/**
 * UserProfile.js
 * Data model class to define the structure of the user profile object.
 */


export default class UserProfile {

  constructor(params) {
    // Ititiate any parameter fields that were passed to the constructor.
    this.address = {
      city: params && params.firstName ? params.firstName : '',
      state: params && params.state ? params.state : '',
    }
    this.fName = params && params.firstName ? params.firstName : '';
    this.lName = params && params.lastName ? params.lastName : '';

    this.imageLoc = '';
  }

  // User home city.
  getCity() {return this.city;}
  setCity(city) {this.city = city;}
  // User first name
  getFName() {return this.firstName;}
  setFName(fName) {this.firstName = fName;}
  // Last name
  getLName() {return this.lastName;}
  setLName(lName) {this.lastName = lName;}
}
