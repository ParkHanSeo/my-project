import { NextPage } from 'next';
import { Home } from '@/components/Home';
import { useSession } from "next-auth/react";

const MainHome: NextPage = () => {
    const { data: session } = useSession();
    return <Home/>;
}
export default MainHome;