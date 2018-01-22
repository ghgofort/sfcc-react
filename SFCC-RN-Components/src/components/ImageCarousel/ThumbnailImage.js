/**
 * @file ThumbnailImage.js
 * A Component that holds a thumnail image.
 */

import React, { Component } from 'react';
import {  View, Text, Image } from 'react-native';

export default class ThumbnailImage extends Component {
  constructor(props) {
    this.state = {
      url: '',
      title: '',
      alt: ''
    };
  }



  render() {
    return (
      <View>
        <Text>  </Text>
      </View>
    );
  }
}

function ThumbnailTitle(props) {
  // @TODO: Add a generic missing resource icon file to display
  // when an image or other media resource is missing.
  const missingImageURI = '';
  if (props.url)
  return (
    <View>
      <Image></Image>
    <View>
  );
}


