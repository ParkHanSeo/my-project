import { ApiRequest } from "@/models/api/ApiRequest";

export interface KakaoBookRequest extends ApiRequest {
    // 검색을 원하는 질의어
    query?: string;

    // 결과 문서 정렬 방식, accuracy(정확도순) 또는 latest(발간일순), 기본값 accuracy X
    sort?: string;

    // 결과 페이지 번호, 1~50 사이의 값, 기본 값 1	X
    page?: number;

    // 한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10	X
    size?: number;

    // 사용 가능한 값: title(제목), isbn (ISBN), publisher(출판사), person(인명)
    target?: string;
}