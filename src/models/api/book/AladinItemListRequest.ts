import { ApiRequest } from "@/models/api/ApiRequest";

export interface AladinItemListRequest extends ApiRequest {
    TTBKey?: string
    QueryType?: string
    SearchTarget?: string
    SubSearchTarget?: string
    Start?: number
    MaxResults?: number
    Cover?: string
    CategoryId?: number
    Output?: string
    Partner?: string
    includeKey?: number
    InputEncoding?: string
    Version?: number
    outofStockfilter?: number
    Year?: number
    Month?: number
    Week?: number
    OptResult?: []
}