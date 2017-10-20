/**
 * @file Home.jsx
 * @author Galen Goforth  --  galengoforth@gmail.com
 * @desc A home page example that utilizes the SFCC React Native API and
 *       the included set of components to show SFCC Business Manager
 *       created content sections.
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Routes from '../../menuItems';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState, nextProps) => {
      user: this.props.user;
    });
  }



  render() {
    return (
      <View><Text>Hello World</Text></View>
    );
  }
}

export default connect(({routes}) => ({routes}))(Home);
