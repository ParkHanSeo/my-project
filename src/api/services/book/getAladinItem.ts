import axios from "axios";
import { AladinItemReqeust } from "@/models/api/book/AladinItemReqeust";
import { AladinItemResponse } from "@/models/api/book/AladinItemResponse";
import { aladinDetailApi } from "@/api/aladinApi";
import { error } from "console";

export async function getAladinItem(
    request: AladinItemReqeust
): Promise<AladinItemResponse> {
    const req = {
        TTBKey: process.env.NEXT_PUBLIC_ALADIN_TTBKEY,
        itemIdType: 'ISBN',
        ItemId: request.ItemId,
        output: 'js',
        Version: 20131101,
        Cover: 'Big',
        OptResult: 'ebookList,usedList,reviewList',
    };
    return aladinDetailApi.getItem('/ttb/api/ItemLookUp.aspx', req)
        .then(response => (response))
        .catch();
}