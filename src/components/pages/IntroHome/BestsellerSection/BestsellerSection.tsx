import styles from './BestsellerSection.module.scss';
import { useState, TouchEvent } from 'react';
import { AladinItem } from '@/models/api/book/AladinItemResponse';
import { BestsellerTile } from './BestsellerTile/BestsellerTile';
import Link from "next/link";

type Props = {
    itemList: AladinItem[];
}

export const BestsellerSection: React.FC<Props> = ({
    itemList
}) => {

    const [ touchX, setTouchX ] = useState(0);

    const onTouchStartHandle = (e: TouchEvent<HTMLUListElement>) => {
        setTouchX(e.changedTouches[0].pageX);
    }

    const onTouchEndHandle = (e: TouchEvent<HTMLUListElement>) => {
        const distanceX = touchX - e.changedTouches[0].pageX;
        const targetElement = e.target as HTMLElement;
        const targetUl = targetElement.closest('ul');
        
        if (targetUl) {
            const targetUlWidth = targetUl.offsetWidth / 2;
            const currentLeft = parseFloat(targetUl.style.left || '0');
            const newLeft = Math.abs(currentLeft) + distanceX;
    
            if (newLeft < 0) {
                targetUl.style.left = '0px';
            } else if (newLeft < targetUlWidth) {
                targetUl.style.left = `-${newLeft}px`;
            } else {
                targetUl.style.left = `-${targetUlWidth}px`;
            }
        }
    }

    return (
        <section className={styles.section}>
            <div className={styles.sectionWrap}>
                <div className={styles.textWrap}>
                    <h2>
                        베스트 셀러를 확인하세요
                    </h2>
                </div>
            </div>
            <div className={styles.bookList}>
                <div className={styles.bookSheif}>
                    <div className={styles.bookSlide}>
                        <ul className={styles.slideWrapper}
                            onTouchStart={onTouchStartHandle} 
                            onTouchEnd={onTouchEndHandle}
                        >
                            {itemList.map(item => {
                                return (
                                    <BestsellerTile data={item} key={item.isbn}/>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}