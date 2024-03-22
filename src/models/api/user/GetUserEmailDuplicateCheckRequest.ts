import { ApiRequest } from "@/models/api/ApiRequest";

export interface GetUserEmailDuplicateCheckRequest extends ApiRequest {
    email: string;
}