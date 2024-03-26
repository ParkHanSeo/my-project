import React, { useState, useRef, ChangeEvent } from "react";
import styles from './LoginInput.module.scss';
import { UserLoginProps } from "@/models/pages/userProp";

type Props = {
    title: string;
    loginHandle: (loginData: UserLoginProps) => void;
}

export const LoginInput: React.FC<Props> = ({
    title,
    loginHandle,
}) => {
    const [loginData, setLoginData] = useState<UserLoginProps>({ email: "", password: "" });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const loginSubmitHandle = () => {
        loginHandle(loginData);
    };
    
    return (
        <div className={styles.login}>
            <div className={styles.loginContainer}>
                <h2>로그인</h2>
                <div className={styles.loginForm}>
                    <input type="text" name="email" placeholder="이메일" value={loginData.email} onChange={handleInputChange} />
                    <input type="password" name="password" placeholder="비밀번호" value={loginData.password} onChange={handleInputChange} />
                    <button onClick={loginSubmitHandle}>로그인</button>
                </div>
            </div>
        </div>       
    )
}