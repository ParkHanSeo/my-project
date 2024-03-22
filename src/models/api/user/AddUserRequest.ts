import { ApiRequest } from "@/models/api/ApiRequest";

export interface AddUserRequest extends ApiRequest {
    email?: string;
    password?: string;
    nickname?: string;
    profileImage?: string;
}