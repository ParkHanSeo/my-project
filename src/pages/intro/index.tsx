import { NextPage } from 'next';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import styles from './Intro.module.scss';
import { FirstSection } from './FirstSection/FirstSection';
import { SecondSection } from './SecondSection/SecondSection';
import { StoryBookSection } from './StoryBookSection/StoryBookSection';
import { BestsellerSection } from './BestsellerSection/BestsellerSection';
import { getAladinItemList } from '@/api/services/book/getAladinItemList';
import { AladinItemListResponse } from '@/models/api/book/AladinItemListResponse';

type Props = {
    bannerBookList: AladinItemListResponse;
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
        <div>
            <FirstSection />
            <SecondSection />
            <StoryBookSection />
            <BestsellerSection item={props?.bannerBookList.data.item || []}/>
        </div>
    )
}

export default Intro;