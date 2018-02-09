import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import PropTypes from 'prop-types';

export default class ProductCategoryTree extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      catagories: props.catagories || []
    };
  };

  render() {
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
