import { get, post } from '@/utils/request';
import requestUrl from "@/utils/commonUrl";

const baseUrl = requestUrl.testUrl;

export function getUserInfo(params){
    const url = baseUrl + '/userInfo?id='+params;
    return get(url,params);
}

export function postUserInfo(params) {
    const url = baseUrl + '/userInfo';
    return get(url, params);
}

