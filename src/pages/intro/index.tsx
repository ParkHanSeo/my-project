import { NextPage } from 'next';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { FirstSection } from './FirstSection/FirstSection';
import { SecondSection } from './SecondSection/SecondSection';
import { StoryBookSection } from './StoryBookSection/StoryBookSection';
import { BestsellerSection } from './BestsellerSection/BestsellerSection';
import { getAladinItemList } from '@/api/services/book/getAladinItemList';
import { AladinItemResponse } from '@/models/api/book/AladinItemResponse';

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
        <div>
            <FirstSection />
            <SecondSection />
            <StoryBookSection />
            <BestsellerSection itemList={props?.bannerBookList.item || []}/>
        </div>
    )
}

export default Intro;