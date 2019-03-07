/**
 * auApi
 * @Author: huangfs
 * @Date: 2018-11
 * @Project: cms
 */

import http from './http';

export default {
  signIn: params => http.post(`/manager/auth`, params), // 登录
  signOut: () => http.delete(`/manager/auth`), // 登出
  changePassword: params => http.patch(`/manager/auth/password`, params), //修改密码
  getUser: () => http.get(`/manager/auth`), //获取用户信息
}
