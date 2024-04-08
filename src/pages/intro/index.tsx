import { NextPage } from 'next';
import styles from './Intro.module.scss';
import { FirstSection } from './FirstSection/FirstSection';
import { SecondSection } from './SecondSection/SecondSection';
import { getAladinItemList } from '@/api/services/book/getAladinItemList';
import { AladinItemListRequest } from '@/models/api/book/AladinItemListRequest';
import { AladinItemListResponse } from '@/models/api/book/AladinItemListResponse';

const Intro: NextPage = () => {

    const testClickHandle = async () => {
        const res: AladinItemListResponse = await getAladinItemList();
        console.log(res);
    }

    return (
        <div>
            <button onClick={testClickHandle}>API</button>
            <FirstSection />
            <SecondSection />
        </div>
    )
}

export default Intro;