import React from "react";
import styles from './LoginInput.module.scss';

type Props = {
    title: string;
}

export const LoginInput: React.FC<Props> = ({
    title
}) => {
    return (
        <div className={styles.login}>
            <div className={styles.loginWrap}>
                <h1 className={styles.title}>{title}</h1>
                <div>
                    <label>아이디</label>
                    <input type="text" placeholder="아이디 입력" name="id"/>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="text" placeholder="비밀번호 입력" name="password"/>
                </div>                
            </div>
        </div>
    // <div className="relative h-full bg-main-color flex flex-col">
    //     <div className="flex-1 w-11/12 m-auto pt-4">
    //         <div className="flex gap-3 flex-1 items-center">
    //             <Link href={"/"}>
    //                 <img src="/icon/arrow-back-white.svg" alt="" width={28} height={28} />
    //             </Link>
    //         </div>
    //     </div>
    //     <div className="absolute pb-8 pt-5 top-1/2 -translate-y-1/2 bg-white w-full rounded-3xl drop-shadow-[0_1px_3px_rgba(25,40,47,0.5)]">
    //         <img src="/image/white-image.png" alt="" className="w-32 m-auto pt-3" />
    //         <UserInputBox title="로그인" handle={handleOnClickLogin} />
    //     </div>
    // </div>        
    )
}