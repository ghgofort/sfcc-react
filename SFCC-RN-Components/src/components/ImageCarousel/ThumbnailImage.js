/**
 * @file ThumbnailImage.js
 * A Component that holds a thumnail image.
 */

import React, { Component } from 'react';
import {  View, Text, Image, TouchableHighlight } from 'react-native';

export default class ThumbnailImage extends Component {
  /**
   *
   * @param {Object} props
   * @param {string} [props.src] - The URI
   */
  constructor(props) {
    // Get the missing image reference.
    this.missingImgURI = '../../../../../assets/images/missing_img.png';


    this.state = {
      src: props.src || require(this.missingImgURI),
      title: props.title || '',
      alt: props.alt || '',
      isActive: props.isActive || false,
      isDisabled: props.isDisabled || false
    };
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState((prevState, nextProps) => ({
      src: nextProps.src && nextProps.src !== prevState.src ?
        nextProps.src : prevState.src,
      title: nextProps.title && nextProps.title !== prevState.title ?
        nextProps.title : prevState.title,
      alt: nextProps.alt && nextProps.alt !== prevState.alt ?
        nextProps.alt : prevState.alt,
      isActive : nextProps.isActive &&
        nextProps.isActive !== prevState.isActive ?
        nextProps.isActive : prevState.isActive,
      isDisabled : nextProps.isDisabled &&
      nextProps.isDisabled !== prevState.isDisabled ?
      nextProps.isDisabled : prevState.isDisabled
    }));
  }

  _thumbnailSelected(e) {

  }

  render() {
    return (
      <View>
        <Text>  </Text>
        <TouchableHighlight onPress={this._thumbnailSelected.bind(this)}>
          <Image
            style={{
              width: 75,
              height: 100
            }}
            source={this.state.src}/>
        </TouchableHighlight>
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


