import axios from "axios";
import { AladinItemListRequest } from "@/models/api/book/AladinItemListRequest";
import { AladinItemResponse } from "@/models/api/book/AladinItemResponse";
import { aladinBestsellerApi } from "@/api/aladinApi";

export async function getAladinItemList(
    
): Promise<AladinItemResponse> {
    const req = {
        TTBKey: process.env.NEXT_PUBLIC_ALADIN_TTBKEY,
        QueryType: 'Bestseller',
        MaxResults: 10,
        start: 1,
        SearchTarget: 'Book',
        output: 'js',
        Cover: 'Big',
        Version: 20131101,
    }

    return aladinBestsellerApi.getItemList('/ttb/api/ItemList.aspx', req)
        .then(response => (response))
        .catch();
}