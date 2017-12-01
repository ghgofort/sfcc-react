import {
  REQUEST_SAVE_PROFILE,
  RECEIVED_SAVE_PROFILE,
  FAILED_SAVE_PROFILE,
  REQUEST_LOAD_PROFILE,
  RECEIVED_LOAD_PROFILE,
  FAILED_LOAD_PROFILE,
  UPDATE_PROFILE
} from '../../actionTypes';
import ReduxThunk from 'redux-thunk';
import {Actions} from 'react-native-router-flux';
import DeviceStorageService from '../../services/deviceStorage/DeviceStorageService';
import { dispatch } from 'react-redux';

/* ========================================================================== *
 * Async Action Creators
 * ========================================================================== */

export const saveProfile = (user) => {
  return (dispatch) => {
    const svc = new AsyncStorageService();

    // Dispatch notification that a save is taking place.
    dispatch(requestSaveProfile);

    // Write the updated profile to the service.
    const wrPromise = svc.write(['profile', stuent]);

    // Handle Promise resolve and fails.
    wrPromise.then((res) => {
      dispatch(recievedSaveProfile(user));
    }, (error) => {
      dispatch(failedSaveProfile(error));
    });
  }
};

/* ========================================================================== *
 * Synchronous Action Creators
 * ========================================================================== */


export const requestSaveProfile = (user) => {
  return {
    type: REQUEST_SAVE_PROFILE,
    user: user
  }
}

export const updateProfile = () => {
  return {
    type: UPDATE_PROFILE
  }
};

export const recievedSaveProfile = (user) => {

}

export const failedSaveProfile = (user) => {

}
