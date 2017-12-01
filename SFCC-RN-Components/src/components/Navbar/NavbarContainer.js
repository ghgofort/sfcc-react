/**
 * NavbarContainer.js
 * Container component for handling lifecycle events for the component lifecycle,
 * and connecting the component to the application state.
 */
import { dispatch, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../studentProfile/actions';
import Navbar from './Navbar';
import { getNavigation, getProfile } from '../../reducers/rootReducer';

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

const navbarContainer = connect(mapDispatchToProps)(Navbar);

export default navbarContainer;
