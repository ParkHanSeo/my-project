import { NextPage } from 'next';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { getAladinItemList } from '@/api/services/book/getAladinItemList';
import { AladinItemResponse } from '@/models/api/book/AladinItemResponse';
import { IntroHome } from '@/components/pages/IntroHome/IntroHome';

type Props = {
    bannerBookList: AladinItemResponse;
}

const Intro: NextPage = () => {
    const router = useRouter();
    const [props, setProps] = useState<Props>();

    const load = useCallback(async () => {
        setProps(undefined);
        try {
            const bookList = await getAladinItemList();
            const props = {
                bannerBookList: bookList
            }
            setProps(props);
        } catch {

        }
    }, []);

    useEffect(() => {
        if(router.isReady) {
            load();
        }
    }, [load, router.isReady]);

    return (
        <IntroHome bannerBookList={props?.bannerBookList}/>
    )
}

export default Intro;