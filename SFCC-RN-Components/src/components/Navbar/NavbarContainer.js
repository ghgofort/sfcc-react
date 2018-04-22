/**
 * NavbarContainer.js
 * Container component for handling lifecycle events for the component lifecycle,
 * and connecting the component to the application state.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../SFCC/Category/ProductCategoryTree/actions';
import * as actionCreators from '../UserAccount/actions';
import Navbar from './Navbar';
import MenuCategory from '../SFCC/Category/ProductCategoryTree/MenuCategory';
import { getProfile, getCategoryTree } from '../../reducers/rootReducer';

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
    categoryActions: bindActionCreators(categoryActions, dispatch)
  };
};

const mapStateToProps = (state) => {
  let menuItems = [{id: 'home', title: 'yesir'}];
  const catTree = getCategoryTree(state).categories;

  // If categories were returned from the API call, then add these to the
  // menuItems array.
  if (catTree && catTree.length) {
    catTree.forEach(cat => {
      menuItems.push({
        renderProps: () => (
          <MenuCategory
            menuLevel={1}
            category={cat}
            key={cat.ID}
          />
        )
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
