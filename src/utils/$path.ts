import { OptionalQuery as DetailQuery } from '../pages/detail/[isbn]';

export const pagesPath = {
    detail: {
        _isbn: (isbn: string | number) => ({
            $url: (url?: { query?: DetailQuery, hash?: string }) => ({ pathname: '/detail/[isbn]' as const, query: { isbn, ...url?.query }, hash: url?.hash })
        })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}