import React, { useState, useCallback, useEffect } from "react";
import Router from 'next/router';
import classNames from "classnames";
import styles from './Header.module.scss';
import Link from "next/link";
import Image from 'next/image';
import logoImage from '@/assets/common/icon/icon-57x57.png';

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
                <div className={styles.navBoxWrapper}>
                    <nav>
                        {/* <ul>
                            <li><a href="#">기업문의</a></li> 
                            <li><a href="#">회사소개</a></li> 
                            <li><a href="#">계정관리</a></li> 
                            <li><a href="#">고객센터</a></li>
                        </ul> */}
                    </nav> 
                    <button>로그인</button>
                </div>
            </div>
        </div>
    )
}