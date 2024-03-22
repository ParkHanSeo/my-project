import { NextPage } from 'next';
import { SignupInput } from '@/components/SignupInput';
import { UserSingupProps } from '@/models/pages/userProp';
import { useSetRecoilState } from "recoil";
import { loadingState } from '@/hooks/recoil/atoms/loadingState';
import { AddUser } from '@/api/user/services/addUser';
import { AddUserRequest } from '@/models/api/user/AddUserRequest';
import { AddUserResponse } from '@/models/api/user/AddUserResponse';
import { getUserEmailDuplicateCheck } from '@/api/user/services/getUserEmailDuplicate';
import { GetUserEmailDuplicateCheckRequest } from '@/models/api/user/GetUserEmailDuplicateCheckRequest';
import { GetUserEmailDuplicateCheckResponse } from '@/models/api/user/GetUserEmailDuplicateCheckResponse';

const Signup: NextPage = () => {

    const setLoading = useSetRecoilState(loadingState);

    const signupClickHandle = async (userForm: UserSingupProps) => {
        if(userForm.email) {
            const request: GetUserEmailDuplicateCheckRequest = { email: userForm.email };
            const check: GetUserEmailDuplicateCheckResponse = await getUserEmailDuplicateCheck(request);
            if(!check) {
                return;
            }
            setLoading(true);
            const requsetAddData: AddUserRequest = userForm;
            const res: AddUserResponse = await AddUser(userForm);
            setLoading(false);
        }
    }

    return (
        <SignupInput singupHandle={signupClickHandle} title="회원가입"/>
    )
}

export default Signup;