import styles from './SideMenu.module.scss';

export const SideMenu: React.VFC = () => {
    return (
        <div className={styles.navBox}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li>
                        <a href="#">기업문의</a>
                    </li> 
                    <li>
                        <a href="#">회사소개</a>
                    </li> 
                    <li>
                        <a href="#">계정관리</a>
                    </li> 
                    <li>
                        <a href="#">고객센터</a>
                    </li>
                </ul>
            </nav> 
        </div>
    )
}