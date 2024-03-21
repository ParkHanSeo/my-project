import styles from './Spinner.module.scss';
import spinner from '@/assets/loading-spinner.gif';

export const Spinner = () => {
    return (
        <div className={styles.loadingBackground}>
            <div className={styles.loadingText}></div>
            <img src={spinner.src} alt="" />
        </div>
    )
}