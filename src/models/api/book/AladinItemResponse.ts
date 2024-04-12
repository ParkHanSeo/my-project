import { ApiResponse } from "@/models/api/ApiResponse";

export interface AladinItemResponse extends ApiResponse {
    version?: number; // API 버전
    title?: string; // API 결과의 제목
    link?: string; // API 결과와 관련된 알라딘 페이지 URL 주소
    pubDate?: string; // API 출력일 문자형 날짜
    totalResults?: number; // API의 총 결과수
    startIndex?: number; // 페이지수
    itemsPerPage?: number; // 한 페이지에 출력될 상품 수
    query?: string; // API로 조회한 쿼리
    searchCategoryId?: number; // 분야로 조회한 경우 해당 분야의 ID
    searchCategoryName?: string; // 분야로 조회한 경우 해당 분야의 분야명
    item: AladinItem[]; // 상품정보
}

export interface AladinItem {
    title?: string; // 상품명
    link?: string; // 상품 링크 URL
    categoryName?: string;
    author?: string; // 저자/아티스트
    pubdate?: string; // 출간일(출시일) 날짜
    description?: string; // 상품설명 (요약)
    isbn?: string; // 10자리 ISBN
    isbn13?: string; // 13자리 ISBN
    priceSales?: number; // 판매가
    priceStandard?: number; // 정가
    mallType?: "BOOK" | "MUSIC" | "DVD" | "FOREIGN" | "EBOOK" | "USED"; // 상품의 몰타입
    stockstatus?: string; // 재고상태
    mileage?: number; // 마일리지
    cover?: string; // 커버(표지) URL
    publisher?: string; // 출판사(제작사/출시사)
    salesPoint?: number; // 판매지수
    adult?: boolean; // 성인 등급 여부
    fixedPrice?: boolean; // 정가제 여부
    customerReviewRank?: number; // 회원 리뷰 평점
    bestDuration?: string; // 베스트셀러 순위 관련 추가 정보
    bestRank?: number; // 베스트셀러 순위 정보
    seriesInfo?: {
        seriesId?: number; // 시리즈 ID
        seriesLink?: string; // 해당 시리즈의 조회 URL
        seriesName?: string; // 시리즈 이름
    };
    subInfo?: {
        ebookList?: {
            itemId: number; // 해당 종이책의 전자책 ItemId
            ISBN: string; // 해당 종이책의 전자책 ISBN
            isbn13: string; // 해당 종이책의 전자책 13자리 ISBN
            priceSales: number; // 해당 종이책의 전자책 판매가
            link: string; // 해당 종이책의 전자책 상품페이지 링크
        }[];
        usedList?: {
            aladinUsed?: {
                itemCount: number; // 알라딘 직접 배송 중고의 보유 상품수
                minPrice: number; // 알라딘 직접 배송 중고의 보유 상품중 최저가 상품 판매가격
                link: string; // 알라딘 직접 배송 중고의 리스트 페이지 URL
            };
            userUsed?: {
                itemCount: number; // 회원 직접 배송 중고의 보유 상품수
                minPrice: number; // 회원 직접 배송 중고의 보유 상품중 최저가 상품 판매가격
                link: string; // 회원 직접 배송 중고의 리스트 페이지 URL
            };
            spaceUsed?: {
                itemCount: number; // 광활한 우주점(매장 배송) 중고의 보유 상품수
                minPrice: number; // 광활한 우주점(매장 배송) 중고의 보유 상품중 최저가 상품 판매가격
                link: string; // 광활한 우주점(매장 배송) 중고의 리스트 페이지 URL
            };
        };
        usedType?: string; // 중고상품의 알라딘,회원 직접 배송 여부
        newBookList?: {
            itemId: number; // 중고상품의 새책 itemId
            isbn: string; // 중고상품의 새책 isbn
            isbn13: string; // 중고상품의 새책 13자리 isbn
            priceSales: number; // 중고상품의 새책 판매가격
            link: string; // 중고상품의 새책 상품페이지 URL
        }[];
        paperBookList?: {
            itemId: number; // 전자책에 해당하는 종이책 itemId
            isbn: string; // 전자책에 해당하는 종이책 isbn
            priceSales: number; // 전자책에 해당하는 종이책 판매가격
            link: string; // 전자책에 해당하는 종이책 상품페이지 URL
        }[];
        fileFormatList?: {
            fileType: string; // 전자책의 포맷정보
            fileSize: number; // 전자책의 용량정보 (byte단위)
        }[];
        itemPage: number;
    };
}