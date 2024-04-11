import axios from "axios";
import { AladinItemReqeust } from "@/models/api/book/AladinItemReqeust";
import { AladinItemResponse } from "@/models/api/book/AladinItemListResponse";
import { error } from "console";

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
    try {
        const res = await data.get('/getBook', { params: req });
        return res.data.item[0];
    } catch (error) {
        throw error;
    }
}