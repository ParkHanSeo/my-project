import React from "react";
import { AladinItem } from '@/models/api/book/AladinItemListResponse';
import Link from "next/link";
import styles from './BestsellerTile.module.scss';

type Props = {
    data: AladinItem;
}

export const BestsellerTile: React.VFC<Props> = ({
    data
}) => {
    return (
        <li className={styles.item}>
            <div className={styles.books}>
                <Link className={styles.bookLink} href="#">
                    <div className={styles.thumbnail}>
                        <div className={styles.thumbnailInner}>
                            <div className={styles.bookPicture}>
                                <picture>
                                    <img className={styles.bookImage} src={data.cover} alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textItem}>
                        <p className={styles.textTitle}>
                            {data.title}
                        </p>
                        <p className={styles.textAuthor}>
                            {data.author?.split(',').find(data => data.includes('지은이'))}
                        </p>
                        <p className={styles.textAuthor}>
                            {data.publisher}
                        </p>
                    </div>
                </Link>
            </div>
        </li>
    )
}