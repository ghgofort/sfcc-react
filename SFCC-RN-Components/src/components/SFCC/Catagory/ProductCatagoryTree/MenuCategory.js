/**
 * @file MenuCategory.js
 */

import React, { Component } from 'react';
import {  View, TouchableHighlight, StyleSheet } from 'react-native';


/**
 * Stateless functional component for rendering individual catagories in the
 * app hamburger menu (Navbar component).
 * @param {Object} props
 */
const MenuCategory = (props) => {
  const children = props.children && props.children.length ?
    props.children.map((childNode) => {
      const childMenuLevel = props.menuLevel + 1;
      return (
        <MenuCategory
          menuLevel={childMenuLevel}
          catName={childNode.name}
          children={childNode.children && childNode.children.length ? childNode.children : []}
          isCurrent={childNode.isCurrent}
          onSelect={props.onSelect}
          parentName={props.name}
        />
      );
    }) : <View/>;

  return (
    <View>
      <TouchableHighlight onPress={props.onSelect}>
        <Text>
          {props.name}
        </Text>
      </TouchableHighlight>
      {children}
    </View>
  );
};

MenuCategory.popTypes = {
  catName: PropTypes.string,
  children: PropTypes.node,
  isCurrent: PropTypes.bool.isRequired,
  menuLevel: PropTypes.number,
  onSelect: PropTypes.func.isRequired
  parentName: PropTypes.string,
};

export default MenuCategory = MenuCategory;
