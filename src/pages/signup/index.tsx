import { NextPage } from 'next';
import { SignupInput } from '@/components/SignupInput';
import { UserSingupProps } from '@/models/pages/userProp';
import { getUserEmailDuplicateCheck } from '@/api/user/userApi';

const Signup: NextPage = () => {

    const signupClickHandle = async (userForm: UserSingupProps) => {
        let { data } = await getUserEmailDuplicateCheck(userForm.email!);
    }

    return (
        <SignupInput singupHandle={signupClickHandle} title="회원가입"/>
    )
}

export default Signup;