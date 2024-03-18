import React, { ReactNode } from "react";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { PageRouter } from "@/components/PageRouter/PageRouter";
import { db } from '../../public/firebase';
import { collection, doc, getDocs, addDoc } from 'firebase/firestore';
import styles from './Layout.module.scss';

type Props = {
    children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {

    const router = useRouter();
    const { pathname } = router;
    const { data: session, status } = useSession();

    return (
            <div className={styles.layout}>
                <PageRouter>
                    {children}
                </PageRouter>
            </div>
    )
}