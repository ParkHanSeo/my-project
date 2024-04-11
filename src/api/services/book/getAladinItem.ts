import axios from "axios";
import { AladinItemReqeust } from "@/models/api/book/AladinItemReqeust";
import { AladinItemResponse } from "@/models/api/book/AladinItemListResponse";

export async function getAladinItem (
    reqeust: AladinItemReqeust
): Promise<AladinItemResponse> {
    const data = axios.create({
        baseURL: 'http://localhost:3001',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }, 
    });
    const req = {
        TTBKey: process.env.NEXT_PUBLIC_ALADIN_TTBKEY,
        ItemId: reqeust.ItemId
    }
    return data.get('/getBook', { params: req });
}