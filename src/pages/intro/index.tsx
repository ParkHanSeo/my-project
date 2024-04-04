import { NextPage } from 'next';
import styles from './Intro.module.scss';
import { FirstSection } from './FirstSection/FirstSection';
import { SecondSection } from './SecondSection/SecondSection';

const Intro: NextPage = () => {
    return (
        <div>
            <FirstSection />
            <SecondSection />
        </div>
    )
}

export default Intro;