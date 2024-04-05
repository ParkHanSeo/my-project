import { NextPage } from 'next';
import styles from './Intro.module.scss';
import { FirstSection } from './FirstSection/FirstSection';
import { SecondSection } from './SecondSection/SecondSection';
import { getAladinItemList } from '@/api/services/book/getAladinItemList';
import { AladinItemListRequest } from '@/models/api/book/AladinItemListRequest';
import { AladinItemListResponse } from '@/models/api/book/AladinItemListResponse';

const Intro: NextPage = () => {

    const testClickHandle = async () => {
        const req: AladinItemListRequest = {
            QueryType: 'ItemNewAll',
            Version: 20131101,
            SearchTarget: 'Book',
        }
        const res: AladinItemListResponse = await getAladinItemList(req);
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