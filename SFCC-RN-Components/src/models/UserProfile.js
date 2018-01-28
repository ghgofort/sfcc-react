'use strict';

/**
 * UserProfile.js
 * Data model class to define the structure of the user profile object.
 */


export default class UserProfile {

  constructor(params) {
    // Ititiate any parameter fields that were passed to the constructor.
    this.address = {
      city: params && params.city ? params.city : '',
      state: params && params.state ? params.state : '',
    }
    this.fName = params && params.firstName ? params.firstName : '';
    this.lName = params && params.lastName ? params.lastName : '';

    this.imageLoc = '';
  }

  // User home city.
  get city() {return this.city;}
  set city(city) {this.city = city;}
  // User first name
  get firstName() {return this.fName;}
  set firstName(firstName) {this.fName = firstName;}
  // Last name
  get lastName() {return this.lName;}
  set lastName(lastName) {this.lName = lastName;}
}
