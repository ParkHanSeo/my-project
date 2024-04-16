import React from "react";
import { AladinItem } from '@/models/api/book/AladinItemResponse';
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { pagesPath } from "@/utils/$path";
import Link from "next/link";
import styles from './BestsellerTile.module.scss';

type Props = {
    data: AladinItem;
}

export const BestsellerTile: React.VFC<Props> = ({
    data
}) => {
    const router = useRouter();

    const getDetailUrl = (query?: ParsedUrlQuery) => {
        return pagesPath.detail._isbn(data.isbn).$url({
            query: {
                ...query
            },
        })
    }

    const handleMoveDatail = () => {
        router.push(`/detail/${data.isbn}`)
    }

    return (
        <Link href={getDetailUrl()} onClick={handleMoveDatail}>
            <li className={styles.item}>
                <div className={styles.books}>
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
                </div>
            </li>
        </Link>
    )
}