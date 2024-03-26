import { atom } from "recoil";

export const isLoadingAtom = atom({
    key: "loadingState",
    default: false,
});