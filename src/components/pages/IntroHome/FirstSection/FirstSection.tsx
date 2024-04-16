import styles from './FirstSection.module.scss';

export const FirstSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.sectionWrap}>
                <div className={styles.textWrap}>
                    <h1>내 일상속에 한줄기</h1>
                    <h3>마음의 편안함</h3>
                    <p className="siar">SIAR</p>
                </div>
            </div>
        </section>
    )
}