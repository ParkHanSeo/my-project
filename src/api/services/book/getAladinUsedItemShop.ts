import { AladinUsedItemShopRequest } from "@/models/api/book/AladinUsedItemShopRequest";
import { AladinUsedItemShopResponse } from "@/models/api/book/AladinUsedItemShopResponse";
import { aladinUsedItemShopApi } from "@/api/aladinApi";

export async function getAladinUsedItemShop(
    request: AladinUsedItemShopRequest
): Promise<AladinUsedItemShopResponse> {
    const req = {
        TTBKey: process.env.NEXT_PUBLIC_ALADIN_TTBKEY,
        itemIdType: 'ISBN',
        ItemId: request.ItemId, 
    };
    return aladinUsedItemShopApi.getItemList('', req);
}