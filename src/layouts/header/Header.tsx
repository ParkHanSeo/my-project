import React, { useState, useCallback, useEffect } from "react";
import Router from 'next/router';
import classNames from "classnames";
import styles from './Header.module.scss';
import Link from "next/link";
import Image from 'next/image';
import logoImage from '@/assets/common/icon/icon-57x57.png';
import { Drawer } from "@/components/modals/Drawer/Drawer";
import { SideMenu } from "./SideMenu/SideMenu";

type Props = {
	showsServiceMenu: boolean;
	showsSearchBox?: boolean;
	hideServiceMenu: () => void;
	onToggleShowServiceMenu: () => void;
};

export const Header: React.VFC<Props> = ({
	showsServiceMenu,
	showsSearchBox = true,
	hideServiceMenu,
	onToggleShowServiceMenu,
}) => {
    const [menuActive, setMenuActive] = useState(false);

    const onStartToChangeRoute = useCallback(() => {
		if (menuActive) {
			setMenuActive(false);
		}

		hideServiceMenu();
	}, [hideServiceMenu, menuActive]);

    useEffect(() => {
		Router.events.on('routeChangeStart', onStartToChangeRoute);
		return () => {
			Router.events.off('routeChangeStart', onStartToChangeRoute);
		};
	}, [onStartToChangeRoute]);

    const handleClickMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        setMenuActive(false);
		onToggleShowServiceMenu();
    }

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.header}>
                <button 
                    className={classNames(styles.menu, showsServiceMenu ? styles.active : '')} 
                    onClick={handleClickMenu}
                >
                    <span>메뉴 열기</span>
                </button>
                <div className={styles.logoWrap}>
                    <Link
                        className={styles.logoImage}
                        href={"/"}
                    >
                        <Image src={logoImage} alt=""/>
                    </Link>
                </div>
                <Drawer 
                    isOpen={showsServiceMenu}
                    top={50}
                    slideFrom="left"
                    className={styles.serviceMenu}
                >
                    <SideMenu />
                </Drawer>
                <button className={styles.navBoxButton}>
                    <Link href={"/login"} className={styles.loginLink}>
                        로그인
                    </Link>
                </button>
            </div>
        </div>
    )
}