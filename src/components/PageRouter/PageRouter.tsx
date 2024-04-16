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
    
    const urls = ["/", "/login", "/signup"];
    console.log("path 체크");
    console.log(pathname);
    console.log(status);

    const pageRouter = () => {
        if (urls.includes(pathname)) {
            if (status === "authenticated") {
                router.push("/home");
                return;
            }
        } else {
            if (status === "unauthenticated") {
                router.push("/");
                return;
            }
            router.push("/");
            return;
        }
    }

    useEffect(() => {
        pageRouter();
    }, [session]);

    return (
        <>{children}</>
    )
}