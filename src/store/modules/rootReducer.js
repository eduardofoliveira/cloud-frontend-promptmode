import { combineReducers } from 'redux';

import auth from './auth/reducer';
import domains from './domains/reducer';

export default combineReducers({ auth, domains });
