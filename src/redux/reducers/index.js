/**
 * index
 * @Author: huangfs
 * @Date: 2018-11-12
 * @Project: cms
 */

import { combineReducers } from 'redux';
import auth from './auth';
import env from './env';
import common from './common';

export default combineReducers({
  auth,
  env,
  common
});
