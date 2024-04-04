import React, { useState, ChangeEvent, useEffect } from "react";
import styles from './SignupInput.module.scss';
import { UserSingupProps } from '@/models/pages/userProp';

type Props = {
    title: string;
    singupHandle: (signupForm: UserSingupProps) => void;
}

export const SignupInput: React.FC<Props> = ({
    title,
    singupHandle,
}) => {

    const [signupData, setSignupData] = useState<UserSingupProps>({ 
        email: "", 
        password: "",
        nickname: "",
        profileImage: "",
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignupData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const signupSubmitHandle = () => {
        singupHandle(signupData);
    }

    return (
        <div className={styles.signUp}>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subTitle}>만나뵙게되서 반갑습니다 시어입니다.</p>
                <div className={styles.signForm}>
                    <div className={styles.input}>
                        <span className={styles.label}>이메일</span>
                        <input type="email" name="email" onChange={handleInputChange} placeholder="이메일 입력" />
                    </div>
                    <div className={styles.input}>
                        <span className={styles.label}>비밀번호 8자리 이상</span>
                        <input type="password" name="password" onChange={handleInputChange} placeholder="비밀번호 입력" />
                    </div>
                    <div className={styles.input}>
                        <span className={styles.label}>닉네임</span>
                        <input type="text" name="nickname" onChange={handleInputChange} placeholder="닉네임 입력" />
                    </div>
                    <button className={styles.subitButton} onClick={signupSubmitHandle}>가입하기</button>
                </div>
            </div>
        </div>
    )
}