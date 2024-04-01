import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from 'next/image';
import starLogo from '@/assets/common/logo-290x290.png';
import kakaoLoginIcon from '@/assets/common/kakao_login_wide.png';

export default function index() {
    
    const handleOAuthLogin = async (type: string) => {
        await signIn(type, { callbackUrl: "/home" });
    };
    
    return (
            <div className="main">
                <div className="main_wrap">
                    <Image src={starLogo} alt="" />
                    <Link href="/login" className="link">
                        로그인
                    </Link>
                    <Link href="/signup" className="link">
                        회원가입
                    </Link>
                    <Image className="kakao_login_button" src={kakaoLoginIcon} alt="kakaoLogin" onClick={() => handleOAuthLogin("kakao")}/>
                </div>
            </div>
    );
}