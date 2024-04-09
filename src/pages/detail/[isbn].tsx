import { NextPage } from 'next';
import { useCallback, useEffect } from 'react';
import { SharedOptionalQuery } from './[isbn].types';
import { getParams } from './[isbn].utils'; 
import { useRouter } from "next/router";

export type OptionalQuery = SharedOptionalQuery;

const BookDetailPage: NextPage = () => {
    const router = useRouter();
    const { query } = router;
    
    const load = useCallback(async () => {
        const { isbn } = getParams(router.query);
    },[router])

    useEffect(() => {
        load();
    }, [load, router.isReady])

    return (
        <div>
            Check
        </div>
    )
}

export default BookDetailPage;