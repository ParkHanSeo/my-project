import React, { ReactNode } from "react";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Spinner } from "@/components/shared/Spinner/Spinner";
import { loadingState } from "@/hooks/recoil/atoms/loadingState";
import { useRecoilValue } from "recoil";
import Link from "next/link";
import { PageRouter } from "@/components/PageRouter/PageRouter";
import { db } from "@/lib/firebase-config";
import { collection, doc, getDocs, addDoc } from 'firebase/firestore';
import styles from './Layout.module.scss';

type Props = {
    children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
    const router = useRouter();
    const isLoading = useRecoilValue(loadingState);
    const { pathname } = router;
    const { data: session, status } = useSession();

    return (
            <div className={styles.layout}>
                <PageRouter>
                    {isLoading && (
                        <Spinner />
                    )}
                    {children}
                </PageRouter>
            </div>
    )
}