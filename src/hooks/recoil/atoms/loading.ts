import { atom } from "recoil";

export const loading = atom({
    key: "loadingState",
    default: false,
})