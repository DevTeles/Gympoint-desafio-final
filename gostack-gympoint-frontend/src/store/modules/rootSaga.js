import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import student from './student/sagas';
import pack from './pack/sagas';
import enroll from './enroll/sagas';
import helpOrders from './helpOrders/sagas';

export default function* rootSaga() {
  return yield all([auth, user, student, pack, enroll, helpOrders]);
}
