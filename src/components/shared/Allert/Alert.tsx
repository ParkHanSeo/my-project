import { isAllertAtom } from '@/hooks/recoil/atoms/alert';
import styles from './Alert.module.scss';
import { useRecoilValue } from "recoil";

export const Alert = () => {

    const alertState = useRecoilValue(isAllertAtom);

    return (
        <>
            {alertState.isShow && (
                <div className={styles.alertContainer}>
                    <div className={styles.alertContent}>
                        <div className={styles.alertMessage}>{alertState.message}</div>
                    </div>
                </div>
            )}
        </>
        
    )
}