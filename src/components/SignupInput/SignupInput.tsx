import React, { useState, ChangeEvent } from "react";
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

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0].name;
        setSignupData(prevState => ({
            ...prevState,
            [e.target.name]: file
        }));
    }

    const signupSubmitHandle = () => {
        singupHandle(signupData);
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2> 
            <div className={styles.signForm}>
                <label htmlFor="email">이메일:</label>
                <input type="email" name="email" onChange={handleInputChange} />

                <label htmlFor="password">비밀번호:</label>
                <input type="password" name="password" onChange={handleInputChange} />

                <label htmlFor="nickname">닉네임:</label>
                <input type="text" name="nickname" onChange={handleInputChange} />

                <label htmlFor="profileImage">프로필 이미지:</label>
                <input type="file" name="profileImage" onChange={handleFileInputChange} />

                <button className={styles.subitButton} onClick={signupSubmitHandle}>가입하기</button>
            </div>
        </div>
    )
}