import { ApiResponse } from "@/models/api/ApiResponse";

export interface GetUserEmailDuplicateCheckResponse extends ApiResponse {
    data: boolean;
}