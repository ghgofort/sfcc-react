/**
 * InfoFileContainer.js
 * A container component for the Product/InfoTile component which displays product
 * information from and SFCC instance.
 */

import {connect} from 'react-redux';
import * as actionCreators from './actions'
import {bindActionCreators} from 'redux';

const mapStateToProps = state => {
  return {
    product: 'productHere'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

const InfoTileContainer = connect(mapStateToProps, mapDispatchToProps)(InfoContainer);

export default InfoTileContainer;