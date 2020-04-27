import { get, post } from '@/utils/request';
import requestUrl from "@/utils/commonUrl";

const baseUrl = requestUrl.testUrl;

export function getGoodsList(params) {
    const url = 'static/data/goods.json?type='+params;
    return get(url, params);
}


