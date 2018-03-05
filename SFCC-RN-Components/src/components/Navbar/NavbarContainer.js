/**
 * NavbarContainer.js
 * Container component for handling lifecycle events for the component lifecycle,
 * and connecting the component to the application state.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../SFCC/Category/ProductCategoryTree/actions';
import * as actionCreators from '../UserAccount/actions';
import Navbar from './Navbar';
import { getNavigation, getProfile, getCategoryTree } from '../../reducers/rootReducer';

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
    categoryActions: bindActionCreators(categoryActions, dispatch)
  };
};

const mapStateToProps = (state) => {
  let menuItems = [];
  const catTree = getCategoryTree(state).categories;

  if (catTree && catTree.length) {
    menuItems = catTree.map(cat => {
      return ({
        id: cat.ID,
        title: cat.name
      });
    });
  }

  return {
    menuItems: menuItems,
    pageTitle: 'hello'
  };
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
