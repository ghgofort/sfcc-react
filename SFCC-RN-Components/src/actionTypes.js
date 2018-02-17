/**
 * actionTypes.js
 * Define action types for non-navigation actions that need to be emitted
 * in order to update the state of the application.
 */

/******** OTHER ACTION TYPES **********/
export const SCENE_TRANSITION = 'sceneTransition';

/******** ACTION CONSTANTS FOR THE USER'S PROFILE **********/
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const REQUEST_LOAD_PROFILE = 'REQUEST_LOAD_PROFILE';
export const RECEIVED_LOAD_PROFILE = 'RECEIVED_LOAD_PROFILE';
export const FAILED_LOAD_PROFILE = 'FAILED_LOAD_PROFILE';

export const REQUEST_SAVE_PROFILE = 'REQUEST_SAVE_PROFILE';
export const RECEIVED_SAVE_PROFILE = 'RECEIVED_SAVE_PROFILE';
export const FAILED_SAVE_PROFILE = 'FAILED_SAVE_PROFILE';

/******** ACTION CONSTANTS FOR PRODUCT REQUESTS **********/
export const REQUEST_RESOURCE_PRODUCT_BY_ID = 'REQUEST_RESOURCE_PRODUCT_BY_ID';
export const RECEIVED_RESOURCE_PRODUCT_BY_ID = 'RECEIVED_RESOURCE_PRODUCT_BY_ID';
export const FAILED_RESOURCE_PRODUCT_BY_ID = 'FAILED_RESOURCE_PRODUCT_BY_ID';

export const REQUEST_RESOURCE_PRODUCT_IMAGES = 'REQUEST_RESOURCE_PRODUCT_IMAGES';
export const RECEIVED_RESOURCE_PRODUCT_IMAGES = 'RECEIVED_RESOURCE_PRODUCT_IMAGES';
export const FAILED_RESOURCE_PRODUCT_IMAGES = 'FAILED_RESOURCE_PRODUCT_IMAGES';

/******** ACTION CONSTANTS FOR Catagory REQUESTS **********/
export const REQUEST_RESOURCE_CATAGORY_BY_ID = 'REQUEST_RESOURCE_CATAGORY_BY_ID';
export const RECEIVED_RESOURCE_CATAGORY_BY_ID = 'RECEIVED_RESOURCE_CATAGORY_BY_ID';
export const FAILED_RESOURCE_CATAGORY_BY_ID = 'FAILED_RESOURCE_CATAGORY_BY_ID';
