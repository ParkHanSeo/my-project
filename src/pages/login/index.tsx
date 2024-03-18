import { NextPage } from 'next';
import { signIn } from "next-auth/react";
import { LoginInput } from "@/components/LoginInput";
import { UserProps } from '@/models/pages/userProp';
import { useSetRecoilState } from "recoil";
import { atom } from "recoil";

export const loadingState = atom({
    key: "loadingState",
    default: false,
});

const Login: NextPage = () => {
    const setLoading = useSetRecoilState(loadingState);

    const loginClickHandle = async ({ email, password }: UserProps) => {
        setLoading(true);
        const res = await signIn("credentials", { username: email, password: password, redirect: false });

        if (!res?.ok) {
            alert("error");
        }
        setLoading(false);
    }

    return <LoginInput title="로그인" loginHandle={loginClickHandle} />;
}
export default Login;