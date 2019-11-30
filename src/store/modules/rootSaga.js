import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import domains from './domains/sagas';

export default function* rootSaga() {
  return yield all([auth, domains]);
}
