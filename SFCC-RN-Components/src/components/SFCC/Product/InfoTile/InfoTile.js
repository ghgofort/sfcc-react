/**
 * @file InfoTile.js
 * An InfoTile instance is a visual componenet that represnts a product from a SFCC instance.
 */

import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions } from 'react-native';
import Routes from '../../../../menuItems';
import { connect } from 'react-redux';

/**
 * @class
 * @name InfoTile
 * @desc - React Native component that displays basic product information from a SFCC instance.
 */
class InfoTile extends Component {
  constructor(props) {
    super(props);
    const screenSize = Dimensions.get('window');
    this.props = props;
    this.state = {
      product: {
        id: 'test'
      },
      imageURL: '',
      height: props.height ? props.height : screenSize.height - 46,
      width: props.width ? props.width : screenSize.width
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState, nextProps) => ({
      product: nextProps.infoTile.product,
      imgURL: nextProps.infoTile.imageURL
    }));
  }

  /*************************************************
   * Private instance functions.
   *************************************************/
  _buttonPressed(e) {
    this.props.actions.requestImagesForProduct('1016786');
  }

  _setImageSrc() {
    if (this.state.imgURL && this.state.imgURL !== '') {
      return {uri: this.state.imgURL};
    } else {
      return require('../../../../../assets/images/missing_img.png');
    }
  }

  render() {
    const srcObj = this._setImageSrc();
    console.log('height:' + this.state.height);

    return (
      <View style={itStyles.container, {
        width: this.state.width,
        height: this.state.height
      }}>
        <View style={itStyles.buttonContainer}>
          <Button onPress={this._buttonPressed.bind(this)}
                  title="Push for record"
                  color="#841584"
          />
        </View>
        <View style={itStyles.productTitleContainer}>
          <Text style={itStyles.productTitle}>
            {this.state.product.name}
          </Text>
        </View>
        <View style={itStyles.productImageContainer}>
          <Image
            key={this.state.imgURL}
            source={srcObj}
            resizeMode='contain'
            style={{
              width: undefined,
              height: undefined,
              flex: 1,
              alignSelf: 'stretch'
            }}
          />
        </View>
        <View style={itStyles.productDetailsContainer}>
          <Text style={itStyles.productInfoField}>
            {this.state.product.shortDescription}
          </Text>
        </View>

      </View>
    );
  }
}

const itStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#ececec'
  },
  productTitleContainer: {
    flex: 0.35,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  productImageContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 10
  },
  productTitle: {
    fontSize: 26,
    textAlign: 'center'
  },
  productInfoField: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 5
  },
  button: {

  },
  buttonContainer: {
    flex: .3,
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#65D0E5',
    margin: 12,
    borderWidth: 0,
    borderRadius: 8,
    paddingTop: 20,
    paddingBottom: 20
  },
  productDetailsContainer: {
    flex: 2
  }
});

export default connect(({ routes }) => ({ routes }))(InfoTile);
