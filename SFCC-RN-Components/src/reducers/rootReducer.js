import {combineReducers} from 'redux';
import homeReducer, * as fromHome from './homeReducer';

export default rootReducer = combineReducers({
  homeReducer
});

/**
 * Export the different states from each reducer so that these will be accessible through out
 * the global scope of the application.
 *
 * Example:
 *  export const getNavigation = state => fromNavigation.getNavigation(state.navigationReducer);
 */
export const getHome = state => fromHome.getHome(state.homeReducer);
