/**
 * @file ThumbnailImage.js
 * A Stateless function component that holds a thumnail image.
 */

import React, { Component } from 'react';
import {  View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ThumbnailImage = (props) => {
  const imgSrc = props.src ?
    props.src : require('../../../assets/images/missing_img.png');
  const imgStyle = !props.imgStyle ? tiStyles.imgStyle : props.imgStyle;
  const viewStyle = !props.viewStyle ? tiStyles.viewStyle : props.viewStyle;


  return (
    <View style={viewStyle}>
      <TouchableHighlight onPress={props.thumbnailSelected}>
        <Image
          style={imgStyle}
          source={props.src}/>
      </TouchableHighlight>
    </View>
  );
};

/**
 * Default styles if not passed in as props.
 */
const tiStyles = StyleSheet.create({
  imgStyle: {
    width: 55,
    height: 75,
    alignSelf: 'stretch'
  },
  viewStyle: {
    width: 65,
    height: 75,
    alignItems: 'stretch',
    padding: 5
  }
});

ThumbnailImage.propTypes = {
  thumbnailSelected: PropTypes.func.isRequired,
  src: PropTypes.object,
  imgStyle: PropTypes.any,
  viewStyle: PropTypes.any
};

export default ThumbnailImage = ThumbnailImage;


