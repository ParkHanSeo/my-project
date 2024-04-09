import { ParsedUrlQuery } from 'querystring';
import { getOneParams } from '@/utils/query';

export const getParams = (query: ParsedUrlQuery) => {
    const params = getOneParams(
        query,
        'isbn'
    );

    return {
        isbn: params.isbn
    }
}