import { ApiResponse } from "@/models/api/ApiResponse";

export interface AladinUsedItemShopResponse extends ApiResponse {
    version?: number;
    link?: string;
    pubDate?: string;
    query?: string;
    itemOffStoreList: OffStoreListItem[];
}

export interface OffStoreListItem {
    offCode: string;
    offName: string;
    link: string;
}