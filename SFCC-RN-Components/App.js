/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import configureStore from './src/configureStore';
import React, {Component} from 'react';
import {Router, Scene, ActionConst, Actions} from 'react-native-router-flux';
import {Provider, connect} from 'react-redux';
import HomeContainer from './src/components/Home/HomeContainer';
import InfoTileContainer from './src/components/SFCC/Product/InfoTile/InfoTileContainer';
import NavbarContainer from './src/components/Navbar/NavbarContainer';
import UserAccountContainer from './src/components/UserAccount/UserAccountContainer';

const RouterWithRedux = connect()(Router);
const store = configureStore();

const Scenes = Actions.create(
<Scene key='root'>
  <Scene key='home' component={HomeContainer} title='SFCC Home Page' initial>
    <Scene key='navbarHome' component={NavbarContainer} title=''/>
    <Scene key='infoTile' component={InfoTileContainer} title=''/>
  </Scene>
  <Scene key='userAccount' component={UserAccountContainer} title='User Account'>
  <Scene key='navbarHome' component={NavbarContainer} title=''/>
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
