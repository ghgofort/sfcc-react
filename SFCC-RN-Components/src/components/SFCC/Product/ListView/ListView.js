/**
 * @file ListView.js
 * @fileoverview - ListView component class for displaying a list of products
 * returned from a call to the Open Commerce API or cached from an earlier call
 * to the API.
 */

import { connect } from 'react-redux';
import {
  View,
  FlatList
} from 'react-native';
import ProductSearchParams from '../../../../lib/OCAPIHelpers/callParameters/ProductSearchParams';

/**
 * @class ListView
 * @classdesc Displays a flexible list of product tiles in different display
 *    formats for easier sorting, and browsing.
 */
class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /** @type {ProductSearchResult} */
      productSearchResult: new ProductSearchResult(),
      /** @type {ProductSearchParams} */
      productSearchParams: new ProductSearchParams()
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState, nextProps) => ({
      ...prevState,
      productSearchMap: nextProps.productSearchMap,
      productSearchResult:
        nextProps.productSearchMap.has(prevState.productSearchParams.getHash()) ?
        nextProps.productSearchMap.get(prevState.productSearchParams.getHash()) :
        new ProductSearchResult()
    }));
  }

  _getProductListItems() {
    let items;
    if (this.state.productSearchResult.hits.length) {
      items = (<FlatList
        data={this.state.productSearchResult.hits}
      />)
    } else {
      items = <View/>
    }
    const listItems = this.state.productSearchResult

    return listItems;
  }

  render() {
    return <View />;
  }
}

export default connect(({ routes }) => ({ routes }))(ListView);
