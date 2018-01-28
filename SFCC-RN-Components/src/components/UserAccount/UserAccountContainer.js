/**
 * UserAccountContainer.js
 * Container component for handling lifecycle events for the component lifecycle,
 * and connecting the component to the application state.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';
import UserAccount from './UserAccount';
import { getNavigation, getProfile } from '../../reducers/rootReducer';

const mapStateToProps = (state) => {
  console.log('isEdit: ' + state.profileReducer.isEdit);
  return {
    isEdit: state.profileReducer.isEdit,
    userProfile: state.profileReducer.userProfile,
    profileLoadError: state.profileReducer.profileLoadError,
    profileSaveError: state.profileReducer.profileSaveError,
    isLoadingProfile: state.profileReducer.isLoadingProfile,
    isSavingProfile: state.profileReducer.isSavingProfile
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

const UserAccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAccount);

export default UserAccountContainer;
