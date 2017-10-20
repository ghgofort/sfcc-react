/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Router, Scene, ActionConst, Actions} from 'react-native-router-flux';
import {Provider, connect} from 'react-redux';
import HomeContainer from './jsx/components/Home/HomeContainer';
import configureStore from './jsx/configureStore';

const RouterWithRedux = connect()(Router);
const store = configureStore();

const Scenes = Actions.create(
<Scene key='root'>
  <Scene key='home' component={HomeContainer} title='SFCC Home Page' initial>
  </Scene>
</Scene>
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={Scenes}>
        </RouterWithRedux>
      </Provider>
    );
  }
}
