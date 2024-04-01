import { NextPage } from 'next';
import { MainHome } from '@/components/MainHome';
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
    return <MainHome/>;
}
export default Home; 