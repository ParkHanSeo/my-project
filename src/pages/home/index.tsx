import { NextPage } from 'next';
import { MainHome } from '@/components/MainHome';
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
    const { data: session } = useSession();
    return <MainHome/>;
}
export default Home; 