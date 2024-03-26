import { isAllertAtom } from '@/hooks/recoil/atoms/alert';
import styles from './Alert.module.scss';
import { useRecoilState, useRecoilValue } from "recoil";

export const Alert = () => {

    const alertState = useRecoilValue(isAllertAtom);

    return (
        <>
            {alertState.isShow && (
                <div className={styles.alertContainer}>
                    <p className={styles.alertMessage}>{alertState.message}</p>
                </div>
            )}
        </>
        
    )
}