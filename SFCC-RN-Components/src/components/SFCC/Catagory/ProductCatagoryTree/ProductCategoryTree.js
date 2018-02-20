/**
 * @file ProductCategoryTree.js
 * The ProductCategoryTree file is a React Native component used as part of the
 * Navbar component, but could be adopted for use in other places in the app if
 * needed.
 */

import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import PropTypes from 'prop-types';
import { MenuCategory } from "./MenuCategory";

export default class ProductCategoryTree extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      catagories: props.catagories || []
    };
  };

  _renderCategory() {

  }

  /**
   * Loops through each top level category, and then recursivly calls renderCategory
   * to fill in all of the child catagories.
   */
  _renderCatagories() {
    const cats = this.state.catagories;

  }

  render() {
    const cats = this._renderCatagories();

    return (
      <View>
        <Text> </Text>
      </View>
    );
  }
}

ProductCategoryTree.propTypes = {
  catagories: PropTypes.array
};


