import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { showDomainsSuccess, showDomainsFailure } from './actions';

export function* getDomains() {
  try {
    const { data } = yield call(api.get, '/domain');
    yield put(showDomainsSuccess({ data }));
  } catch (error) {
    yield put(showDomainsFailure());
  }
}

export default all([takeLatest('@domains/SHOW_DOMAINS_REQUEST', getDomains)]);
