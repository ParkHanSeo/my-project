import styles from './SecondSection.module.scss';

export const SecondSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.sectionWrap}>
                <div className={styles.textWrap}>
                    <h2>
                        한걸음 두걸음 
                        <br />
                        나아가는 독서 플랫폼
                    </h2>
                    <p>
                        마음의 교양과 편안함을
                        <br />
                        함께 드리겠습니다
                    </p>
                </div>
                <div className={styles.listWrap}>
                    <ul className={styles.cardList}>
                        <li>
                            <div className={styles.cardTitle}>
                                <strong>내가 찾던 도서를 한눈에</strong>
                            </div>
                            <p className={styles.cardSubTitle}>
                                Temp 내용 1
                                <br />
                                Temp 내용 2
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}