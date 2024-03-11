import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { db } from '../lib/firebase';
import { collection, doc, getDocs, addDoc } from 'firebase/firestore';

const Layout = ({ children }: { children: JSX.Element }) => {
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
        <div>
            hi2
        </div>
    );
};

export default Layout;