import styles from './BestsellerSection.module.scss';
import { AladinItem } from '@/models/api/book/AladinItemListResponse';
import Link from "next/link";

type Props = {
    item: AladinItem[];
}

export const BestsellerSection: React.FC<Props> = ({
    item
}) => {
    console.log(item);
    if(item.length >= 1) {
        console.log(item[1].author?.split(',').find(data => data.includes('지은이')));
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
                        <ul className={styles.slideWrapper}>
                            {item.map(data => {
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
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}