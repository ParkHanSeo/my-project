import { NextPage } from 'next';
import styles from './Intro.module.scss';

const Intro: NextPage = () => {
    return (
        <div>
            <section className={styles.firstSection}>
                <div className={styles.firstSectionWrap}>
                    <div className={styles.textWrap}>
                        <h1>내 일상속에 한줄기</h1>
                        <h3>마음의 편안함</h3>
                        <p className="siar">SIAR</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Intro;