/**
 * @file ProductCategoryTree.js
 * The ProductCatagoryTree file is a React Native component used as part of the
 * Navbar component, but could be adopted for use in other places in the app if
 * needed.
 */

import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import PropTypes from 'prop-types';
import { MenuCatagory } from "./MenuCatagory";

export default class ProductCategoryTree extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      catagories: props.catagories || []
    };
  };

  _renderCatagory() {

  }

  /**
   * Loops through each top level catagory, and then recursivly calls renderCatagory
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


