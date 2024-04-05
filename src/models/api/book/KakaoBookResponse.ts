import { ApiResponse } from "@/models/api/ApiResponse";

export interface KakaoBookResponse extends ApiResponse {
    meta: {
        // 검색된 문서 수
        total_count: number,
        // 중복된 문서를 제외하고, 처음부터 요청 페이지까지의 노출 가능 문서 수
        pageable_count: number,
        // 현재 페이지가 마지막 페이지인지 여부, 값이 false면 page를 증가시켜 다음 페이지를 요청할 수 있음
        is_end: boolean
    }
    documents: Document[];
}


interface Document {
    title: string,
    contents: string,
    url: string,
    isbn: string,
    datetime: Date,
    authors: string[],
    publisher: string,
    translators: string[],
    price: number,
    sale_price: number,
    thumbnail: string,
    status: string,
}