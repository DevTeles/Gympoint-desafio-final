import { combineReducers } from 'redux';

import auth from './auth/reducer';
import checkin from './checkin/reducer';
import helpOrder from './helpOrder/reducer';

export default combineReducers({
  auth,
  checkin,
  helpOrder,
});
