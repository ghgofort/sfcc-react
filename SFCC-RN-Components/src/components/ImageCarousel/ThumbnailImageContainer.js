import {connect} from 'react-redux';
import * as actionCreators from './actions';
import {bindActionCreators} from 'redux';
import ThumbnailImage from './ThumbnailImage';

const mapStateToProps = state => {
  return {
    /**
     * @todo - Map any changes in state to the nextProps parameter in the
     * 'ComponentWillRecieveProps' method of the ThumbnailImage component.
     */
  };
};

const mapDispatchToProps = dispatch=> {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

const ThumbnailImageContainer = connect(mapStateToProps, mapDispatchToProps)(ThumbnailImage);

export default ThumbnailImageContainer;