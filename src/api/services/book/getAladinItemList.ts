import axios from "axios";
import { AladinItemListRequest } from "@/models/api/book/AladinItemListRequest";
import { AladinItemListResponse } from "@/models/api/book/AladinItemListResponse";

export async function getAladinItemList(
    request: AladinItemListRequest
): Promise<AladinItemListResponse> {
    const data = axios.create({
        baseURL: 'http://www.aladin.co.kr',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }, 
    });
    request.TTBKey = process.env.NEXT_PUBLIC_ALADIN_TTBKEY;
    return axios.get('/test', { params: request });
}