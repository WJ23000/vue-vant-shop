import { get, post } from '../utils/request';
import baseUrl from "../config/config";

const url = baseUrl + '/userService';

export function getUserInfo(params) {
    const requestUrl = url + "/getUserInfo?type=" + params;
    return get(requestUrl, params);
}