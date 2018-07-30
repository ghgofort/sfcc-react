/**
 * @file ListViewContainer.js
 * @fileoverview - A wrapper for the ListView component which utilizes redux and
 * react lifecycle methods in order to interact with the application scoped
 * state object.
 */

import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { bindActionCreators } from 'redux';
// import { getInfoTileProduct, getImageURL } from '../../../../reducers/rootReducer';
import ListView from './ListView';

const mapStateToProps = state => {
  return {
    productSearchMap: state.productSearchMap
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

const ListViewContainer = connect(mapStateToProps, mapDispatchToProps)(ListView);

export default ListViewContainer;

