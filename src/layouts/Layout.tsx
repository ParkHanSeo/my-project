import React, { ReactNode } from "react";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { PageRouter } from "@/components/router/PageRouter";
import { db } from '../lib/firebase';
import { collection, doc, getDocs, addDoc } from 'firebase/firestore';

type Props = {
    children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
    const handleOAuthLogin = async (type: string) => {
        const result = await signIn(type, { callbackUrl: "/home" });
    };    

    const router = useRouter();
    const { pathname } = router;
    const { data: session, status } = useSession();

    console.log("데이터 체크");
    console.log(router);
    console.log(session);

    return (
            <PageRouter>
                {children}
            </PageRouter>
    )
}