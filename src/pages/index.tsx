import Link from "next/link";
import Image from 'next/image';
import siarLogo from '@/assets/common/logo-290x290.png';

export default function index() {
    
    return (
            <div className="main">
                <div className="main_wrap">
                    <Image src={siarLogo} alt="사이트 로고" />
                    <Link href="/login" className="link">
                        로그인
                    </Link>
                    <Link href="/signup" className="link">
                        회원가입
                    </Link>
                </div>
            </div>
    );
}