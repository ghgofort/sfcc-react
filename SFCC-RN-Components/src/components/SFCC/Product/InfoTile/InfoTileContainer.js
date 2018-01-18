/**
 * @file InfoFileContainer.js
 * A container component for the Product/InfoTile component which displays product
 * information from and SFCC instance.
 */

import {connect} from 'react-redux';
import * as actionCreators from './actions'
import {bindActionCreators} from 'redux';
import {getInfoTileProduct, getImageURL} from '../../../../reducers/rootReducer';
import InfoTile from './InfoTile';

const mapStateToProps = state => {
  return {
    infoTile: {
      product: getInfoTileProduct(state),
      imageURL: getImageURL(state)
    },

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

const InfoTileContainer = connect(mapStateToProps, mapDispatchToProps)(InfoTile);

export default InfoTileContainer;