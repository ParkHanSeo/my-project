import { ApiRequest } from "@/models/api/ApiRequest";

export interface AladinItemReqeust extends ApiRequest {
    TTBKey?: string;
    ItemId?: string | number;
    ItemIdType?: string;
    Cover?: string;
    Output?: string;
    Partner?: string;
    Version?: number;
    includeKey?: number;
    offCide?: string;
    OptResult?: string;
}