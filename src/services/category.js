import { get, post } from '../utils/request';
import baseUrl from "../config/config";

const url = baseUrl + '/categoryService';

export function getCategoryList(params) {
    const requestUrl = url + "/getCategoryList?type=" + params;
    return get(requestUrl, params);
}