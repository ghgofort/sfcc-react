/**
* homeReducer.js
* Used to handle changes in state for actions that affect the CollegeTools
* component.
*/

import * as actionTypes from '../actionTypes';

/**
* DEFAULT_STATE - Define a default state object in case on is not passed in.
* @type {Object}
*/
const DEFAULT_STATE = {sceneTransistion: false};

/**
* Reducer function for the Home scene
* @param  {Object} [state=DEFAULT_STATE] - The current state object for the app.
* @param  {Object} action                - The object holding the action information that was emmited.
* @return {Object}                       - The updated state object.
*/
export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case actionTypes.SCENE_TRANSITION:
      return {...state, onLogging: true};
    default:
      return state;
  }
}

// Selectors (mapStateToProps)
export const getHome = ({onLogging}) => ({
  onLogging
});
