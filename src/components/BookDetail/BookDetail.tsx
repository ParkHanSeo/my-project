import styles from './BookDetail.module.scss';
import { AladinItemResponse } from '@/models/api/book/AladinItemListResponse';

type Props = {
    book: AladinItemResponse
}

export const BookDetail: React.FC<Props> = ({
    book
}) => {
    console.log(book)
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
                </div>
            </div>
        </div>
    )
}