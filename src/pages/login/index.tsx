import { NextPage } from 'next';
import { signIn } from "next-auth/react";
import { LoginInput } from "@/components/LoginInput";
import { UserLoginProps } from '@/models/pages/userProp';
import { useSetRecoilState } from "recoil";
import { isLoadingAtom } from '@/hooks/recoil/atoms/loading';
import { isAllertAtom } from '@/hooks/recoil/atoms/alert';
import { LOGIN_ALERT_MESSAGE } from '@/constants/alert';

const Login: NextPage = () => {
    const setLoading = useSetRecoilState(isLoadingAtom);
    const setAllert = useSetRecoilState(isAllertAtom);

    const displayAlertMessage = (message: string) => {
        const data = { message: message, isShow: true };
        setAllert(data);
        setTimeout(() => {
            setAllert({message: "", isShow: false});
        }, 2500);
    }

    const loginClickHandle = async ({ email, password }: UserLoginProps) => {
        setLoading(true);
        const res = await signIn("credentials", { username: email, password: password, redirect: false });
        if (!res?.ok) {
            displayAlertMessage(LOGIN_ALERT_MESSAGE.INVALID_LOGIN);
        }
        setLoading(false);
    }

    return <LoginInput loginHandle={loginClickHandle} />;
}
export default Login;