'use strict';

/**
* @file Navbar.js
* @fileoverview - A Navbar component to hold the top navbar that will be included globaly
*     for all scenes in the app.
*/

import React, {Component} from 'react';
import {
  Easing,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
  Animated
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { updateProfile } from '../UserAccount/actions';
//import LeftButton from './leftbutton'
import { dispatch, connect } from 'react-redux';
import { appConfig } from '../../config/appConfig';
import { navbarStyles, colors } from '../../styles/globalStyles';

/**
 * @class
 * @description - A Hamburger style menu that allows for rendering of custom
 *    menu items as child components.
 */
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    /* Class property to disable buttons when animation is taking place. */
    this.isAnimating = false;

    const screenSize = Dimensions.get('window');
    const edge = screenSize.width - (screenSize.width * appConfig.sidebar.marginRight);

    this.state = {
      animator: new Animated.Value(-1 * edge),
      isOpen: false,
      width: screenSize.width,
      height: screenSize.height,
      edge: edge,
      topMenuHeight: 46,
      toggleTime: appConfig.sidebar.toggleTime,
      menuItems: props.menuItems,
      pageTitle: props.pageTitle
    };
  }

  /**
   * @function componentDidMount - React lifecycle method that is executed when
   *    this component is first rendered to the dom.
   */
  componentDidMount() {
    this.props.categoryActions.getCategory();
  }

  /**
   * @function componentWillReceiveProps - React lifecycle method used to pass
   *    in data from the application state.
   * @param {object} nextProps - The updated props object that is passed in from
   *    the component's container.
   */
  componentWillReceiveProps(nextProps) {
    this.setState((prevState, nextProps) => ({
      ...prevState,
      menuItems: nextProps.menuItems,
      pateTitle: nextProps.pageTitle
    }));
  }

  /**
  * @function _toggleSidebar
  * Toggle the sidebar menu.
  */
  _toggleSidebar() {
    if (!this.isAnimating) {
      this.setState((prevState, props) => ({
        isOpen: !prevState.isOpen
      }));

      /* Disable the hamburger button */
      this.isAnimating = true;
      this._animateSidebar(() => {
        this.forceUpdate();
      });
    }
  }

  /**
   * @function _menuItemSelect - Used to call an action creation method assigned
   *    to handle a click action on a menu item.
   * @param {object} item - An action creation method to call when the
   *    associated menu item is selcted.
   */
  _menuItemSelect(item) {
    Actions[item.id].apply();
  }

  /**
  * @function _animateSidebar - Animate the toggle of the sidebar menu.
  * @param {function callback() {}}
  */
  _animateSidebar(callback) {
    /* Set the current value for the open/close animation */
    const animateValue = this.state.isOpen
      ? 0
      : (-1 * this.state.edge);
    this.state.animator.setValue(animateValue);

    /* Set the value we want to animate to */
    const newX = !this.state.isOpen
      ? 0
      : (-1 * this.state.edge);

    const animateConfig = {
      toValue: newX,
      duration: this.state.toggleTime,
      easing: Easing.linear
    };

    // Animate the opening and closing of the menu, and set the state to reflect the changes.
    Animated.timing(this.state.animator, {
      ...animateConfig
    },).start(() => {
      /* Enable the hamburger button. */
      this.isAnimating = false;
    });
  }

  /**
   * @function _handleLayoutChange - Event handler method to adjust rendering of
   *    the navbar component when the screen orientation of the host device is
   *    changed between landscape and portrait.
   * @param {Event} event - The Event object that is created when the action
   *    occurs.
   */
  _handleLayoutChange(event) {
    const layout = event.nativeEvent.layout;
    this.setState({
      height: layout.height,
      width: layout.width,
      edge: layout.width - (layout.width * appConfig.sidebar.marginRight)
    });
  }

  /**
  * @function _getSidebarOverlay - Creates an overlay for holding all of the controls
  *     that live in the sidebar control.
  * @return {React.Component}
  */
  _getSidebarOverlay() {
    const menuWidth = this.state.isOpen
      ? this.state.edge
      : 0;

    const mySidebar = this.state.menuItems.map((item) => {
      if (!item.renderProps) {
        return (
          <TouchableHighlight
            key={item.id} onPress={() => {
              this._toggleSidebar();
              this._menuItemSelect(item);
          }}>

            <View style={navbarStyles.item}>
              <Text style={[navbarStyles.topBorder, navbarStyles.lightText]}>
                {item.title}
              </Text>
            </View>

          </TouchableHighlight>
        );
      } else {
        return item.renderProps();
      }
    });

    return (
      <Animated.View style={[
        {
          transform: [
            {
              translateX: this.state.animator
            }
          ]
        }, {
          width: this.state.edge
        },
        navbarStyles.navbar
      ]}>
        {mySidebar}
      </Animated.View>
    );
  }

  /**
   * @function _updateProfile - Calls the action creator method to navigate to
   *    the user profile editor.
   */
  _updateProfile() {
    Actions['userAccount'].apply();
  }

  /**
  * @function render - Renders the custom function when a layout change is needed.
  * @return {React.Component}
  */
  render() {
    return (
      <View>
        <View style={{
          backgroundColor: '#09414D'
        }}>

          <View style={{
            width: this.state.width,
            height: 45,
            flexDirection:'row'
          }}>
            <TouchableHighlight onPress={this._toggleSidebar.bind(this)}>
              <Image
                style={navbarStyles.icon}
                source={require('../../../assets/images/hamburger_collapsed.png')}/>
            </TouchableHighlight>
            <Text style={{fontSize:20, color:colors.mercury, paddingLeft:5, flex: 3}}>{this.props.pageTitle}</Text>

            <TouchableHighlight onPress={this._updateProfile.bind(this)}>
              <Image
                style={navbarStyles.icon}
                source={require('../../../assets/images/profile_icon.png')}/>
            </TouchableHighlight>
          </View>

        </View>

        {this._getSidebarOverlay()}

        <View style={[
          navbarStyles.backLayer, {
            width: this.state.width,
            height: this.state.height - 46
          }
        ]}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(Navbar);
