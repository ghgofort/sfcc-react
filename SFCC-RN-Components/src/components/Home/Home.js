/**
 * @file Home.jsx
 * @author Galen Goforth  --  galengoforth@gmail.com
 * @desc A home page example that utilizes the SFCC React Native API and
 *       the included set of components to show SFCC Business Manager
 *       created content sections.
 */

import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Routes from '../../menuItems';
import NavbarContainer from '../Navbar/NavbarContainer';
import InfoTileContainer from '../SFCC/Product/InfoTile/InfoTileContainer';
import InfoTile from '../SFCC/Product/InfoTile/InfoTile';

const screenSize = Dimensions.get('window');


class Home extends Component {
  constructor(props) {
    super(props);
    const screenSize = Dimensions.get('window');

    this.state = {
      width: screenSize.width,
      height: screenSize.height,
      routes: Routes
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState, nextProps) => {
      // Recieve props from other components.
    });
  }

  render() {
    return (
      <View style={[
        {
          width: this.state.width,
          height: this.state.height
        },
        homeStyles.mainView]}>
        <NavbarContainer key='navbarHome' pageTitle='Home' menuItems={this.state.routes}>
        <InfoTileContainer key='info' height={this.state.height - 46} width={this.state.width}></InfoTileContainer>
        </NavbarContainer>
      </View>
    );
  }
}

const homeStyles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    backgroundColor: '#cccccc'
  }
});

export default connect(({routes}) => ({routes}))(Home);
