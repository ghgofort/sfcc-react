/**
 * @file MenuCategory.js
 */

import React, { Component } from 'react';
import {
  Animated,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { navbarStyles, colors } from '../../../../styles/globalStyles';
import * as actions from './actions';

/**
 * Stateless functional component for rendering individual catagories in the
 * app hamburger menu (Navbar component).
 * @param {Object} props
 */
const MenuCategory = (props) => {
  const childMenuLevel = props.menuLevel + 1;
  const children = props.category &&
    props.category.categories &&
    props.category.categories.length ?
    props.category.categories.map((childCategory) => (
    <MenuCategory
      menuLevel={childMenuLevel}
      category={childCategory}
      key={childCategory.ID}
    />
    )) :
    [(<View key={'unique'}/>)];


  this.onSelect = (ID) => {
    console.log(ID);
    /**
     * @todo --> Navigate to the product list page for the selected category.
     */
  };

  return (
    <View key={props.category.ID}>
      <TouchableHighlight onPress={() => {
          this.onSelect(props.category.ID);
        }
      }>
        <View style={navbarStyles.item}>
          <Text style={[navbarStyles.topBorder, navbarStyles.lightText]}>
            {props.category.name}
          </Text>
        </View>
      </TouchableHighlight>
      <Animated.View>
        {children}
      </Animated.View>
    </View>
  );
};

export default MenuCategory = MenuCategory;
