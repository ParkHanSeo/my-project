import axios from "axios";
import { AddUserRequest } from "@/models/api/user/AddUserRequest";
import { AddUserResponse } from "@/models/api/user/AddUserResponse";

export function AddUser(
    request: AddUserRequest
): Promise<AddUserResponse> {
    return axios({
        url: "/api/user",
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        data: request,
    });
}