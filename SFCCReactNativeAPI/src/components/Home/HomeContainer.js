/**
 * home/index.js
 * Container for the CollegeTools component.
 */
import { dispatch, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home';
import * as actions from './actions';
import {getHome} from '../../reducers/rootReducer';

const mapStateToProps = state => {
  return {
    user: 'mario'
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
