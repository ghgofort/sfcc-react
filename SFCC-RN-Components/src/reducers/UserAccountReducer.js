/**
 * navigationReducer.js
 */

import * as actionTypes from '../actionTypes';
import UserProfile from '../models/UserProfile';

const DEFAULT_STATE = {
  isEdit: false,
  isLoadingProfile: false,
  isSavingProfile: false,
  userProfile: (new UserProfile()),
  profileLoadError: {},
  profileSaveError: {}
};

export default function profileReducer(state = DEFAULT_STATE, action = {}) {
  switch(action.type) {
    // focus action is dispatched when a new screen comes into focus
    case actionTypes.UPDATE_PROFILE:
      return {
        ...state,
        isEdit: true,
        isLoadingProfile: false,
        isSavingProfile: false,
        userProfile: action.userProfile
      }
    case actionTypes.REQUEST_LOAD_PROFILE:
      return {
        ...state,
        isLoadingProfile: true,
        isSavingProfile: false,
      }
    case actionTypes.RECEIVED_LOAD_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
        isLoadingProfile: false,
        isSavingProfile: false,
        profileLoadError: {},
        profileSaveError: {}
      }
    case actionTypes.FAILED_LOAD_PROFILE:
      return {
        ...state,
        isLoadingProfile: false,
        profileLoadError: {
          msg: 'An error occured while loading the user profile',
          errorCount: state.profileLoadError.errorCount + 1
        }
      }
    case actionTypes.REQUEST_SAVE_PROFILE:
      return {
        ...state,
        isSavingProfile: true,
        isLoadingProfile: false,
      }
    case actionTypes.RECEIVED_SAVE_PROFILE:
      return {
        ...state,
        isLoadingProfile: false,
        isSavingProfile: false,
        profileLoadError: {},
        profileSaveError: {}
      }
    case actionTypes.FAILED_SAVE_PROFILE:
      return {
        ...state,
        isSavingProfile: false,
        profileSaveError: {
          msg: 'An error occured while saving the user profile',
          errorCount: state.profileSaveError.errorCount + 1
        }
      }

    default:
      return state;
  }
}

// Selectors (mapStateToProps)
export const getProfile = ({onLogging}) => ({
  onLogging
});
