import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

type Props = {
    children: ReactNode;
}

export const PageRouter: React.FC<Props> = ({ 
    children 
}) => {

    const router = useRouter();
    const { pathname } = router;

    const { data: session, status } = useSession();

    const authURLs = ["/", "/login"];

    const pageRouter = () => {
        if(authURLs.includes(pathname)){
            if('authenticated' === status) {
                if(pathname.includes("detail")) {
                    return router.push('/detail');
                }
                return router.push('/home');
            }
        } else {
            if('unauthenticated' === status) {
                return router.push('/');
            }
        }
    }

    useEffect(() => {
        pageRouter();
    }, [session]);

    return (
        <>{children}</>
    )
}