/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Router, Scene, ActionConst, Actions} from 'react-native-router-flux';
import {Provider, connect} from 'react-redux';
import HomeContainer from './src/components/Home/HomeContainer';
import infoTileContainer from './src/components/SFCC/Product/InfoTile/InfoTileContainer';
import configureStore from './src/configureStore';
import NavbarContainer from './src/components/Navbar/NavbarContainer';

const RouterWithRedux = connect()(Router);
const store = configureStore();

const Scenes = Actions.create(
<Scene key='root'>
  <Scene key='home' component={HomeContainer} title='SFCC Home Page' initial>
    <Scene key='navbarHome' component={NavbarContainer} title=''/>
    <Scene key='infoTile' component={infoTileContainer} title=''/>
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
