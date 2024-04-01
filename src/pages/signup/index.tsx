import { NextPage } from 'next';
import { useRouter } from "next/router";
import { SignupInput } from '@/components/SignupInput';
import { UserSingupProps } from '@/models/pages/userProp';
import { useSetRecoilState } from "recoil";
import { isLoadingAtom } from '@/hooks/recoil/atoms/loading';
import { isAllertAtom } from '@/hooks/recoil/atoms/alert';
import { ALERT_MESSAGE } from '@/constants/alert';
import { AddUser } from '@/api/user/services/addUser';
import { AddUserRequest } from '@/models/api/user/AddUserRequest';
import { AddUserResponse } from '@/models/api/user/AddUserResponse';
import { getUserEmailDuplicateCheck } from '@/api/user/services/getUserEmailDuplicate';
import { GetUserEmailDuplicateCheckRequest } from '@/models/api/user/GetUserEmailDuplicateCheckRequest';
import { GetUserEmailDuplicateCheckResponse } from '@/models/api/user/GetUserEmailDuplicateCheckResponse';

const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

const Signup: NextPage = () => {
    const router = useRouter();

    const setLoading = useSetRecoilState(isLoadingAtom);
    const setAllert = useSetRecoilState(isAllertAtom);

    const displayAlertMessage = (message: string) => {
        const data = { message: message, isShow: true };
        setAllert(data);
        setTimeout(() => {
            setAllert({message: "", isShow: false});
        }, 2000);
    }

    const signupClickHandle = async (userForm: UserSingupProps) => {
        await singupInputCheck(userForm);
        setLoading(true);
        const requsetAddData: AddUserRequest = userForm;
        const res: AddUserResponse = await AddUser(requsetAddData);
        setLoading(false);
        displayAlertMessage(ALERT_MESSAGE.SINGUP_SUCCESS);
        router.push("/login");
    }

    const singupInputCheck = async ({email, password, nickname, profileImage}: UserSingupProps) => {
        if(email && !regex.test(email)) {
            displayAlertMessage(ALERT_MESSAGE.INVALID_EMAIL_FORMAT);
            return;
        }
        
        if(password === "" && password.length < 8) {
            displayAlertMessage(ALERT_MESSAGE.PASSWORD_CHECK);
            return;
        }

        if(nickname === "") {
            displayAlertMessage(ALERT_MESSAGE.NICKNAME_CHECK);
            return;
        }

        const request: GetUserEmailDuplicateCheckRequest = { email: email! };
        const check: GetUserEmailDuplicateCheckResponse = await getUserEmailDuplicateCheck(request);
        
        if(!check.data) {
            displayAlertMessage(ALERT_MESSAGE.DUPLICATE_EMAIL);
            return;
        }

    }

    return (
        <SignupInput singupHandle={signupClickHandle} title="회원가입"/>
    )
}

export default Signup;