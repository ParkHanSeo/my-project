import { NextPage } from 'next';
import { signIn } from "next-auth/react";
import { LoginInput } from "@/components/LoginInput";
import { UserLoginProps } from '@/models/pages/userProp';
import { useSetRecoilState } from "recoil";
import { isLoadingAtom } from '@/hooks/recoil/atoms/loading';

const Login: NextPage = () => {
    const setLoading = useSetRecoilState(isLoadingAtom);

    const loginClickHandle = async ({ email, password }: UserLoginProps) => {
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