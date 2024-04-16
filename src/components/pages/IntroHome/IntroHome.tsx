import styles from './IntroHome.module.scss';
import { FirstSection } from './FirstSection/FirstSection';
import { SecondSection } from './SecondSection/SecondSection';
import { StoryBookSection } from './StoryBookSection/StoryBookSection';
import { BestsellerSection } from './BestsellerSection/BestsellerSection';
import { AladinItemResponse } from '@/models/api/book/AladinItemResponse';

type Props = {
    bannerBookList?: AladinItemResponse;
}

export const IntroHome: React.FC<Props> = ({
    bannerBookList
}) => {
    return (
        <div>
            <FirstSection />
            <SecondSection />
            <StoryBookSection />
            <BestsellerSection itemList={bannerBookList?.item || []}/>
        </div>
    )
}