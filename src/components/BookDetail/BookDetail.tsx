import styles from './BookDetail.module.scss';
import { AladinItemResponse } from '@/models/api/book/AladinItemListResponse';

type Props = {
    book: AladinItemResponse
}

export const BookDetail: React.FC<Props> = ({
    book
}) => {

    return (
        <div>Check</div>
    )
}