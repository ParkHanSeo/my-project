import axios from "axios";
import { KakaoBookRequest } from "@/models/api/book/KakaoBookRequest";
import { KakaoBookResponse } from "@/models/api/book/KakaoBookResponse";

export async function kakaoBook(
    request: KakaoBookRequest
): Promise<KakaoBookResponse> {
    const kakaoBook = axios.create({
        baseURL: 'https://dapi.kakao.com',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Host': 'dapi.kakao.com',
            'Authorization': `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}`,
        },  
    });
    return kakaoBook.get('/v3/search/book', { params: request });
}