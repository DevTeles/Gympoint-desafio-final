import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import checkin from './checkin/sagas';
import helpOrder from './helpOrder/sagas';

export default function* rootSaga() {
  return yield all([auth, checkin, helpOrder]);
}
