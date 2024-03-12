// import { requestPermission } from "@/utils/Notification";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function index() {
    
    const handleOAuthLogin = async (type: string) => {
        const result = await signIn(type, { callbackUrl: "/home" });
    };
    
    return (
            <div className="main">
                <div className="main_wrap">
                    <img src="/image/white-logo.png" alt="" style={{ width: "40%", paddingTop: "32px", paddingBottom: "10px" }} />
                    <Link href="/login" className="link">
                        로그인
                    </Link>
                    <Link href="/signup" className="link">
                        회원가입
                    </Link>
                    <button className="kakao_login_button" onClick={() => handleOAuthLogin("kakao")}>
                        <img src="/icon/kakaoicon.png" alt="" style={{ width: "8%" }} /> 카카오 계정으로 로그인
                    </button>
                </div>
            </div>
    );
}