import axios from "axios";
import { AladinItemListRequest } from "@/models/api/book/AladinItemListRequest";
import { AladinItemListResponse } from "@/models/api/book/AladinItemListResponse";

export async function getAladinItemList(
    
): Promise<AladinItemListResponse> {
    const data = axios.create({
        baseURL: 'http://localhost:3001',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }, 
    });
    const req = {
        TTBKey: process.env.NEXT_PUBLIC_ALADIN_TTBKEY
    }
    return data.get('/bestseller', { params: req });
}