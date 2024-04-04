import React, { useState, useEffect, ChangeEvent } from "react";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from 'next/image';
import styles from './LoginInput.module.scss';
import { UserLoginProps } from "@/models/pages/userProp";
import kakaoIcon from '@/assets/common/icon/kakao-icon.svg';

type Props = {
    loginHandle: (loginData: UserLoginProps) => void;
}

export const LoginInput: React.FC<Props> = ({
    loginHandle,
}) => {
    const [loginData, setLoginData] = useState<UserLoginProps>({ email: "", password: "" });
    const [loginActive, setLoginActive] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() => {
        if(loginData.email !== "" && loginData.password !== "") {
            setLoginActive(true);
        } else {
            setLoginActive(false);
        }
    },[loginData.email, loginData.password]);

    const loginSubmitHandle = () => {
        loginHandle(loginData);
    };

    const handleOAuthLogin = async (type: string) => {
        await signIn(type, { callbackUrl: "/home" });
    };

    return (
        <div className={styles.login}>
            <div className={styles.loginContainer}>
                <h2 className={styles.title}>독서라는 세상과 함께</h2>
                <p className={styles.subTitle}>인생 글귀를 찾아보세요</p>
                <div className={styles.loginForm}>
                    <div>
                        <span className={styles.label}>이메일</span>
                        <input type="text" name="email" placeholder="이메일 입력" value={loginData.email} onChange={handleInputChange} />
                    </div>
                    <div>
                        <span className={styles.label}>비밀번호</span>
                        <input type="password" name="password" placeholder="비밀번호 입력" value={loginData.password} onChange={handleInputChange} />
                    </div>
                    <button 
                        className={styles.loginButton} 
                        onClick={loginSubmitHandle}
                        disabled={!loginActive}
                    >로그인</button>

                    <ul className={styles.loginSubMenu}>
                        <li>
                            <Link className={styles.link} href="/signup">
                                회원가입
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="#">
                                계정 정보 찾기
                            </Link>
                        </li>
                    </ul>
                    
                    <div className={styles.or}>
                        <p className={styles.orTitle}>또는</p>
                    </div>

                    <div className={styles.snsList}>
                        <button 
                            className={styles.snsButtonKakao}
                            onClick={() => handleOAuthLogin("kakao")}
                        >
                            <Image 
                                src={kakaoIcon} 
                                alt="카카오 로그인"    
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>       
    )
}