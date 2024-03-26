import { atom } from "recoil";

export const isAllertAtom = atom({
    key: "alertState",
    default: {
        message: "",
        isShow: false,
    },
});