import styles from './SubmitEmail.module.scss';

export const SubmitEmail: React.FC = () => {
    return (
        <div className={styles.submitEmail}>
            <div className={styles.wrap}>
                <div className={styles.inner}>
                    <div className={styles.header}>
                        <strong className={styles.title}></strong>
                    </div>
                    <div className={styles.body}>
                        <button className={styles.submitEmail}>이메일 전송</button>
                    </div>
                </div>
            </div>
        </div>
    )
}