import { get, post } from '../utils/request';
import baseUrl from "../config/config";

const url = baseUrl + '/goodsService';

export function getGoodsList(params) {
    const requestUrl = url + "/getGoodsList?type=" + params;
    return get(requestUrl, params);
}