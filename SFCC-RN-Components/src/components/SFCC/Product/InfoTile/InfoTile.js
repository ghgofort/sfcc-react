/**
 * InfoTile.js
 * An InfoTile instance is a visual componenet that represnts a product from a SFCC instance.
 */

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Routes from '../../../../menuItems';
import { connect } from 'react-redux';

class InfoTile extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      infoTile: {
        product: {
          id: 'test'
        }
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState, nextProps) => ({
      infoTile: {
        product: nextProps.infoTile.product
      }
    }));
  }

  /*************************************************
   * Private instance functions.
   *************************************************/
  _buttonPressed(e) {
    this.props.actions.requestProduct('1012046');
  }


  render() {
    return (
      <View>
        <Button onPress={this._buttonPressed.bind(this)}
        title="Push for record"
        color="#841584"/>

        <Text>
          {JSON.stringify(this.state.infoTile.product)}
        </Text>
      </View>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(InfoTile);
