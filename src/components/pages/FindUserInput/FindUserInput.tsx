import React, { useState, ChangeEvent, useCallback } from "react";
import styles from './FindUserInput.module.scss';

type Props = {
    title: string;
}

export const FindUserInput: React.FC<Props> = ({
    title
}) => {

    const [modalFlag, setModalFlag] = useState<Boolean>(false);
    const [findUserData, setFindUserData] = useState<string>();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFindUserData(e.target.value);
        handleCheckInput(e.target.value);
    };

    const handleCheckInput = useCallback((data: string) => {
        const test = data?.split('.')[1];
        
        if(test === 'kr' || test === 'com' || test === 'net') {
            return setModalFlag(true);
        }
        return setModalFlag(false);
    }, [findUserData]);

    return (
        <div className={styles.findUser}>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subTitle}>가입할 때 입력했던 이메일을 확인합니다.</p>
                <div className={styles.findUserForm}>
                    <div className={styles.input}>
                        <span className={styles.label}>이메일</span>
                        <input type="email" name="email" onChange={handleInputChange} placeholder="이메일 입력" />
                    </div>
                </div>
            </div>
        </div>
    )
}