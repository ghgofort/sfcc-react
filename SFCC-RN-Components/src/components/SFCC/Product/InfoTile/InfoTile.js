/**
 * @file InfoTile.js
 * An InfoTile instance is a visual componenet that represnts a product from a SFCC instance.
 */

import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
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
    this.props = props;
    this.state = {
      infoTile: {
        product: {
          id: 'test'
        },
        imageURL: ''
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState, nextProps) => ({
      infoTile: {
        product: nextProps.infoTile.product,
        imgURL: nextProps.infoTile.imageURL
      }
    }));
  }

  /*************************************************
   * Private instance functions.
   *************************************************/
  _buttonPressed(e) {
    this.props.actions.requestImagesForProduct('1016786');
  }

  _setImageSrc() {
    if (this.state.infoTile.imgURL && this.state.infoTile.imgURL !== '') {
      return {uri: this.state.infoTile.imgURL};
    } else {
      return require('../../../../../assets/images/missing_img.png');
    }
  }

  render() {
    const prod = this.state.infoTile.product;

    if (
      prod.imageGroups &&
      prod.imageGroups.length &&
      prod.imageGroups[0].images.length &&
      prod.imageGroups[0].images[0].link
    ) {
      iSrc = prod.imageGroups[0].images[0].link;
      console.log(iSrc);
    }

    const srcObj = this._setImageSrc();
    console.log(srcObj);

    return (
      <View style={itStyles.container}>
        <View style={itStyles.buttonContainer}>
          <Button onPress={this._buttonPressed.bind(this)}
                  title="Push for record"
                  color="#841584"
          />
        </View>
        <View style={itStyles.productTitleContainer}>
          <Text style={itStyles.productTitle}>
            {this.state.infoTile.product._name}
          </Text>
        </View>
        <View style={itStyles.productTitleContainer}>
          <Text>Image</Text>
          <Image
            source={srcObj}
            style={{width: 400, height: 400}}
          />
        </View>

      </View>
    );
  }
}

const itStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#ececec'
  },
  productTitleContainer: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
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
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#65D0E5',
    margin: 12,
    borderWidth: 0,
    borderRadius: 8,
    paddingTop: 20,
    paddingBottom: 20
  }
});

export default connect(({ routes }) => ({ routes }))(InfoTile);
