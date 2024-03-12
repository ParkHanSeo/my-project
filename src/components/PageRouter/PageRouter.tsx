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

    // console.log("데이터 체크");
    // console.log(pathname);

    const pageRouter = () => {

    }

    return (
        <>{children}</>
    )
}