import axios from "axios";
import { GetUserEmailDuplicateCheckRequest } from "@/models/api/user/GetUserEmailDuplicateCheckRequest";
import { GetUserEmailDuplicateCheckResponse } from "@/models/api/user/GetUserEmailDuplicateCheckResponse";

export function getUserEmailDuplicateCheck(
    request: GetUserEmailDuplicateCheckRequest
): Promise<GetUserEmailDuplicateCheckResponse> {
    return axios.get("/api/user", { params: { email: request.email } });
}
