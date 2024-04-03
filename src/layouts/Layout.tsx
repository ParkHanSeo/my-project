import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { Spinner } from "@/components/shared/Spinner/Spinner";
import { isLoadingAtom } from "@/hooks/recoil/atoms/loading";
import { useRecoilValue } from "recoil";
import { Alert } from "@/components/shared/Allert/Alert";
import { PageRouter } from "@/components/PageRouter/PageRouter";
import { Header } from "./header/Header";
import { useBoolState } from "@/hooks/state/useBoolState";
import styles from './Layout.module.scss';

type Props = {
    children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
    const router = useRouter();
    const isLoading = useRecoilValue(isLoadingAtom);
    const {
		bool: showsServiceMenu,
		setFalse: hideServiceMenu,
		toggle: toggleShowServiceMenu,
	} = useBoolState(false);

    return (
            <>
                <Header
                    showsServiceMenu={showsServiceMenu}
                    hideServiceMenu={hideServiceMenu}
                    onToggleShowServiceMenu={toggleShowServiceMenu}
                />
                <div className={styles.layout}>
                    <PageRouter>
                        {children}
                        {isLoading && (
                            <Spinner />
                        )}
                        <Alert />
                    </PageRouter>
                </div>
            </>
    )
}