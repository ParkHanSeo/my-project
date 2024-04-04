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
                </div>
                <div className={styles.listWrap}></div>
            </div>
        </section>
    )
}