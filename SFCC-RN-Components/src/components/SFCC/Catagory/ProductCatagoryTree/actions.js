/**
 * @file ProductCategoryTree/actions.js
 * @fileoverview Provides redux action creation methods for propogating events
 * that need to modify the scope at a global level.
 */

import ReduxThunk from 'redux-thunk'
import { Actions } from 'react-native-router-flux';
import OCAPIService from '../../../../lib/OCAPIService/OCAPIService';
import {
  REQUEST_RESOURCE_CATEGORY_BY_ID,
  RECEIVED_RESOURCE_CATEGORY_BY_ID,
  FAILED_RESOURCE_CATEGORY_BY_ID
} from '../../../../actionTypes';