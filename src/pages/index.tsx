import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function index() {
    
    const handleOAuthLogin = async (type: string) => {
        await signIn(type, { callbackUrl: "/home" });
    };
    
    return (
            <div className="main">
                <div className="main_wrap">
                    <img src="/img/star_logo.png" alt="" />
                    <Link href="/login" className="link">
                        로그인
                    </Link>
                    <Link href="/signup" className="link">
                        회원가입
                    </Link>
                    <button className="kakao_login_button" onClick={() => handleOAuthLogin("kakao")}>
                        카카오 계정으로 로그인
                    </button>
                </div>
            </div>
    );
}