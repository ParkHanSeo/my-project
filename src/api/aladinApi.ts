import {
	AxiosError,
	AxiosRequestHeaders,
	AxiosResponse,
	CancelToken,
} from 'axios';
import { 
    AladinItemReqeust,
    AladinItemListRequest,
    AladinItemResponse,
    AladinItemListResponse,
    AladinUsedItemShopRequest,
    AladinUsedItemShopResponse
} from '@/models/api/index';
import { createAxios } from '@/api/utils/createAxios';

/** request timeout (ms) */
const timeout = 10000;

const aladinUrl = "https://www.aladin.co.kr";
const aladinApiBaseUrl = `${aladinUrl}/ttb/api/ItemList.aspx`;
const aladinApiSearchUrl = `${aladinUrl}/ttb/api/ItemSearch.aspx`;
const aladinApiLookUpUrl = `${aladinUrl}/ttb/api/ItemLookUp.aspx`;
const aladinApiOffStoreUrl = `${aladinUrl}/ttb/api/ItemOffStoreList.aspx`;

const generateApi = (type: 'bestseller' | 'detail' | 'search' | 'shop') => {
    const $axios = createAxios(
		{
			timeout
		},
		{ shouldSendApiLog: true }
	);

    async function getItem<
       T extends AladinItemReqeust,
       R extends AladinItemResponse,
    >(url: string, request?: T): Promise<R> {
        let originUrl = getAladinUrl(type);
        return $axios.get(url, {
            baseURL: 'http://localhost:3001',
            params: {
                ...request,
            },
            data: {
                originUrl: originUrl,
            }
        })
        .then(response => response.data);
    }

    async function getItemList<
        T extends AladinItemListRequest,
        R extends AladinItemListResponse,
    >(url: string, request?: T): Promise<R> {
        let originUrl = getAladinUrl(type);
        
        return $axios.get(url, {
            baseURL: 'http://localhost:3001',
            params: {
                ...request,
            },
            data: {
                originUrl: originUrl,
            }
        })
        .then(response => response.data);
    }

    async function getUsedItemShopList<
        T extends AladinUsedItemShopRequest,
        R extends AladinUsedItemShopResponse,
    >(url: string, request?: T): Promise<R> {
        let originUrl = getAladinUrl(type);

        return $axios.get(url, {
            baseURL: 'http://localhost:3001',
            params: {
                ...request,
            },
            data: {
                originUrl: originUrl,
            }
        })
        .then(response => response.data);
    }

    return { getItem, getItemList, getUsedItemShopList };
}

const getAladinUrl = (type: string) => {
    if(type === 'bestseller') {
        return aladinApiBaseUrl;
    } else if(type === 'detail') {
        return aladinApiLookUpUrl;
    } else if(type === 'search') {
        return aladinApiSearchUrl;
    } else if(type === 'shop') {
        return aladinApiOffStoreUrl;
    }
}

export const aladinDetailApi = generateApi('detail');

export const aladinSearchApi = generateApi('search');

export const aladinBestsellerApi = generateApi('bestseller');

export const aladinUsedItemShopApi = generateApi('shop');