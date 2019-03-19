/**
 * utils
 * @Author: huangfs
 * @Date: 2018-10-27
 * @Project: cms
 */

import { getStorage, setStorage, removeStorage } from './storage';
import { timeFmt, timeFmtNext } from './time';
import { checkBankNo } from './bankno';
import { imageBeforeUpload } from './image';
import { error } from './error';
import { getDiffObj, Converter, objToArr, getUrlParams } from './data';
import { RegExp } from './regExp';
import { pushAliOss } from './aliOSS';

export {
  timeFmt,
  timeFmtNext,
  getStorage,
  setStorage,
  removeStorage,
  checkBankNo,
  imageBeforeUpload,
  error,
  getDiffObj,
  RegExp,
  Converter,
  objToArr,
  getUrlParams,
  pushAliOss
};
