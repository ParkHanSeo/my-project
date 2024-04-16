import styles from './BookDetail.module.scss';
import { useState, useMemo } from 'react';
import { AladinItem } from '@/models/api/book/AladinItemResponse';

type Props = {
    book: AladinItem
}

export const BookDetail: React.FC<Props> = ({
    book
}) => {

    const author = book.author?.split(',').find(book => book.includes('지은이'))?.replace('(지은이)','').trim();
    const bookCategory = book.categoryName?.split('>')[1];

    return (
        <div className={styles.detail}>
            <div className={styles.contents}>
                <div className={styles.coverContainer}>
                    <div className={styles.thombnail}>
                        <div className={styles.inner}>
                            <div className={styles.imageWrap}>
                                <picture>
                                    <img src={book.cover} alt={book.title}/>
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bookData}>
                        <div className={styles.bookInfo}>
                            <p className={styles.bookName}>
                                {book.title}
                            </p>
                            <p className={styles.bookAuthor}>
                                {author}
                            </p>
                        </div>
                    </div>
                    <div className={styles.bookSubData}>
                        <ul className={styles.detailSlide}>
                            <li className={styles.slideItem}>
                                <p>카테고리</p>
                                <strong>
                                    {bookCategory}
                                </strong>
                            </li>
                            <li className={styles.slideItem}>
                                <p>페이지</p>
                                <strong>
                                    {book.subInfo?.itemPage}
                                </strong>
                            </li>
                            <li className={styles.slideItem}>
                                <p>출판사</p>
                                <strong>
                                    {book.publisher}
                                </strong>
                            </li>
                            {/* <li className={styles.slideItem}>
                                <p>가격</p>
                                <strong>
                                    {book.priceStandard}
                                </strong>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}