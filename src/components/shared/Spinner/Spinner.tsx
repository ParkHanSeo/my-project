import styles from './Spinner.module.scss';
import spinner from '@/assets/loading-spinner.gif';
import Image from 'next/image';

export const Spinner = () => {
    return (
        <div className={styles.loadingBackground}>
            <div className={styles.loadingText}></div>
            <Image src={spinner} alt="" />
        </div>
    )
}