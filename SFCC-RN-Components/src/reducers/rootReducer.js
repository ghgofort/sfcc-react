import {combineReducers} from 'redux';
import homeReducer, * as fromHome from './homeReducer';
import infoTileReducer, * as fromInfoTile from './infoTileReducer';
import userAccountReducer, * as fromUserAccount from './userAccountReducer';

export default rootReducer = combineReducers({
  homeReducer,
  infoTileReducer,
  userAccountReducer
});

/**
 * Export the different states from each reducer so that these will be accessible through out
 * the global scope of the application.
 *
 * Example:
 *  export const getNavigation = state => fromNavigation.getNavigation(state.navigationReducer);
 */
export const getHome = state => fromHome.getHome(state.homeReducer);
export const getInfoTileProduct = (state) => fromInfoTile.getInfoTileProduct(state.infoTileReducer);
export const getImageURL = (state) => fromInfoTile.getImageURL(state.infoTileReducer);
