import React, { useState, useRef, ChangeEvent } from "react";
import styles from './LoginInput.module.scss';
import { UserProps } from "@/models/pages/userProp";

type Props = {
    title: string;
    loginHandle: (loginData: UserProps) => void;
}

export const LoginInput: React.FC<Props> = ({
    title,
    loginHandle,
}) => {
    const [loginData, setLoginData] = useState<UserProps>({ email: "", password: "" });

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
            <div className={styles.loginWrap}>
                <h1 className={styles.title}>{title}</h1>
                <div>
                    <label>이메일</label>
                    <input type="text" placeholder="아이디 입력" name="email" value={loginData.email} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password" placeholder="비밀번호 입력" name="password" value={loginData.password} onChange={handleInputChange}/>
                </div>
                <button onClick={loginSubmitHandle}>로그인</button>
            </div>
        </div>       
    )
}