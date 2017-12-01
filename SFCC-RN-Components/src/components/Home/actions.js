/**
 * home/actions.js
 * Action creation methods for actions that occur in the Home scene of the app.
 */

import * as actionTypes from '../../actionTypes';
import {getLogin} from '../../reducers/rootReducer';
import {Actions} from 'react-native-router-flux';

// Action creators
export const home = () => {
  return {type: actionTypes.SCENE_TRANSITION};
};
