import styles from './StoryBookSection.module.scss';

export const StoryBookSection: React.FC<{}> = ({

}) => {
    return (
        <section className={styles.section}>
            <div className={styles.sectionWrap}>
                <div className={styles.textWrap}>
                    <h2>
                        나에게 찾아오는
                        <br />
                        수많은 이야기들
                    </h2>
                    <p>
                        어떤 이야기가 있는지 확인해보세요
                    </p>
                </div>
            </div>
            <div className={styles.bookslideWrap}>
                <div className={styles.slide01}></div>
            </div>
        </section>
    )
}