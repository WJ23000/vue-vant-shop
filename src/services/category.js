import { get, post } from '@/utils/request';
import requestUrl from "@/utils/commonUrl";

const baseUrl = requestUrl.testUrl;

export function getCategoryList(params) {
    const url = 'static/data/category.json?type=' + params;
    return get(url, params);
}


