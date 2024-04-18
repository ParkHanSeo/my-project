import { ApiRequest } from "@/models/api/ApiRequest";

export interface AladinUsedItemShopRequest extends ApiRequest {
    TTBKey?: string;
    ItemId?: string | number;
    ItemIdType?: string;
}