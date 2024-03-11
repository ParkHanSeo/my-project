import React, { ReactNode } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { db } from '../lib/firebase';
import { collection, doc, getDocs, addDoc } from 'firebase/firestore';

type Props = {
    children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
    const router = useRouter();
    const { pathname } = router;
    const pahts = ["/home", "/friend", "/profile"];

    const testFireBase = async () => {
        console.log(db);
        const testRef = await addDoc(collection(db, 'myProject'), {
            completed: true,
            test: "하이하이"
        });        
        const query = await getDocs(collection(db, 'myProject'));
        console.log(testRef.id);
    }

    useEffect(() => {
        testFireBase();
    })
    return (
        <div>안뇽</div>
    )
}