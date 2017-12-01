/**
 * @file configureStore.js
 * @author Galen Goforth -- galengoforth@gmail.com
 * @desc This is used to set the options for the store in order to set the setup
 *       the state of the app., and to apply middleware to any calls that are being
 *       emitted to the store.
 */

import {createStore, applyMiddleware, compose} from 'redux';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import devToolsEnhancer from 'remote-redux-devtools';

/**
 * Configure the options for the store.
 * @param  {Object} initialState - The initial app state when the store instance
 *                                 is created.
 * @return {Store}
 */
export default function configureStore(initialState: any = undefined) {
  const logger = createLogger();

  /* Apply middleware here */
  const enhancer = compose(applyMiddleware(promise, thunk, logger));

  return createStore(rootReducer, initialState, enhancer);
}
