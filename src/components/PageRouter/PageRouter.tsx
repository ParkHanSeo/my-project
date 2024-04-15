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
    
    const pageRouter = () => {
        if('authenticated' === status) {
            if(pathname.includes("detail")) {
                return router.push(router.asPath);
            }
            return router.push('/home');
        }
        if('unauthenticated' === status) {
            return router.push('/');
        }
    }

    useEffect(() => {
        pageRouter();
    }, [session]);

    return (
        <>{children}</>
    )
}