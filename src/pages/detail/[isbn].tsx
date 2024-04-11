import { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import { SharedOptionalQuery } from './[isbn].types';
import { getParams } from './[isbn].utils'; 
import { useRouter } from "next/router";
import { getAladinItem } from '@/api/services/book/getAladinItem';
import { AladinItemReqeust } from '@/models/api/book/AladinItemReqeust';
import { AladinItemResponse } from '@/models/api/book/AladinItemListResponse';

export type OptionalQuery = SharedOptionalQuery;

type Props = {
    book: AladinItemResponse;
}

const BookDetailPage: NextPage = () => {
    const router = useRouter();
    const [props, setProps] = useState<Props>();
    
    const load = useCallback(async () => {
        setProps(undefined);
        try {
            const { isbn } = getParams(router.query);
            const requestData: AladinItemReqeust = {
                ItemId: isbn
            }
            const book = await getAladinItem(requestData);
            const props = {
                book: book
            }
            setProps(props);
        } catch {

        }
    },[])

    useEffect(() => {
        if(router.isReady) {
            load();
        }
    }, [load, router.isReady])

    return (
        <div>
            Check
        </div>
    )
}

export default BookDetailPage;