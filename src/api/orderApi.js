/**
 * orderApi
 * @Author: huangfs
 * @Date: 2018-11-02
 * @Project: web-manager
 */

import {C_API} from '../common/constants';
import http from "../api/http";

const order_url = `${C_API.PATH_NAME}/order`;

/**
 * 分页获取商品列表
 * @param params
 * @returns {Promise<{data: {status: number, data: {total: number, orders: *[]}}}>}
 */
const fetchOrderList = (params) => http.get(order_url, params);

export default {
  fetchOrderList,
}
