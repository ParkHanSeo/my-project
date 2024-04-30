import { NextPage } from 'next';
import { FindUserInput } from '@/components/pages/FindUserInput'; 

const FindUser: NextPage = () => {

    return (
        <FindUserInput title="계정 정보 찾기"/>
    )
}

export default FindUser;