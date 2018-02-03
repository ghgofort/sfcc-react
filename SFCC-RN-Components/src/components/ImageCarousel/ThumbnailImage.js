/**
 * @file ThumbnailImage.js
 * A Stateless function component that holds a thumnail image.
 */

import React, { Component } from 'react';
import {  View, Image, TouchableHighlight } from 'react-native';

const ThumbnailImage = (props) => {
  const imgSrc = props.src;

  return (
    <View
      style={{
        width: 55,
        height: 75
      }}
    >
      <TouchableHighlight onPress={props.thumbnailSelected}>
        <Image
          style={{
            width: 55,
            height: 75,
          }}
          source={props.src}/>
      </TouchableHighlight>
    </View>
  );
};

export default ThumbnailImage = ThumbnailImage;


